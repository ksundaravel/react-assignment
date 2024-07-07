import { createSlice } from "@reduxjs/toolkit";

const EnquirySlice = createSlice({
  name: "EnquirySlice",
  initialState: {    
    enquiryList: []
  },
  reducers: {
	addEnquiry(state, action) {
     state.enquiryList.push(action.payload);
    }
  },
});

export default EnquirySlice;
export const { addEnquiry } = EnquirySlice.actions;
