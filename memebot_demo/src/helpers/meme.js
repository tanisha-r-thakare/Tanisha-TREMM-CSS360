// helpers/meme.js
import { EmbedBuilder } from "discord.js";

const MEME_LINKS = (process.env.MEME_URL || "").split(",");
const MEME_SAYINGS = (process.env.MEME_SAYINGS || "Here's a meme!").split(",");

export const getMeme = async () => {
 
  const randomLink = MEME_LINKS[Math.floor(Math.random() * MEME_LINKS.length)];
  
  const randomSaying = MEME_SAYINGS[Math.floor(Math.random() * MEME_SAYINGS.length)];

  return {
    saying: randomSaying,
    embed: new EmbedBuilder().setImage(randomLink) 
  };
};
