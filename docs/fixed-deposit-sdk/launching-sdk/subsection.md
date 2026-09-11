---
id: subsection
title: Launch Directly on a Specific Screen
sidebar_label: Launch Directly on a Specific Screen
---

# 6. Launching the SDK

### Launch directly on a specific screen

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
