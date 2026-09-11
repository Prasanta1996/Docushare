---
id: face-id
title: Face ID Simulator
sidebar_label: Face ID Simulator
---

# 4. iOS Setup

### Simulator note

The Simulator has no real Face ID hardware, so the SDK's biometric step falls back to an “Enter iPhone Passcode” prompt.

To exercise the real Face ID path, enable **Simulator → Features → Face ID → Enrolled**, then **Features → Face ID → Matching Face** when the prompt appears — or test on a physical device with Face ID configured.
