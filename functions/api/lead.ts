import { handleLead, type GreenApiEnv } from "../../worker/lead";

/**
 * Pages Function for /api/lead. Git-connected Pages builds publish this file;
 * they do not deploy worker/index.ts. GREEN_API_* values come from the Pages
 * project environment and are not stored in the repo.
 */
export async function onRequest(context: {
  request: Request;
  env: GreenApiEnv;
}): Promise<Response> {
  return handleLead(context.request, context.env);
}
