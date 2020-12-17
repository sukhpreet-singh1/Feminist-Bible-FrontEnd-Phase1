import http from './http';

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/tag`;

/* 
    ========================================== GET All Tags ======================================== 
*/

export const getTags = async()=>{
    return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(baseURL);
      resolve(res);
    } catch (error) {
        reject(error);
    }
  });
}

/* 
    ========================================== Add New Tag ======================================== 
*/

export const addTag = async(label, description, color)=>{
    return new Promise(async (resolve, reject) => {
    try {
      const res = await http.post(`${baseURL}`,{name:label,description,color});
      resolve(res);
    } catch (error) {
        reject(error);
    }
  });
}


/* 
    ========================================== Delete Tag ======================================== 
*/

export const deleteTag = async (tagId)=>{
    return new Promise(async (resolve, reject) => {
    try {
      const res = await http.delete(`${baseURL}/${tagId}`);
      resolve(res);
    } catch (error) {
        reject(error);
    }
  });
}

/* 
    ========================================== Edit/Update Tag ======================================== 
*/


export const editTag = async (tagId,label,description,color)=>{
    return new Promise(async (resolve, reject) => {
    try {
      const res = await http.patch(`${baseURL}/${tagId}`,{name:label,description,color});
      resolve(res);
    } catch (error) {
        reject(error);
    }
  });
}
