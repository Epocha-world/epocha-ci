import { createFileRoute } from "@tanstack/react-router";
import { handleCampAuth } from "@/lib/camp-auth.server";

export const Route = createFileRoute("/api/camp-auth")({
  server: {
    handlers: {
      GET: ({ request }) => handleCampAuth(request),
      POST: ({ request }) => handleCampAuth(request),
    },
  },
});
