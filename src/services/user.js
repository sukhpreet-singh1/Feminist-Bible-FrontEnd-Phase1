import http from './http';

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/user`;

/* 
    ========================================== GET User Profile ======================================== 
*/

export const getProfile = async()=>{
    return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`${baseURL}/profile`);
      resolve(res);
    } catch (error) {
        reject(error);
    }
  });
}

/* 
    ========================================== GET All Users Profile ======================================== 
*/

export const getProfiles = async()=>{
    return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`${baseURL}`);
      resolve(res);
    } catch (error) {
        reject(error);
    }
  });
}
