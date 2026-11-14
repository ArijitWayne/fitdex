# Public release approval policy

Every GitHub release body must contain exactly one standalone `FitDex-Release-Status:` field. The shared implementation is `shared/releasePolicy.ts`; Android and FitDexInfo import the same policy.

- `successful`: approved for the changelog. Promotion/update selection additionally requires a canonical official APK URL/name, positive size/versionCode, valid publication date and SHA-256.
- `superseded`: withdrawn/unsuccessful release replaced by another release; excluded from changelogs and promotion. This does not mean an ordinary older successful release should be withdrawn.
- `failed`: unsuccessful release without an approved replacement yet; excluded from changelogs and promotion.
- Missing, unknown or duplicate fields: unapproved, excluded. Drafts and prereleases remain excluded regardless of approval.

This is release metadata, not a version denylist. Do not change code for each future successful or failed release. Change its public approval field. The original GitHub release, tag and APK remain available as historical records.

`v2.2.1.md` is the publication body for the new release. `status-updates/` preserves the existing public bodies and adds approval metadata: historical stable releases remain successful; v2.2.0 is explicitly superseded/unsuccessful. Review and apply those files with the commands in the publication handoff. They are not uploaded automatically.

Approval status is authoritative only when freshly retrieved. FitDexInfo does not use stored browser releases to authorize promotion. On API failure, it clears live promotion and uses the source-reviewed successful v2.1.0 snapshot. Never set that fallback to an unpublished or unsuccessful release. After v2.2.1 is published, update the snapshot from its actual publication metadata and redeploy if an offline v2.2.1 fallback is desired. No offline client can learn a future remote revocation without connectivity; withdraw/update a fallback snapshot when its approved release changes status.

Publish one release body at a time. Do not use aggregate root RELEASE_NOTES.md as the GitHub release body: it intentionally contains multiple releases and approval fields.
