import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.stories.ts',  // Include stories in the app directory
    '../src/stories/**/*.stories.ts', // Include stories in the src/stories directory
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
};

export default config;
