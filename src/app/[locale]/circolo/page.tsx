import React from "react";
import WorkPage from "@/components/WorkPage";
import {red} from "material-colors-ts";
import NewPageLink from "@/components/NewPageLink";

const WorkCircolo: React.ComponentType = () => (
    <WorkPage
        name={"Circolo.us"}
        desc={"Complete website overhaul using React with e-commerce functionalities."}
        fieldDate={"Jun 2022 - Aug 2022"}
        fieldWebsite={"https://circolo.us"}
        color={red}>
        <p>
            During my summer internship in 2022, I had the privilege to join Circolo, an innovative
            San Francisco-based startup specializing in the production of smart fitness mirrors.
            As a frontend developer, my chief responsibility centered on refactoring and deploying
            the company’s website, which was previously hosted on Shopify with a custom theme.
            Unfortunately, this version of the website was plagued by performance problems and
            severe customization restrictions, both of which served as considerable obstacles to
            further progress.
        </p>
        <p>
            To address these issues, we opted to transition to a completely overhauled frontend,
            constructed using React. Our decision to employ this well-regarded framework was
            driven by its inherent capacity for total control, complemented by a robust
            ecosystem of libraries, conducive to swift and efficient development. Within a
            span of less than a month, I managed to successfully rebuild the entire website
            from scratch, simultaneously ensuring compatibility with the Shopify API. This
            accomplishment ensured our customers could continue shopping for our products
            without disruption. Further, I enhanced the PageSpeed score, making the site
            more responsive, and implemented search engine optimization techniques to
            improve the website’s visibility on various search engines.
        </p>
        <p>
            Upon the completion of the website, my focus shifted towards implementing continuous
            integration and continuous deployment (CI/CD) pipelines and resolving deployment
            concerns. We chose to utilize Cloudflare workers for hosting the website, in
            conjunction with Amazon S3 for simplified management of static assets. I prepped
            the codebase for a production environment, leveraging GitHub Actions for
            automated deployment in both production and preview deployments. This approach
            enabled future developers to preview their branches in a production-like
            setting before merging into the main codebase. As a final task, I assisted my
            supervisor in launching the new production site with minimal downtime,
            ensuring minimal disruption to our customers.
        </p>
        <p>
            Please note that the source code is not publicly accessible,
            given the commercial nature of the project.
            The live site can be accessed
            at <NewPageLink href={"https://circolo.us"}>circolo.us</NewPageLink>.
        </p>
    </WorkPage>
);

export default WorkCircolo;

export const metadata = {
    title: "Circolo.us — Leo Liang",
    description: "Complete website overhaul using React with e-commerce functionalities.",
};
