import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/practicums_/hanaro-marketing")({
  beforeLoad: () => {
    throw redirect({ to: "/practicums/hanaro", replace: true });
  },
});
