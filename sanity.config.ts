import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import schemaTypes from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId: "819z4566",
  dataset: "production",

  schema: {
    types: schemaTypes,
  },

  plugins: [
    deskTool({ structure }),
    visionTool(),
  ],
});