import { Handlers } from "$fresh/server.ts";
import { allGames } from "../../../data/games.ts"; // Adjust path
import { Game } from "../../../types/types.ts";

export const handler: Handlers<Game | null> = {
  GET(_req, ctx) {
    const { id } = ctx.params;
    const gameItem = allGames.find((g) => g.id === id);
    if (!gameItem) {
      return new Response(JSON.stringify({ error: "Game not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(gameItem), {
      headers: { "Content-Type": "application/json" },
    });
  },
};