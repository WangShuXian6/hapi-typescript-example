import * as Hapi from "@hapi/hapi";
import HealthController from "./health-controller";
import { IDatabase } from "../../database";
import { IServerConfigurations } from "../../configurations";

export default function(
  server: Hapi.Server,
  serverConfigs: IServerConfigurations,
  database: IDatabase
) {
  const healthController = new HealthController(serverConfigs, database);
  server.bind(healthController);

  server.route({
    method: "GET",
    path: "/health",
    options: {
      handler: healthController.healthCheck,
      auth: false,
      tags: ["api", "health"],
      description: "health check",
      plugins: {
        "hapi-swagger": {
          responses: {
            "200": {
              description: "health ok"
            }
          }
        }
      }
    }
  });
}
