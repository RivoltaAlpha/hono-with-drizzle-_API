import { Hono } from "hono";
import { getProfiles } from "./controller";

export const profileRouter = new Hono();

profileRouter.get("/profiles", getProfiles);