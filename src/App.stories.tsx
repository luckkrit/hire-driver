import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";

const meta: Meta<typeof App> = {
  component: App,
  render: () => <App />,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: {},
      },
      routing: { path: "*" },
    }),
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const WizardDemo: Story = {};
