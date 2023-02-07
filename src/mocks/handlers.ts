import { rest } from "msw";

import { hasOwnProperty } from "../typeUtils";

import WEBSITE_STATS from "./website-stats";

export const handlers = [
  rest.get("https://cssstats.com/api/stats", (req, res, ctx) => {
    const website = req.url.searchParams.get("url");
    if (website == null || !hasOwnProperty(WEBSITE_STATS, website)) {
      return res(ctx.status(400));
    }
    return res(ctx.status(200), ctx.json(WEBSITE_STATS[website]));
  }),
];
