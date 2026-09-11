---
id: ios-modal
title: iOS + React Native Modal Gotcha
sidebar_label: iOS + React Native Modal Gotcha
---

# 6. Launching the SDK

### iOS + React Native `<Modal>` gotcha

If you collect the customer's details in a React Native `<Modal>` before calling launch() (as the reference app does), close the modal first and call FixedDeposit.launch() from the modal's onDismiss callback — not immediately after setting visible={false}. On iOS the modal is dismissed via an asynchronous native animation; presenting the SDK's view before that finishes races the dismissal and silently no-ops. Android has no such restriction.

```javascript
const pendingLaunchOptionsRef = useRef<FixedDepositLaunchOptions | null>(null);

// on submit (iOS):
pendingLaunchOptionsRef.current = launchOptions;
setIsModalVisible(false);

// <Modal onDismiss={() => {
  // if (pendingLaunchOptionsRef.current) {
    // FixedDeposit.launch(pendingLaunchOptionsRef.current);
    // pendingLaunchOptionsRef.current = null;
  // }
// }} ... >
```
