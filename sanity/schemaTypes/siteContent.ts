import { defineType, defineField, defineArrayMember } from "sanity";

const featureSchema = defineType({
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon Name (lucide-react)", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "desc", title: "Description", type: "text" }),
  ],
});

const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "avatar", title: "Avatar Initials", type: "string" }),
  ],
});

const planFeatureSchema = defineType({
  name: "planFeature",
  title: "Plan Feature",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Plan Name", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "period", title: "Period (e.g. '/month')", type: "string" }),
    defineField({ name: "desc", title: "Description", type: "text" }),
    defineField({ name: "features", title: "Features List", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "cta", title: "CTA Text", type: "string" }),
    defineField({ name: "highlighted", title: "Highlighted (Most Popular)", type: "boolean" }),
  ],
});

const comparisonRowSchema = defineType({
  name: "comparisonRow",
  title: "Comparison Row",
  type: "object",
  fields: [
    defineField({ name: "feature", title: "Feature Name", type: "string" }),
    defineField({ name: "starter", title: "Starter Value", type: "string" }),
    defineField({ name: "professional", title: "Professional Value", type: "string" }),
    defineField({ name: "enterprise", title: "Enterprise Value", type: "string" }),
  ],
});

const faqSchema = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "q", title: "Question", type: "string" }),
    defineField({ name: "a", title: "Answer", type: "text" }),
  ],
});

const milestoneSchema = defineType({
  name: "milestone",
  title: "Milestone",
  type: "object",
  fields: [
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "event", title: "Event", type: "string" }),
    defineField({ name: "desc", title: "Description", type: "text" }),
  ],
});

const homepageSchema = defineType({
  name: "homepage",
  title: "Homepage",
  type: "object",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title (HTML)", type: "text" }),
    defineField({ name: "heroDesc", title: "Hero Description", type: "text" }),
    defineField({ name: "features", title: "Features", type: "array", of: [defineArrayMember(featureSchema)] }),
    defineField({ name: "testimonials", title: "Testimonials", type: "array", of: [defineArrayMember(testimonialSchema)] }),
    defineField({ name: "stats", title: "Stats", type: "array", of: [
      defineArrayMember({
        type: "object",
        fields: [
          { name: "value", type: "string", title: "Value" },
          { name: "label", type: "string", title: "Label" },
        ],
      }),
    ]}),
    defineField({ name: "ctaTitle", title: "CTA Title", type: "string" }),
    defineField({ name: "ctaDesc", title: "CTA Description", type: "text" }),
    defineField({ name: "ctaButtonText", title: "CTA Button Text", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
  ],
});

export const siteContent = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({ name: "homepage", title: "Homepage Content", type: "homepage" }),
    defineField({ name: "pricingPlans", title: "Pricing Plans", type: "array", of: [defineArrayMember(planFeatureSchema)] }),
    defineField({ name: "comparisonRows", title: "Pricing Comparison Rows", type: "array", of: [defineArrayMember(comparisonRowSchema)] }),
    defineField({ name: "faqs", title: "FAQs", type: "array", of: [defineArrayMember(faqSchema)] }),
    defineField({ name: "aboutHeroTitle", title: "About Page Hero Title", type: "text" }),
    defineField({ name: "aboutHeroDesc", title: "About Page Hero Description", type: "text" }),
    defineField({ name: "aboutStory", title: "About Story (paragraphs)", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "aboutValues", title: "About Values", type: "array", of: [defineArrayMember(featureSchema)] }),
    defineField({ name: "aboutMilestones", title: "About Milestones", type: "array", of: [defineArrayMember(milestoneSchema)] }),
    defineField({ name: "careersHeroTitle", title: "Careers Page Hero Title (HTML)", type: "text" }),
    defineField({ name: "careersHeroDesc", title: "Careers Page Hero Description", type: "text" }),
    defineField({ name: "careerBenefits", title: "Career Benefits", type: "array", of: [
      defineArrayMember({
        type: "object",
        fields: [
          { name: "icon", type: "string", title: "Icon (emoji)" },
          { name: "title", type: "string", title: "Title" },
          { name: "desc", type: "text", title: "Description" },
        ],
      }),
    ]}),
  ],
});
