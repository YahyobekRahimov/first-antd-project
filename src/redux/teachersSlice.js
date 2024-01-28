import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
   name: "teachers",
   initialState: [],
   reducers: {
      addTeacher: (state, { payload }) => {
         state.push(payload);
      },
      deleteTeacher: (state, { payload }) =>
         state.filter((teacher) => teacher.id != payload),
      updateTeacher: (state, { payload }) => {
         state.map((teacher) => {
            if (teacher.id == payload.id) {
               return payload;
            }
            return teacher;
         });
      },
   },
});

export const { addTeacher, deleteTeacher, updateTeacher } =
   teachersSlice.actions;

export default teachersSlice.reducer;
