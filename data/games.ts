// data/games.ts
import { Game } from "../types/types.ts";

export const allGames: Game[] = [
  {
    id: "glitch-garden",
    title: "Glitch Garden",
    platform: "PC, Web",
    genre: "Puzzle, Simulation",
    year: "2023",
    description: "Tend to a digital garden where bugs are features and growth is unpredictable.",
    longDescription: "'Glitch Garden' is not your typical farming sim. Here, you cultivate digital flora that thrives on software anomalies and system errors. Uncover strange new species by manipulating code, embrace the chaos of unexpected mutations, and discover the secrets hidden within the machine. A meditative yet surprising experience for those who love to experiment.",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    tags: ["puzzle", "simulation", "experimental", "indie"],
    developer: "TRASHBAG Interactive Division"
  },
  {
    id: "static-scream",
    title: "Static Scream",
    platform: "Mobile",
    genre: "Horror, Survival",
    year: "TBA",
    description: "Navigate a world of noise and distortion. Your sanity is the high score.",
    longDescription: "In 'Static Scream', the world is dissolving into visual and auditory noise. Armed only with a flickering light and your wits, you must navigate surreal, shifting landscapes while evading unseen terrors that lurk within the static. This atmospheric horror game uses sound and abstract visuals to create a deeply unsettling experience. Can you find the signal amidst the chaos?",
    imageUrl: "https://images.unsplash.com/photo-1611900570090-5951dd507d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80",
    tags: ["horror", "survival", "atmospheric", "mobile"],
  },
];