export const emptyValidation = (data) => {
  if (data.length <= 0 || data === undefined || /^ *$/.test(data)) {
    return true;
  }
  return false;
};

export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};
