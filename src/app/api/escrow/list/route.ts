import { listProjects } from "@/lib/escrow-store";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ projects: listProjects() });
}
