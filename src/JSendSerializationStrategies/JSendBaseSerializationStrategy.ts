import {
  JSendErrorResponse,
  JSendFailResponse,
  JSendSuccessResponse,
} from "../JSendResponseTypes";

/*====================*/

interface IJSendSerializerStrategy {
  successResponse(data: any): JSendSuccessResponse<typeof data>;
  failResponse(errors: any): JSendFailResponse<typeof errors>;
  errorResponse(message: string): JSendErrorResponse;
}

/*====================*/

export class JSendBaseSerializationStrategy
  implements IJSendSerializerStrategy {
  public successResponse(data: any): JSendSuccessResponse<typeof data> {
    return this.response("succees", data);
  }

  public failResponse(errors: any): JSendFailResponse<typeof errors> {
    return this.response("fail", errors);
  }

  public errorResponse(message: string): JSendErrorResponse {
    return this.response("error", message);
  }

  private response(status: "fail" | "succees" | "error", data: any) {
    const response: any = { status };

    if (status === "error") {
      response.message = data;
    } else {
      response.data = data;
    }

    return response;
  }
}
