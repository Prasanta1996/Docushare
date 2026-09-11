---
id: available-subsections
title: Available Subsections
sidebar_label: Available Subsections
---

# 7. Launching SDK Subsections

Instead of opening the SDK's default landing page, `launchSubsection(subsection, options)` opens directly on one of the screens below — useful for deep-linking a customer straight into Help Center, their existing investments, or a specific bank/plan filter from a push notification or in-app nudge. `options` is the same `FixedDepositLaunchOptions` object you pass to `launch()`; only the extra subsection argument differs.

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

## 7.1 Available subsections

Every entry below is a `FixedDepositSubsection.*` value, importable alongside `FixedDeposit`.

| Section | `FixedDepositSubsection` |
|---|---|
| Bank selection homepage | `BankSelection(institution)` or `BankSelection([institution, ...])` |
| My Investments | `MyInvestments` |
| My Investments — one tab | `MyInvestmentsTab('BOOKED' | 'PENDING' | 'CLOSED')` |
| All transactions | `AllTransactions` |
| Help Center home | `HelpCenterHome` |
| Help Center — view tickets | `ViewTickets` |
| Help Center — create ticket | `CreateTicket` |
| Senior Citizen / Safest / High Return / Tax Saver FDs | `PlanCategorySection('SENIOR_CITIZEN' | 'BANKS_ONLY' | 'YIELD_GREATER_THAN_9' | 'TAX_SAVER_FIXED_DEPOSIT')` |
| Top plans for one bank, by rate/tenure (nudges & campaigns) | `BankTagFilter(institution, 'HIGHEST_RATES' | 'LONG_TERM' | 'SHORT_TERM')` |
| Anything not listed above | `Custom(route)` — pass a raw route string, as documented separately |
