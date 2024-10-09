import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1, "Project name is required.").max(255),
  description: z.string().optional().max(65535),
});
