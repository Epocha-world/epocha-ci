import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about_/partnerships")({
  beforeLoad: () => {
    throw redirect({ to: "/about/sparked", statusCode: 301 });
  },
});
