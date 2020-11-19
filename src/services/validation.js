{
  /* ================================= Email Validation =================================  */
}

export const validateEmail = (email) => {
  const mailformat = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
  );
  if (email.match(mailformat)) {
    return null;
  }
  return 'Please enter a valid email address.';
};


{
  /* ================================= Input Field Validation ================================= */
}

export const validateLength = (data,minLength=1) => {

  return data.length >= minLength;

}