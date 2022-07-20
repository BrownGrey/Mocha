const { CommandInteraction } = require("discord.js");
const MOCHA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "stop",
  description: `destroy current queue`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {MOCHA} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    queue.stop()
    client.embed(
      interaction,
      `${client.config.emoji.SUCCESS} Queue Destroyed !!`
    );
  },
};
