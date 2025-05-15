// routes/api/series.ts
import { Handlers } from "$fresh/server.ts";
import { allSeries } from "../../data/series.ts"; // Adjust path if needed

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(JSON.stringify(allSeries), {
      headers: { "Content-Type": "application/json" },
    });
  },
};