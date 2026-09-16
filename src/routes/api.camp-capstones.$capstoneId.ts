import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/api/camp-capstones/$capstoneId")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { getCapstoneResponse } = await import("@/lib/camp-capstones.server");
        return getCapstoneResponse(request, params.capstoneId);
      },
    },
  },
});
