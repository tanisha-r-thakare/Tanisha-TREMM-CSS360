import { SlashCommandBuilder } from "discord.js";
import { getMeme } from "../helpers/meme.js";

export default {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Get a meme"),

  async execute(interaction) {
    // 1. Get the random data from the helper
    const { saying, embed } = await getMeme();

    // 2. Use the random saying in 'content' 
    await interaction.reply({
      content: saying, 
      embeds: [embed],  
    });
  },
};