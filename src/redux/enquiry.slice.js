import { createSlice } from "@reduxjs/toolkit";



const EnquirySlice = createSlice({
  name: "EnquirySlice",
  initialState: {    
    enquiryList: []
  },
  reducers: {
	setEnquiryList(state, action) {
      // server	 
      state.enquiryList = action.payload;
    }
  },
});

export default EnquirySlice;
export const { setEnquiryList } = EnquirySlice.actions;
