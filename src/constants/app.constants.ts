// Application properties constants

const APPLICATION_NAME: string = "erp";

// Page name constants

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

// User-friendly message constants

const PHOTO_UPLOAD_PROGRESS_MESSAGE: string = "Fénykép feltöltése...";
const PHOTO_UPLOAD_SUCCESS_MESSAGE: string = "Fénykép feltötése sikeres volt.";
const PHOTO_UPLOAD_ERROR_MESSAGE: string = "Fénykép feltötése sikertelen volt.";
const NETWORK_ERROR_CODE: string = "ERR_NETWORK";
const INTERNET_CONNECTION_ERROR_MESSAGE: string = "Nincs internetkapcsolat.";

// Miscellaneous constants

const FORM_DATA_NAME_FILE: string = "file";
const TOAST_NOTIFICATION_DURATION: number = 3500;

export {
  APPLICATION_NAME,
  MAIN_PAGE,
  WAREHOUSE_PAGE,
  ERROR_PAGE,
  PHOTO_UPLOAD_PROGRESS_MESSAGE,
  PHOTO_UPLOAD_SUCCESS_MESSAGE,
  PHOTO_UPLOAD_ERROR_MESSAGE,
  NETWORK_ERROR_CODE,
  INTERNET_CONNECTION_ERROR_MESSAGE,
  FORM_DATA_NAME_FILE,
  TOAST_NOTIFICATION_DURATION,
};
