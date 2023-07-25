// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
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
