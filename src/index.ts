import { BotClient } from "./client/BotClient";
import { BOT_TOKEN } from "./config";

const client = new BotClient();
client.login(BOT_TOKEN);