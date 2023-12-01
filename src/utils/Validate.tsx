

export const checkValidData = (email: string, password : string) => {
    console.log({email, password}, "----======");
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
      console.log(isPasswordValid, "--------pvalid");
      console.log(isEmailValid, "--------eeeeeeeeee");

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return '';
  }; 