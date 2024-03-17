const APPLICATION_NAME: string = "erp";

const MAIN_PAGE: KeyValuePair<string, string> = {
  key: "Főoldal",
  value: "/",
};

const WAREHOUSE_PAGE: KeyValuePair<string, string> = {
  key: "Raktár",
  value: "/warehouse",
};

const ERROR_PAGE: KeyValuePair<string, string> = {
  key: "Error",
  value: "/error",
};

export { APPLICATION_NAME, MAIN_PAGE, WAREHOUSE_PAGE, ERROR_PAGE };
