// Sanity GROQ queries for fetching all content types
export const queries = {
  consultants: `*[_type == "consultant"]{
    _id, name, title, category, rating, reviews, price, location, available,
    expertise, avatar, badge, clients, responseRate, avgResponse, languages,
    bio, completedProjects, specialization
  }`,
  problems: `*[_type == "problem"]{
    _id, title, category, budget, proposals, status, desc, author,
    companyName, timeAgo, tags
  } | order(status asc, _createdAt desc)`,
  blogPosts: `*[_type == "blogPost"]{
    _id, slug, category, title, excerpt, author, avatar, date, readTime
  } | order(date desc)`,
  siteContent: `*[_type == "siteContent"][0]{
    homepage, pricingPlans, comparisonRows, faqs,
    aboutHeroTitle, aboutHeroDesc, aboutStory, aboutValues, aboutMilestones,
    careersHeroTitle, careersHeroDesc, careerBenefits
  }`,
  jobPostings: `*[_type == "jobPosting"]{
    _id, title, dept, location, type, salary, stack
  }`,
  teamMembers: `*[_type == "teamMember"]{
    _id, name, role, bio, avatar
  }`,
};
