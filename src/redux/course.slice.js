import { createSlice } from "@reduxjs/toolkit";

const data=[
  {
    "id": "1",
    "name": "Angular"
  },
  {
    "id": "2",
    "name": "React"
  },
  {
    "id": "3",
    "name": "Java"
  },
  {
    "id": "4",
    "name": "C++"
  },
  {
    "id": "5",
    "name": "C Programming"
  },
  {
    "id": "6",
    "name": "Python"
  },
  {
    "id": "7",
    "name": "Next Js"
  },
  {
    "id": "8",
    "name": "Nest Js"
  },
  {
    "id": "9",
    "name": ".Net"
  },
  {
    "id": "10",
    "name": "Javascript"
  },
  {
    "id": "11",
    "name": "Big Data"
  }
];

const CourseSlice = createSlice({
  name: "CourseSlice",
  initialState: {    
    courseList: data
  },
  reducers: {
	getCourseList(state, action) {
      // server
      state.courseList = action.payload;
    }
  },
});

export default CourseSlice;
export const { courseList} = CourseSlice.actions;
