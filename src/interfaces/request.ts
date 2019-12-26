import * as Hapi from "@hapi/hapi";

export interface ICredentials extends Hapi.AuthCredentials {
  id: string;
}

export interface IRequestAuth extends Hapi.RequestAuth {
  credentials: ICredentials;
}

export interface IRequest extends Hapi.Request {
  auth: IRequestAuth;
  payload:any;
  params:any;
  query:any;
}

export interface ILoginRequest extends IRequest {
  payload: {
    email: string;
    password: string;
  };
}
