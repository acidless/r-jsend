class JSendSerializer {
  public successResponse(data: any) {
    return this.response("succees", data);
  }

  public failResponse(errors: any) {
    return this.response("fail", errors);
  }

  public errorResponse(message: string) {
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

/*====================*/

export default JSendSerializer;
