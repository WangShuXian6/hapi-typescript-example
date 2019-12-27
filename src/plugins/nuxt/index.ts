import { IPlugin, IPluginInfo } from "../interfaces";
import * as Hapi from "@hapi/hapi";
const path = require("path");
const nuxtPlugin = require("@nuxtjs/hapi");

const register = async (server: Hapi.Server): Promise<void> => {
  try {
    return server.register([
      {
        plugin: nuxtPlugin,
        options: {
          edge: false,
          rootDir: path.resolve(__dirname, "../../")
        }
      }
    ]);
  } catch (err) {
    console.log(`Error registering nuxt plugin: ${err}`);
  }
};

export default (): IPlugin => {
  return {
    register,
    info: () => {
      return { name: "nuxt", version: "1.0.0" };
    }
  };
};
