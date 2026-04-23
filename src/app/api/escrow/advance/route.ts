import { NextRequest } from "next/server";
import { completeMilestone, transitionStage, getProject } from "@/lib/escrow-store";

export const dynamic = "force-dynamic";

type Body = {
  projectId?: string;
  milestoneId?: string;
  action?: "complete_milestone" | "mark_delivered" | "start_work";
};

export async function POST(req: NextRequest) {
  const { projectId, milestoneId, action } = (await req.json().catch(() => ({}))) as Body;
  if (!projectId)
    return Response.json({ error: "projectId required" }, { status: 400 });

  const project = getProject(projectId);
  if (!project)
    return Response.json({ error: "not found" }, { status: 404 });

  if (action === "start_work") {
    transitionStage(projectId, "in_progress");
  } else if (action === "mark_delivered") {
    transitionStage(projectId, "delivered");
  } else if (action === "complete_milestone" && milestoneId) {
    completeMilestone(projectId, milestoneId);
    const fresh = getProject(projectId);
    if (fresh && fresh.milestones.every((m) => m.done)) {
      transitionStage(projectId, "delivered");
    } else if (fresh && fresh.stage === "funded") {
      transitionStage(projectId, "in_progress");
    }
  }

  return Response.json({ project: getProject(projectId) });
}
