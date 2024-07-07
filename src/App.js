import { useState,useEffect } from "react";
import CourseList from "./components/CourseList";
import EnquiryList from "./components/EnquiryList";
import AddEnquiry from "./components/AddEnquiry";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Courses from './course';

function App() {


return (
  <section className="container"> 
        <NavigationBar />
        <section className="row justify-content-center">
          <section className="col">
            <Routes>
              <Route
                path="/"
                element={<CourseList />}
              />
			   <Route
                path="/add-enquiry/:courseId"	
                element={
					<AddEnquiry	/>
				}
              />
              <Route
                path="/view-enquiry"
                element={<EnquiryList/>}
              />
              {/* <Route path="*" element={<PageNotFound />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>
        </section>
    </section>
  );
}

export default App;
