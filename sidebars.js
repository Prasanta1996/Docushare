// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '1. Overview',
      collapsed: false,
      items: ['fixed-deposit-sdk/overview'],
    },
    {
      type: 'category',
      label: '2. Prerequisites',
      collapsed: true,
      items: ['fixed-deposit-sdk/prerequisites'],
    },
    {
      type: 'category',
      label: '3. Install Package',
      collapsed: true,
      items: ['fixed-deposit-sdk/install-package'],
    },
    {
      type: 'category',
      label: '4. iOS Setup',
      collapsed: true,
      items: [
        'fixed-deposit-sdk/ios/pod-installation',
        'fixed-deposit-sdk/ios/info-plist',
        'fixed-deposit-sdk/ios/face-id',
      ],
    },
    {
      type: 'category',
      label: '5. Android Setup',
      collapsed: true,
      items: [
        'fixed-deposit-sdk/android/permissions',
      ],
    },
    {
      type: 'category',
      label: '6. Launching SDK',
      collapsed: true,
      items: [
        'fixed-deposit-sdk/launching-sdk/basic-launch',
        'fixed-deposit-sdk/launching-sdk/customer-information',
        'fixed-deposit-sdk/launching-sdk/subsection',
        'fixed-deposit-sdk/launching-sdk/ios-modal',
      ],
    },
    {
      type: 'category',
      label: '7. Launching SDK Subsections',
      collapsed: true,
      items: [
        'fixed-deposit-sdk/subsections/available-subsections',
        'fixed-deposit-sdk/subsections/bank-selection',
      ],
    },
    {
      type: 'category',
      label: '8. Theming',
      collapsed: true,
      items: ['fixed-deposit-sdk/theming'],
    },
    {
      type: 'category',
      label: '9. Rebuilding & Support',
      collapsed: true,
      items: ['fixed-deposit-sdk/rebuilding-support'],
    },
    {
      type: 'category',
      label: '10. Play Store Permission Declaration',
      collapsed: true,
      items: ['fixed-deposit-sdk/play-store-permission'],
    },
  ],
};

export default sidebars;
