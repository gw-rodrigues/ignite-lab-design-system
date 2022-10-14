import { StoryObj, Meta } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/session", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login successfully!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("johndoe@example.com"),
      "rodrigues.gw@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("*********"), "12345");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("You're logged in!")).toBeInTheDocument();
    });
  },
};
