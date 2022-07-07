import request from "../utils/request"
interface ParamsProfile {
  id: string;
  name: string;
  gender: string;
  age: number
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProfileList() {
    return request.request({
      url: "/customers",
      method: "GET",
    });
  },

  addProfile({ content }: { content: string }) {
    return request.request({
      url: "/customers",
      method: "POST",
      data: { content },
    });
  },

  updateProfile({ id, name, gender, age }: ParamsProfile) {
    return request.request({
      url: `/customers/${id}`,
      method: "PUT",
      data: { 
        id: id,
        name: name,
        gender: gender,
        age: age
       },
    });
  },

  deleteProfile({ id }: { id: string }) {
    return request.request({
      url: `/customers/${id}`,
      method: "DELETE",
    });
  },
};
