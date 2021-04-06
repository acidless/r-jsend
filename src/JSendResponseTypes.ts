export type JSendResponse = {
  status: string;
  data?: any;
  message?: string;
  code?: number;
};

export type JSendSuccessResponse<DATA> = JSendResponse & {
  status: "succees";
  data: DATA;
};

/*====================*/

export type JSendFailResponse<ERR> = JSendResponse & {
  status: "fail";
  data: ERR;
};

/*====================*/

export type JSendErrorResponse = JSendResponse & {
  status: "error";
  message: string;
};
