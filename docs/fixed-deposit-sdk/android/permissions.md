---
id: permissions
title: Android Permissions
sidebar_label: Android Permissions
---

# 5. Android Setup

Nothing to do manually. The SDK declares its own permissions (`INTERNET`, `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`) and native dependencies in its own `build.gradle` / `AndroidManifest.xml`; Gradle's manifest merger folds them into your app automatically.

Just rebuild.
