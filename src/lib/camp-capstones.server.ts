import { campCapstones } from "./camp-capstones.ts";
import { getCampUser } from "./camp-auth.server.ts";

export function getCapstoneResponse(request: Request, capstoneId: string) {
  const headers = { "Cache-Control": "private, no-store", Vary: "Cookie" };
  let user;
  try {
    user = getCampUser(request);
  } catch {
    return Response.json(
      { error: "Capstone details are temporarily unavailable. Please try again." },
      { status: 503, headers },
    );
  }
  if (!user) {
    return Response.json({ error: "Sign in to view capstone details." }, { status: 401, headers });
  }
  const capstone = campCapstones.find((item) => item.id === capstoneId);
  if (!capstone) {
    return Response.json({ error: "Capstone not found." }, { status: 404, headers });
  }
  // The source provides these briefs only; do not invent partner requirements or deadlines.
  return Response.json(
    { capstone, applicationUrl: "https://forms.gle/r3r36oZY15A2qUsL9" },
    { headers },
  );
}
