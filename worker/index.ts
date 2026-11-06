import { handleLead } from "./lead";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;

    if (path === "/api/lead") {
      return handleLead(request, env);
    }

    if (path === "/api" || path.startsWith("/api/")) {
      return Response.json(
        { ok: false, error: "Not found" },
        { status: 404, headers: { "Cache-Control": "no-store" } },
      );
    }

    return env.ASSETS.fetch(request);
  },
};
