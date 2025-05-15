// routes/api/films.ts
import { Handlers } from "$fresh/server.ts";
import { allFilms } from "../../data/films.ts"; // Adjust path

export const handler: Handlers = {
  GET(_req, _ctx) {
    return new Response(JSON.stringify(allFilms), {
      headers: { "Content-Type": "application/json" },
    });
  },
};