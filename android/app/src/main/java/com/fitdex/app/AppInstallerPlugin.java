package com.fitdex.app;

import android.content.Context;
import android.content.ClipData;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.MessageDigest;

@CapacitorPlugin(name = "AppInstaller")
public class AppInstallerPlugin extends Plugin {

    @PluginMethod
    public void canRequestPackageInstalls(PluginCall call) {
        JSObject ret = new JSObject();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            boolean canInstall = getContext().getPackageManager().canRequestPackageInstalls();
            ret.put("canInstall", canInstall);
        } else {
            ret.put("canInstall", true);
        }
        call.resolve(ret);
    }

    @PluginMethod
    public void openInstallPermissionSettings(PluginCall call) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            try {
                Intent intent = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES);
                intent.setData(Uri.parse("package:" + getContext().getPackageName()));
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                getContext().startActivity(intent);
                call.resolve();
            } catch (Exception e) {
                // Fallback to general security/app settings if specific intent fails
                try {
                    Intent intent = new Intent(Settings.ACTION_SECURITY_SETTINGS);
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    getContext().startActivity(intent);
                    call.resolve();
                } catch (Exception ex) {
                    call.reject("Failed to open install settings: " + ex.getMessage());
                }
            }
        } else {
            call.resolve();
        }
    }

    @PluginMethod
    public void verifyApkChecksum(PluginCall call) {
        String filePath = call.getString("path");
        String expectedSha256 = call.getString("expectedSha256");

        if (filePath == null || filePath.isEmpty()) {
            call.reject("File path must be provided");
            return;
        }

        File file = resolveFile(filePath);
        if (file == null || !file.exists() || file.length() == 0) {
            call.reject("APK file does not exist or is empty");
            return;
        }

        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] buffer = new byte[65536]; // 64 KB buffer for streaming hash
            try (InputStream is = new FileInputStream(file)) {
                int read;
                while ((read = is.read(buffer)) != -1) {
                    digest.update(buffer, 0, read);
                }
            }

            byte[] hashBytes = digest.digest();
            StringBuilder sb = new StringBuilder();
            for (byte b : hashBytes) {
                sb.append(String.format("%02x", b));
            }
            String actualSha256 = sb.toString();

            JSObject ret = new JSObject();
            ret.put("actualSha256", actualSha256);
            ret.put("sizeBytes", file.length());

            if (expectedSha256 != null && !expectedSha256.trim().isEmpty()) {
                boolean matches = actualSha256.equalsIgnoreCase(expectedSha256.trim());
                ret.put("matches", matches);
            } else {
                ret.put("matches", true);
            }

            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to compute SHA-256: " + e.getMessage());
        }
    }

    @PluginMethod
    public void installApk(PluginCall call) {
        String filePath = call.getString("path");
        if (filePath == null || filePath.isEmpty()) {
            call.reject("File path must be provided");
            return;
        }

        File file = resolveFile(filePath);
        if (file == null || !file.exists() || file.length() == 0) {
            call.reject("APK file does not exist or is empty");
            return;
        }

        Context context = getContext();
        try {
            File updaterDirectory = new File(context.getCacheDir(), "updates");
            String updaterPath = updaterDirectory.getCanonicalPath() + File.separator;
            if (!file.getCanonicalPath().startsWith(updaterPath) || !file.getName().matches("fitdex-[0-9]+\\.[0-9]+\\.[0-9]+(?:-[a-zA-Z0-9.-]+)?(?:-[0-9]+)?\\.apk")) {
                call.reject("APK path is not a FitDex updater artifact");
                return;
            }
            Uri contentUri = FileProvider.getUriForFile(
                context,
                context.getPackageName() + ".fileprovider",
                file
            );

            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(contentUri, "application/vnd.android.package-archive");
            intent.setClipData(ClipData.newRawUri("FitDex update", contentUri));
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

            context.startActivity(intent);

            JSObject ret = new JSObject();
            ret.put("success", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Failed to launch package installer: " + e.getMessage());
        }
    }

    private File resolveFile(String path) {
        if (path.startsWith("file://")) {
            return new File(Uri.parse(path).getPath());
        }
        File f = new File(path);
        if (f.isAbsolute()) {
            return f;
        }
        // Try relative to cache dir first, then files dir
        File cacheFile = new File(getContext().getCacheDir(), path);
        if (cacheFile.exists()) return cacheFile;
        File filesFile = new File(getContext().getFilesDir(), path);
        if (filesFile.exists()) return filesFile;
        return cacheFile;
    }
}
