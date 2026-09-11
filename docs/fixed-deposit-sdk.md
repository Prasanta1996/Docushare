---
id: fixed-deposit-sdk
title: Fixed Deposit SDK — Implementation Guide
sidebar_label: Fixed Deposit SDK
---

# Fixed Deposit SDK — Implementation Guide

**Fixed Deposit SDK for React Native**

How to embed Finspring's Fixed Deposit investment flow — registration, guest sign-in, VKYC, and biometric authentication — inside your partner app on iOS and Android.

- **Package:** `@finspringinnovations/fixed-deposit`
- **SDK version:** `0.7.0`
- **Audience:** Partner mobile engineering teams
- **Document date:** September 2, 2026
- **© Finspring Innovations — Confidential, for partner use only**

## 1. Overview

The Fixed Deposit SDK is a React Native module that drops a fully native, end-to-end Fixed Deposit investment flow into your app — customer registration, guest sign-in, VKYC verification, and biometric authentication — without you having to build any of that UI yourself.

Calling `FixedDeposit.launch(options)` handles everything needed to identify and sign the customer in against Finspring's API internally, then presents the SDK's own native screen on both platforms. From your app's point of view, integration is one function call — there's no separate signin or registration step for you to implement.

### Where these calls go

`apiBaseUrl` points directly at Finspring's API for your environment — you do not host or implement anything yourself.

The actual URL and your partner code aren't published in this document — they're shared with you by email at the time of onboarding, in a separate email. `customerId` is your partner platform's own unique user reference id for the customer.

## 2. Prerequisites

| Requirement | Detail |
|---|---|
| React Native app | Existing RN app with standard iOS/Android native projects (not Expo Go — a native project or custom dev client is required for native modules). |
| iOS deployment target | iOS 13.0 or later (set by the SDK's podspec). |
| Android SDK levels | Whatever `minSdkVersion` / `compileSdkVersion` / `targetSdkVersion` your app's root `build.gradle` already defines — the module reads them via `rootProject.ext`. |
| Partner code | Your partner code, issued directly to you by Finspring. |
| Environment base URL | Finspring's API base URL for your environment, issued directly to you (not published in this document) — this is what you pass as `apiBaseUrl`. |

## 3. Install the package

```bash
npm install @finspringinnovations/fixed-deposit
# or
yarn add @finspringinnovations/fixed-deposit
```

The package bundles its own iOS frameworks and Android `.aar` — there is nothing else to download separately.

## 4. iOS setup

### 4.1 Install the native pod

```bash
cd ios && pod install
```

This pulls in the SDK's frameworks (`FixedDepositFacade` plus its supporting runtime frameworks) along with its one native dependency, Sentry — nothing else needs to be added to your own Podfile.

### 4.2 Add required Info.plist keys

CocoaPods cannot inject Info.plist entries into your app automatically, so on every app that uses this SDK you must add the following to `ios/<YourApp>/Info.plist`:

```xml
<key>NSFaceIDUsageDescription</key>
<string>For security of user data we need to authenticate user with face-id</string>
<key>NSCameraUsageDescription</key>
<string>For VKYC Verification</string>
<key>NSMicrophoneUsageDescription</key>
<string>For VKYC Verification</string>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>cydia</string>
  <string>amazonpay</string>
  <string>jupiter</string>
  <string>bhim</string>
  <string>credpay</string>
  <string>tez</string>
  <string>gpay</string>
  <string>phonepe</string>
  <string>paytm</string>
  <string>paytmmp</string>
  <string>upi</string>
  <string>lotza</string>
  <string>mobikwik</string>
  <string>whatsapp</string>
</array>
```

### Simulator note

The Simulator has no real Face ID hardware, so the SDK's biometric step falls back to an “Enter iPhone Passcode” prompt.

To exercise the real Face ID path, enable **Simulator → Features → Face ID → Enrolled**, then **Features → Face ID → Matching Face** when the prompt appears — or test on a physical device with Face ID configured.

## 5. Android setup

Nothing to do manually. The SDK declares its own permissions (`INTERNET`, `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`) and native dependencies in its own `build.gradle` / `AndroidManifest.xml`; Gradle's manifest merger folds them into your app automatically.

Just rebuild.

## 6. Launching the SDK

This document leaves `apiBaseUrl` / `partnerCode` as placeholders below, since those are issued to you directly rather than published here.

```javascript
import FixedDeposit from '@finspringinnovations/fixed-deposit';

await FixedDeposit.launch({
  apiBaseUrl: 'YOUR_ENVIRONMENT_BASE_URL',
  partnerCode: 'YOUR_PARTNER_CODE',
  customerId: 'the-current-customer-id',
  correlationId: 'a-correlation-id',
  firstName: 'Jane',
  lastName: 'Doe',
  gender: 'FEMALE',
  email: 'jane.doe@example.com',
  dob: '1990-01-01',
  mobileNumber: '9876543210',
  theme: 'SYSTEM',
});
```

### Launch directly on a specific screen

```javascript
await FixedDeposit.launchSubsection(FixedDepositSubsection.HelpCenterHome, {
  apiBaseUrl, partnerCode, customerId, correlationId,
  firstName, lastName, gender, email, dob, mobileNumber,
  theme: 'SYSTEM',
});
```

### End the SDK's session

```javascript
FixedDeposit.logout();
```

### iOS + React Native `<Modal>` gotcha

If you collect the customer's details in a React Native `<Modal>` before calling `launch()`, close the modal first and call `FixedDeposit.launch()` from the modal's `onDismiss` callback — not immediately after setting `visible={false}`.

```javascript
const pendingLaunchOptionsRef = useRef<FixedDepositLaunchOptions | null>(null);

// on submit (iOS):
pendingLaunchOptionsRef.current = launchOptions;
setIsModalVisible(false);

// <Modal onDismiss={() => {
//   if (pendingLaunchOptionsRef.current) {
//     FixedDeposit.launch(pendingLaunchOptionsRef.current);
//     pendingLaunchOptionsRef.current = null;
//   }
// }} ... >
```

## 7. Launching SDK Subsections

Instead of opening the SDK's default landing page, `launchSubsection(subsection, options)` opens directly on a specific SDK screen.

```javascript
import FixedDeposit, { FixedDepositSubsection } from '@finspringinnovations/fixed-deposit';

await FixedDeposit.launchSubsection(
  FixedDepositSubsection.HelpCenterHome,
  {
    apiBaseUrl, partnerCode, customerId, correlationId,
    firstName, lastName, gender, email, dob, mobileNumber,
    theme: 'SYSTEM',
  },
);
```

### 7.1 Available subsections

| Section | `FixedDepositSubsection` |
|---|---|
| Bank selection homepage | `BankSelection(institution)` or `BankSelection([institution, ...])` |
| My Investments | `MyInvestments` |
| My Investments — one tab | `MyInvestmentsTab('BOOKED' \| 'PENDING' \| 'CLOSED')` |
| All transactions | `AllTransactions` |
| Help Center home | `HelpCenterHome` |
| Help Center — view tickets | `ViewTickets` |
| Help Center — create ticket | `CreateTicket` |
| Senior Citizen / Safest / High Return / Tax Saver FDs | `PlanCategorySection('SENIOR_CITIZEN' \| 'BANKS_ONLY' \| 'YIELD_GREATER_THAN_9' \| 'TAX_SAVER_FIXED_DEPOSIT')` |
| Top plans for one bank, by rate/tenure | `BankTagFilter(institution, 'HIGHEST_RATES' \| 'LONG_TERM' \| 'SHORT_TERM')` |
| Anything not listed above | `Custom(route)` |

### 7.2 Financial institution codes

| Bank | `FinancialInstitution` |
|---|---|
| Suryoday Small Finance Bank | `SURYODAY_SMALL_FINANCE_BANK` |
| Utkarsh Small Finance Bank | `UTKARSH_SMALL_FINANCE_BANK` |
| Shivalik Small Finance Bank | `SHIVALIK_SMALL_FINANCE_BANK` |
| South Indian Bank | `SOUTH_INDIAN_BANK` |
| Unity Bank | `UNITY_BANK` |
| DCB Bank | `DCB_BANK` |
| Shriram Finance | `SHRIRAM_FINANCE` |
| Bajaj Finance | `BAJAJ_FINANCE` |
| slice Small Finance Bank | `SLICE_SMALL_FINANCE_BANK` |
| AU Small Finance Bank | `AU_SMALL_FINANCE_BANK` |

### Multi-bank selection

`BankSelection` accepts a single `FinancialInstitution` or an array of them for a multi-bank filter. The SDK handles URL encoding internally.

```javascript
FixedDepositSubsection.BankSelection([
  'UTKARSH_SMALL_FINANCE_BANK',
  'SHIVALIK_SMALL_FINANCE_BANK',
]);

FixedDepositSubsection.PlanCategorySection('SENIOR_CITIZEN');

FixedDepositSubsection.BankTagFilter(
  'UTKARSH_SMALL_FINANCE_BANK',
  'HIGHEST_RATES',
);
```

## 8. Theming

Pass `theme: 'LIGHT' | 'DARK' | 'SYSTEM'` to `launch()` / `launchSubsection()` to control the SDK's own color scheme independently of your app's.

`SYSTEM` (the default) follows the device's current appearance setting. This is the only display option covered here, since it's the one that behaves the same way on both iOS and Android.

## 9. Rebuilding & support

### Android

```bash
npx react-native run-android
```

### iOS

After `cd ios && pod install`:

```bash
npx react-native run-ios
```

Questions about this integration? Reach out to your Finspring partner engineering contact.

## 10. Play Store Permission Declaration

The Fixed Deposit SDK requests `SEND_SMS` and `PHONE_STATE`. Google Play requires a reason for these under **App content → Permissions declaration → Core functionality**.

Check:

> “SMS-based financial transactions and related activity where access is restricted to financial SMS transactions (e.g., 5-digit messages)”.

### App review instructions

Our app uses the `SEND_SMS` permission to verify the phone number for registration, as part of device binding — a security feature ensuring the app is used only on the intended, authorized device.

The SMS is sent to a designated number once per login, until logout, solely for this purpose.

### Video instructions

Record a screen recording (not a second device — this is disabled by default; ask Finspring to enable it temporarily) covering the `SEND_SMS` / `PHONE_STATE` grant through to a completed FD booking with payment, on a Prod build.

Send it to Finspring for review before submitting to the Play Store.

---

**© Finspring Innovations — Confidential, for partner use only**
