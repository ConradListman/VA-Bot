import { Command } from "@sapphire/framework";
import { Message } from "discord.js";

export class PingCommand extends Command {
   public constructor(context: Command.Context, options: Command.Options) {
      super(context, {
         ...options,
         name: "ping",
         aliases: ["latency"],
         description:
            "See the Latency in milliseconds between the Discord API and Server",
         fullCategory: ["general"],
      });
   }

   public messageRun(message: Message) {
      console.log("hmmmmm");
      return message.channel.send(
         `Pong! \`${this.container.client.ws.ping}ms\``
      );
   }
}
