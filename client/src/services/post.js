import axios from "axios";
export const instance = axios.create({
    baseURL: "/api/post",
  });

  export const createPost = async (postData) => {
    console.log(postData.getAll("image"));
    return await instance.post("/create-post", postData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
  };

  export const getPosts = async () => {
    return await instance.get("/get-posts");
  };

 