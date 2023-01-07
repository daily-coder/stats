import { rest } from "msw";

import WEBSITE_STATS from "./website-stats";

export const handlers = [
  rest.get("https://cssstats.com/api/stats", (req, res, ctx) => {
    const website = req.url.searchParams.get("url");
    const data = WEBSITE_STATS[website];
    if (data == null) {
      return res(ctx.status(400));
    }
    return res(ctx.status(200), ctx.json(data));
  }),
];
