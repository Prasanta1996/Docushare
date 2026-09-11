---
id: info-plist
title: Info.plist Configuration
sidebar_label: Info.plist Configuration
---

# 4. iOS Setup

## Info.plist Configuration

Add the following keys to your iOS app's Info.plist:

    NSFaceIDUsageDescription = For security of user data we need to authenticate user with face-id
    NSCameraUsageDescription = For VKYC Verification
    NSMicrophoneUsageDescription = For VKYC Verification

Also add the following URL schemes under LSApplicationQueriesSchemes:

    cydia
    amazonpay
    jupiter
    bhim
    credpay
    tez
    gpay
    phonepe
    paytm
    paytmmp
    upi
    lotza
    mobikwik
    whatsapp

These entries are required for the SDK's Face ID, camera, microphone, and supported payment-app flows.
