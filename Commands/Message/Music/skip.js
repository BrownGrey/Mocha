const { Message } = require("discord.js");
const MOCHA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "skip",
  aliases: ["s", "skp"],
  description: `skip to next song in queue`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {MOCHA} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    await queue.skip().catch((e) => null);
    client.embed(message, `${client.config.emoji.SUCCESS}  Song Skipped !!`);
  },
};
