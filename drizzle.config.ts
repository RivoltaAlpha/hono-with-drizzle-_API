import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",   //'sqlite','mysql2',
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migration",
    dbCredentials: {
        url: process.env.Database_URL as string,
    },
    verbose: true,
    strict: true,

})