---
id: bank-selection
title: Financial Institution Codes
sidebar_label: Financial Institution Codes
---

# 7. Launching SDK Subsections

## 7.2 Financial institution codes

BankSelection and BankTagFilter take one of these FinancialInstitution values.

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

`BankSelection` accepts a single `FinancialInstitution` or an array of them for a multi-bank filter, e.g. `BankSelection(['UTKARSH_SMALL_FINANCE_BANK', 'SHIVALIK_SMALL_FINANCE_BANK'])`. You don't need to URL-encode the list yourself — the SDK handles that internally on both platforms.

```javascript
FixedDepositSubsection.BankSelection([
  'UTKARSH_SMALL_FINANCE_BANK',
  'SHIVALIK_SMALL_FINANCE_BANK',
]);

FixedDepositSubsection.PlanCategorySection('SENIOR_CITIZEN');

FixedDepositSubsection.BankTagFilter('UTKARSH_SMALL_FINANCE_BANK', 'HIGHEST_RATES');
```
