---
id: play-store-permission
title: Play Store Permission Declaration
sidebar_label: Play Store Permission Declaration
---

# 10. Play Store Permission Declaration

The Fixed Deposit SDK requests `SEND_SMS` and `PHONE_STATE`. Google Play requires a reason for these under **App content → Permissions declaration → Core functionality** — check “SMS-based financial transactions and related activity where access is restricted to financial SMS transactions (e.g., 5-digit messages)”.

## App Review Instructions

Our app uses the `SEND_SMS` permission to verify the phone number for registration, as part of device binding — a security feature ensuring the app is used only on the intended, authorized device. The SMS is sent to a designated number once per login, until logout, solely for this purpose.

## Video Instructions

Record a screen recording (not a second device — this is disabled by default; ask Finspring to enable it temporarily) covering the `SEND_SMS`/`PHONE_STATE` grant through to a completed FD booking with payment, on a Prod build. Send it to Finspring for review before submitting to the Play Store.
