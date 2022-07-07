import { Profile, State } from "./types";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { fetchProfileList } from "./thunks";

const initialState: State = {
  loading: false,
  profiles: [],
  errors: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    // setAlert: (state, { payload }: PayloadAction<Alert>) => {
    //   state.alert = payload;
    // },
    // increment: (state) => {
    //   state.counter++;
    // },
    // decrement: (state) => {
    //   state.counter--;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProfileList.fulfilled,
        (state, { payload }: PayloadAction<Profile[]>) => {
          console.log(current(state));
          state.profiles = payload;
        }
      )
      .addCase(fetchProfileList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfileList.rejected, (state) => {
        state.loading = false;
      })
      // .addCase(
      //   addTodo.fulfilled,
      //   (state, { payload }: PayloadAction<Todo>) =>
      //     void state.todos.push(payload)
      // )
      // .addCase(
      //   deleteTodo.fulfilled,
      //   (state, { payload }: PayloadAction<{ id: string }>) => {
      //     state.todos = state.todos.filter((it: Todo) => it.id !== payload.id);
      //   }
      // )
      // .addCase(
      //   updateTodo.fulfilled,
      //   (state, { payload }: PayloadAction<Todo>) => {
      //     state.todos = state.todos.map((it: Todo) =>
      //       it.id === payload.id ? payload : it
      //     );
      //   }
      // );
  },
});

const { actions } = profileSlice;

// export const { setAlert, increment, decrement } = actions;

export default profileSlice;
