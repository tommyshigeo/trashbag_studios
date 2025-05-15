// data/films.ts
import { Film } from "../types/types.ts";

export const allFilms: Film[] = [
  {
    id: "midnight-transmission",
    title: "Midnight Transmission",
    director: "Alex Rivera (A TRASHBAG Alias)",
    genre: "Neo-Noir Thriller",
    year: "2022",
    runtime: "95 min",
    releaseDate: "2022-10-31",
    description: "A late-night radio host uncovers a coded message hinting at a city-wide conspiracy.",
    longDescription: "'Midnight Transmission' is a stylish neo-noir set against the backdrop of a perpetually rain-slicked city. When enigmatic DJ 'Nyx' receives a strange broadcast during his graveyard shift, he's pulled into a dangerous game of cat and mouse. The film explores themes of paranoia, surveillance, and the power of hidden frequencies. Shot with a distinct visual flair and a haunting synth score.",
    imageUrl: "https://images.unsplash.com/photo-1505680699149-654093639156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    tags: ["neo-noir", "thriller", "mystery", "independent film", "conspiracy"],
  },
  {
    id: "chromatic-aberration",
    title: "Chromatic Aberration",
    director: "The Studio Collective",
    genre: "Experimental Art Film",
    year: "2024",
    runtime: "60 min (approx.)",
    releaseDate: "2024-03-15", // Example
    description: "A visual and auditory exploration of digital decay and distorted realities.",
    longDescription: "Not a traditional narrative, 'Chromatic Aberration' is an immersive experience. Using a blend of practical effects, glitched footage, and generative art, this film aims to evoke feeling rather than tell a story. It's a meditation on how technology shapes our perception, the beauty in errors, and the ephemeral nature of digital information. Best experienced with good headphones in a dark room.",
    imageUrl: "https://images.unsplash.com/photo-1548800994-394401849031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80",
    tags: ["experimental", "art film", "visual", "abstract", "glitch art"],
  },
  // Add more films
];