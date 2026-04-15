import { createClient } from "next-sanity";

function getSanityClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true, // CDN for fast reads; set false for uncached admin reads
    perspective: "published",
  });
}

import { queries } from "./cms-queries";
import type {
  Consultant,
  Problem,
  BlogPost,
  SiteContent,
  JobPosting,
  TeamMember,
} from "@/types/cms";

export async function getAllConsultants(): Promise<Consultant[]> {
  const client = getSanityClient();
  return client.fetch<Consultant[]>(queries.consultants);
}

export async function getAllProblems(): Promise<Problem[]> {
  const client = getSanityClient();
  return client.fetch<Problem[]>(queries.problems);
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const client = getSanityClient();
  return client.fetch<BlogPost[]>(queries.blogPosts);
}

export async function getSiteContent(): Promise<SiteContent> {
  const client = getSanityClient();
  return client.fetch<SiteContent>(queries.siteContent);
}

export async function getAllJobs(): Promise<JobPosting[]> {
  const client = getSanityClient();
  return client.fetch<JobPosting[]>(queries.jobPostings);
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const client = getSanityClient();
  return client.fetch<TeamMember[]>(queries.teamMembers);
}
