// src/index.ts
import { Plugin } from "revenge";
import { Patcher, DiscordModules } from "revenge";

const MessageInterceptor: Plugin = {
  name: "MessageInterceptor",
  author: "Vintro",
  description: "Добавляет [Intercepted] к началу каждого входящего сообщения.",
  version: "1.0.0",

  onLoad() {
    Patcher.after(DiscordModules.MessageStore, "getMessages", (_, args, messages) => {
      for (const [id, msg] of messages) {
        if (!msg.content.startsWith("[Intercepted]")) {
          msg.content = `[Intercepted] ${msg.content}`;
        }
      }
      return messages;
    });
  },

  onUnload() {
    Patcher.unpatchAll();
  },
};

export default MessageInterceptor;
