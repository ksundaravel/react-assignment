import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./course.slice";
import EnquirySlice from "./enquiry.slice";

const store = configureStore({
  reducer: {
    courselist: CourseSlice.reducer,
	enquirylist: EnquirySlice.reducer
  },
});

export default store;
