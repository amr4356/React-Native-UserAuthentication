import axios from "axios";

const API_KEY = "AIzaSyCuW3QAWakYSDzcrNN0pBgEFN8nrP9K510";

export async function createUser(email, password) {
  const resposne = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
