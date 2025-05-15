// routes/api/films/[id].ts
import { Handlers } from "$fresh/server.ts";
import { allFilms } from "../../../data/films.ts"; // Adjust path
import { Film } from "../../../types/types.ts"; // Adjust path

export const handler: Handlers<Film | null> = {
  GET(_req, ctx) {
    const { id } = ctx.params;
    const filmItem = allFilms.find((f) => f.id === id);
    if (!filmItem) {
      return new Response(JSON.stringify({ error: "Film not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(filmItem), {
      headers: { "Content-Type": "application/json" },
    });
  },
};