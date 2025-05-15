import { Handlers } from "$fresh/server.ts";
import { allSeries } from "../../../data/series.ts"; // Adjust path
import { Series } from "../../../types/types.ts";

export const handler: Handlers<Series | null> = {
  GET(_req, ctx) {
    const { id } = ctx.params;
    const seriesItem = allSeries.find((s) => s.id === id);
    if (!seriesItem) {
      return new Response(JSON.stringify({ error: "Series not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(seriesItem), {
      headers: { "Content-Type": "application/json" },
    });
  },
};