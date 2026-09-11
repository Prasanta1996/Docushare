---
id: overview
title: Overview
sidebar_label: Overview
---

# 1. Overview

The Fixed Deposit SDK is a React Native module that drops a fully native, end-to-end Fixed Deposit investment flow into your app — customer registration, guest sign-in, VKYC verification, and biometric authentication — without you having to build any of that UI yourself.

Calling `FixedDeposit.launch(options)` handles everything needed to identify and sign the customer in against Finspring's API internally, then presents the SDK's own native screen on both platforms. From your app's point of view, integration is one function call — there's no separate signin or registration step for you to implement.

## Where These Calls Go

`apiBaseUrl` points directly at Finspring's API for your environment — you do not host or implement anything yourself.

The actual URL and your partner code aren't published in this document — they're shared with you by email at the time of onboarding, in a separate email.

`customerId` is your partner platform's own unique user reference id for the customer.
