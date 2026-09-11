---
id: basic-launch
title: Basic Launch
sidebar_label: Basic Launch
---

# 6. Launching the SDK

This document leaves apiBaseUrl/partnerCode as placeholders below, since those are issued to you directly rather than published here.

```javascript
import FixedDeposit from '@finspringinnovations/fixed-deposit';

await FixedDeposit.launch({
  apiBaseUrl: 'YOUR_ENVIRONMENT_BASE_URL', // issued by Finspring, per environment
  partnerCode: 'YOUR_PARTNER_CODE', // issued by Finspring
  customerId: 'the-current-customer-id',
  correlationId: 'a-correlation-id',

  // Customer profile — required for the registration step.
  firstName: 'Jane',
  lastName: 'Doe',
  gender: 'FEMALE',
  email: 'jane.doe@example.com',
  dob: '1990-01-01',
  mobileNumber: '9876543210',

  // Optional — see Section 8. Supported on both iOS and Android.
  theme: 'SYSTEM',
});
```
