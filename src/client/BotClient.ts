import { SapphireClient } from "@sapphire/framework";
import { BOT_PREFIX } from "../config";

export class BotClient extends SapphireClient {
   public constructor() {
      super({
         intents: [
            "GUILDS",
            "GUILD_MESSAGES",
            "DIRECT_MESSAGES",
            "GUILD_MEMBERS",
         ],
         partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER"],
         defaultPrefix: BOT_PREFIX,
         presence: {
            status: "online",
            activities: [
               {
                  type: "WATCHING",
                  name: "the world burn",
               },
            ],
         },
      });
   }

   public override login(token?: string) {
      return super.login(token);
   }
}
