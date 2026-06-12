import type { MetadataRoute } from "next";

const siteUrl = "https://therhinowrangler.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
   {
  url: `${siteUrl}/learn`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 1,
},
    
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/learn/rhinofab-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/learn/rhinofab-troubleshooting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/learn/glazier-studio-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/learn/partnerpak-training`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
  url: `${siteUrl}/learn/rhinofab-support`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.95,
},
{
  url: `${siteUrl}/learn/rhinofab-machine-support`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.95,
},
{
  url: `${siteUrl}/learn/glazier-studio-help`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: `${siteUrl}/learn/partnerpak-help`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: `${siteUrl}/learn/cnc-glass-fabrication-training`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
  ];
}