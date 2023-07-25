// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import getReleaseIdentifier from "./src/utils/getReleaseIdentifier";

Sentry.init({
    dsn: "https://09058884e8ad43b48a88d40e8cdc52cd@o4505592441798656.ingest.sentry.io/4505592443764736",

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    release: getReleaseIdentifier(),
});
