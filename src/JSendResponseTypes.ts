export type JSendSuccessResponse<DATA> = {
  status: "succees";
  data: DATA;
};

/*====================*/

export type JSendFailResponse<ERR> = {
  status: "fail";
  data: ERR;
};

/*====================*/

export type JSendErrorResponse = {
  status: "error";
  message: string;
};
