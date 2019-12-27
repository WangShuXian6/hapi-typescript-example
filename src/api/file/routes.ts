import * as Hapi from "@hapi/hapi";
import FileController from "./file-controller";
import { IDatabase } from "../../database";
import { IServerConfigurations } from "../../configurations";

export default function(
  server: Hapi.Server,
  serverConfigs: IServerConfigurations,
  database: IDatabase
) {
  const fileController = new FileController(serverConfigs, database);
  server.bind(fileController);

  server.route({
    method: "POST",
    path: "/mask",
    options: {
      handler: fileController.uploadMask,
      auth: false,
      tags: ["api", "mask"],
      description: "upload mask",
      plugins: {
        "hapi-swagger": {
          responses: {
            "200": {
              description: "upload mask ok"
            }
          }
        }
      }
    }
  });
}
