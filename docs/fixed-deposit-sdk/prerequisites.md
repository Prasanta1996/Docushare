---
id: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
---

# 2. Prerequisites

| Requirement | Detail |
|---|---|
| React Native app | Existing RN app with standard iOS/Android native projects (not Expo Go — a native project or custom dev client is required for native modules). |
| iOS deployment target | iOS 13.0 or later (set by the SDK's podspec). |
| Android SDK levels | Whatever minSdkVersion / compileSdkVersion / targetSdkVersion your app's root build.gradle already defines — the module reads them via rootProject.ext. |
| Partner code | Your partner code, issued directly to you by Finspring. |
| Environment base URL | Finspring's API base URL for your environment, issued directly to you (not published in this document) — this is what you pass as apiBaseUrl. |
