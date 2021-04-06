import { JSendResponse } from "./JSendResponseTypes";

/*====================*/

export class JSendOptions {
  public constructor(private response: JSendResponse) {}

  withHttpCode(httpCode: number) {
    this.response = { ...this.response, code: httpCode };

    return this;
  }

  get() {
    return this.response;
  }
}
