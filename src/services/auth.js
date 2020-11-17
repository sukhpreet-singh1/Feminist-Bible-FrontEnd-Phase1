import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth`;

{
  /* =================================== SIGN UP  =================================== */
}

export const signUp = async (name, email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        email,
        name,
        password
      };
      const res = await axios.post(`${baseURL}/signup`, data);
      localStorage.setItem('fbToken',res && res.data && res.data.token && res.data.token);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

{
  /* =================================== Login  =================================== */
}

export const login = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = {
        email,
        password
      };
      const res = await axios.post(`${baseURL}/login`, data);
      localStorage.setItem('fbToken',res && res.data && res.data.token && res.data.token);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

{/* =================================== Logout ===================================  */}

export const logout = () => {
  localStorage.removeItem('fbToken');
}