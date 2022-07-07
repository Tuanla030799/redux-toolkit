import { Profile } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import profileServices from "../../services/profile";

export const fetchProfileList = createAsyncThunk<Profile[], undefined>(
  "profile/fetchListProfile",
  async (_, thunkApi:any) => {
    try {
      const { data } = await profileServices.fetchProfileList();
      console.log({ data });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// export const addProfile = createAsyncThunk<Profile, string>(
//   "todo/addTodo",
//   async (content, thunkApi) => {
//     try {
//       const { data } = await profileServices.addProfile({ content });
//       thunkApi.dispatch(
//         setAlert({ content: "Add todo success !", status: "success" })
//       );
//       return data;
//     } catch (error) {
//       thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const deleteTodo = createAsyncThunk<{ id: string }, string>(
//   "todo/deleteTodo",
//   async (id, thunkApi) => {
//     try {
//       await profileServices.deleteTodo({ id });
//       thunkApi.dispatch(
//         setAlert({ content: "Delete todo success !", status: "success" })
//       );
//       return { id };
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const updateTodo = createAsyncThunk<
//   Todo,
//   { content: string; id: string }
// >("todo/updateTodo", async ({ content, id }, thunkApi) => {
//   try {
//     const { data } = await profileServices.updateTodo({ content, id });
//     thunkApi.dispatch(
//       setAlert({ content: "Update todo success !", status: "success" })
//     );
//     return data;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error);
//   }
// });
