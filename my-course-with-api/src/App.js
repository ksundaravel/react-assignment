import { useState,useEffect } from "react";
import CourseList from "./components/CourseList";
import EnquiryList from "./components/EnquiryList";
import AddEnquiry from "./components/AddEnquiry";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Courses from './course';

function App() {

let navigate = useNavigate();
let [courseList,setCourses] = useState(Courses);
let [enquiryList, setNewEnquiry] = useState([]);

let courseApiURL = "http://localhost:4000/courses";
let enquiryApiURL = "http://localhost:4000/enquiry";

useEffect(()=> {
	fetch(courseApiURL).then(res => res.json()).then(setCourses);
},[]);


 let [inputChanges, setInputChanges] = useState({
    name: "",
	coursename: "",
    email: "",
    comments: ""
  });
  
let onChange = (e) =>
    setInputChanges({ ...inputChanges, [e.target.name]: e.target.value });
	
//let { name, email, comments } = inputChanges;

let handleSubmit = (event) => {
	event.preventDefault();
	
    let formData = new FormData(event.target);
	let name = formData.get('name');
	let coursename = formData.get('coursename');
	let email = formData.get('email');
	let comments = formData.get('comments');
	
	let newEnquiry = {
		name,
		coursename,
		email,
		comments
	};
	const postConfig = {
		method: 'POST',
		headers: {'content-type':'application/json'},
		body: JSON.stringify(newEnquiry)
	}
	fetch(enquiryApiURL).then(res => res.json(postConfig)).then(course => alert("Added successfully:",course));
	//setNewEnquiry([...enquiryList,newEnquiry]);
	//alert("Added successfully");
	navigate('/');
};


return (
  <section className="container"> 
        <NavigationBar />
        <section className="row justify-content-center">
          <section className="col">
            <Routes>
              <Route
                path="/"
                element={<CourseList 
				courseList={courseList} />}
              />
			   <Route
                path="/add-enquiry/:courseId"	
                element={
					<AddEnquiry 
					handleSubmit={handleSubmit}
					onChange ={onChange}
					/>
				}
              />
              <Route
                path="/view-enquiry"
                element={<EnquiryList enquiryList={enquiryList}/>}
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
