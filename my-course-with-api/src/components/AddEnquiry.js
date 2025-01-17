import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import Courses from './../course';

 
function AddEnquiry(props) {	
  let { handleSubmit, onChange } = props;
  let [courseList,setCourses] = useState(Courses);
  
  let courseApiURL = "http://localhost:4000/courses";
let enquiryApiURL = "http://localhost:4000/enquiry";
let selectedCourse = {"id":null, "name":''};
useEffect(()=> {
	async function fetchMyAPI(){
		let response = await fetch(courseApiURL);
		response = await response.json();
		setCourses(response);
		console.log(courseList);
		selectedCourse = courseList.find((course) => course.id === courseId);
		console.log("jjj",selectedCourse);
	}
	fetchMyAPI();
},[]);

  let { courseId } = useParams();
 
  return (
    <>
	  <h3 className="py-4">Add Enquiry</h3>	
      <section className="mb-3">
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
			  <label htmlFor="name" className="form-label">Name</label>
			  <input type="text" onChange={onChange} className="form-control" name="name" id="name" placeholder="Please enter your name" />
			</div>
			<div className="mb-3">
			  <label htmlFor="coursename" className="form-label">Course Name</label>
			  <input type="text" readOnly className="form-control" name="coursename" id="coursename"  value={selectedCourse.name} placeholder="Please choose course name from course list page" />
			</div>
			<div className="mb-3">
			  <label htmlFor="email" className="form-label">Email address</label>
			  <input type="email" onChange={onChange} className="form-control" name="email" id="email" placeholder="Please enter your email" />
			</div>
			<div className="mb-3">
			  <label htmlFor="comments" className="form-label">Comments</label>
			  <textarea onChange={onChange} className="form-control" name="comments" id="comments" rows="3"></textarea>
			</div>
			<button type="submit"
			  className="input-group-text btn btn-success"
			>
			  Save
			</button>
		</form>
      </section>
    </>
  );
}

export default AddEnquiry;