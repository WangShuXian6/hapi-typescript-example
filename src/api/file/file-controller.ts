import * as Hapi from "@hapi/hapi";
import { IDatabase } from "../../database";
import { IServerConfigurations } from "../../configurations";
import { ILoginRequest } from "../../interfaces/request";

export default class FileController {
  private database: IDatabase;
  private configs: IServerConfigurations;

  constructor(configs: IServerConfigurations, database: IDatabase) {
    this.database = database;
    this.configs = configs;
  }

  public async uploadMask(request: ILoginRequest, h: Hapi.ResponseToolkit) {
    return { health: true };
  }
}
