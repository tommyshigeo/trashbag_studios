// routes/api/games.ts
import { Handlers } from "$fresh/server.ts";
import { allGames } from "../../data/games.ts"; // Adjust path

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(JSON.stringify(allGames), {
      headers: { "Content-Type": "application/json" },
    });
  },
};