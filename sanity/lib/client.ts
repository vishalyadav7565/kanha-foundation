import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "819z4566",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});