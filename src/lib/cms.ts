import { createClient } from "next-sanity";
import { queries } from "./cms-queries";
import type {
  Consultant,
  Problem,
  BlogPost,
  SiteContent,
  JobPosting,
  TeamMember,
} from "@/types/cms";

function getSanityClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: true,
    perspective: "published",
  });
}

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  const client = getSanityClient();
  if (!client) return fallback;
  try {
    const result = await client.fetch<T>(query);
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getAllConsultants(): Promise<Consultant[]> {
  return safeFetch<Consultant[]>(queries.consultants, []);
}

export async function getAllProblems(): Promise<Problem[]> {
  return safeFetch<Problem[]>(queries.problems, []);
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return safeFetch<BlogPost[]>(queries.blogPosts, []);
}

export async function getSiteContent(): Promise<SiteContent> {
  return safeFetch<SiteContent>(queries.siteContent, {} as SiteContent);
}

export async function getAllJobs(): Promise<JobPosting[]> {
  return safeFetch<JobPosting[]>(queries.jobPostings, []);
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return safeFetch<TeamMember[]>(queries.teamMembers, []);
}
