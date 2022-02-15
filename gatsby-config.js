import dotenv from "dotenv";
import queriesConfig from "./src/utils/algolia-queries";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: `Mondonero`,
    siteUrl: "https://www.mondonero.org/",
    description:
      "Video and radio programs from independent artists all over the world",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "a9lzzkkf",
        dataset: "production",
        watchMode: process.env.NODE_ENV === "development",
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: ["nvpbpe8ugdk7ee53qamhmik01s@group.calendar.google.com"],
        // options to retrieve the next 10 upcoming events
        timeMin: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: queriesConfig,
        continueOnFailure: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-149258831-1"],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "437812504020466",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://mondonero.us20.list-manage.com/subscribe/post?u=cab851a5d3bb3646aaae32ad8&amp;id=d5aacf7d17",
      },
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          // our backend API for Paypal Balance (must return only balance)
          // switch to prod with a prod server
          // locally it was http://localhost:4444/paypal/balance
          process.env.PAYPAL_BALANCE_API,
        ],
      },
    },
  ],
};
