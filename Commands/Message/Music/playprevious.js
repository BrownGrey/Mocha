const { Message } = require("discord.js");
const MOCHA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "playprevious",
  aliases: ["pp", "playp"],
  description: `play previous song of queue`,
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
    if (!queue.previousSongs.length) {
      return client.embed(
        message,
        `${client.config.emoji.ERROR} Previous Song Not Found !!`
      );
    } else {
      await queue.previous().then((m) => {
        client.embed(
          message,
          `${client.config.emoji.SUCCESS} Playing Previous Track !!`
        );
      });
    }
  },
};
