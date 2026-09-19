# Security Policy

FitDex takes the security and privacy of its users seriously.

As a local-first application, FitDex does not operate cloud databases or store personal user records on remote servers. However, ensuring secure package builds, safe local data handling, and robust Android sandboxing remains a top priority.

---

## Supported Versions

Only the latest release receives active security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0.0 | :x:                |

---

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues or discussions.**

To report a vulnerability:

1. Use GitHub's built-in **[Private Vulnerability Reporting](https://github.com/ArijitWayne/fitdex/security/advisories/new)** interface on this repository.
2. Provide a clear description of the vulnerability, including:
   - **FitDex Version & Platform:** (e.g., 1.0.0 on Android 14 APK or Web PWA)
   - **Type of Issue:** (e.g., Android intent redirection, data leakage, insecure script execution, malformed backup handling)
   - **Reproduction Steps:** Step-by-step instructions or a minimal proof-of-concept
   - **Potential Impact:** Explanation of how this could affect a user or device
   - **Suggested Mitigations:** If known

> [!NOTE]
> Please do not include unnecessary personal data, actual credentials, or third-party secrets in vulnerability reports.

---

## Coordinated Disclosure Process

- **Acknowledgement:** I aim to acknowledge valid vulnerability reports within 72 hours.
- **Investigation:** I will review the report, verify reproduction steps, and assess the severity.
- **Resolution & Disclosure:** Once a fix is verified, an updated version will be published alongside an advisory crediting your responsible disclosure (unless you request anonymity). Please practice coordinated disclosure and allow reasonable time to remediate issues before making them public.
