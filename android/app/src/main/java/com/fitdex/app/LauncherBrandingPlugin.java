package com.fitdex.app;

import android.content.ComponentName;
import android.content.pm.PackageManager;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginCall;

@CapacitorPlugin(name = "LauncherBranding")
public class LauncherBrandingPlugin extends Plugin {
    @PluginMethod
    public void setLauncherBranding(PluginCall call) {
        String family = call.getString("family");
        if (!"spartan".equals(family) && !"amazonian".equals(family)) {
            call.reject("Unsupported FitDex branding family");
            return;
        }

        PackageManager packageManager = getContext().getPackageManager();
        String packageName = getContext().getPackageName();
        ComponentName spartan = new ComponentName(packageName, packageName + ".SpartanLauncher");
        ComponentName amazonian = new ComponentName(packageName, packageName + ".AmazonianLauncher");
        ComponentName active = "spartan".equals(family) ? spartan : amazonian;
        ComponentName inactive = "spartan".equals(family) ? amazonian : spartan;

        // Enable the new entry first so the application is always launchable.
        packageManager.setComponentEnabledSetting(active, PackageManager.COMPONENT_ENABLED_STATE_ENABLED, PackageManager.DONT_KILL_APP);
        packageManager.setComponentEnabledSetting(inactive, PackageManager.COMPONENT_ENABLED_STATE_DISABLED, PackageManager.DONT_KILL_APP);
        call.resolve();
    }
}
