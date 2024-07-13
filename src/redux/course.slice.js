import { createSlice } from "@reduxjs/toolkit";



const CourseSlice = createSlice({
  name: "CourseSlice",
  initialState: {    
    courseList: []
  },
  reducers: {
	getCourseList(state, action) {
      // server
      state.courseList = action.payload;
    },
	
	setCourseList(state, action) {
      // server	 
      state.courseList = action.payload;
    }
  },
});

export default CourseSlice;
export const { courseList,getCourseList, setCourseList} = CourseSlice.actions;
