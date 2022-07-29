import createAxios from "../../services";
const TODO_API = {
  fetch: async (token) => {
    return await createAxios(token).get("/todos?page=1&limit=100");
  },
  add: async (token, data) => {
    return await createAxios(token).post("/todo", data);
  },
  update: async (token, data) => {
    return await createAxios(token).put("/todo", data);
  },
  delete: async (token, id, data) => {
    return await createAxios(token).delete(`/todo?_id=${id}`, { data: data });
  },
};
export default TODO_API;
