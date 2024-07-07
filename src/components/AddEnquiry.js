import { useParams } from 'react-router-dom';
import { addEnquiry } from "../redux/enquiry.slice";
import { useDispatch } from "react-redux";

 
function AddEnquiry() {	
  let dispatch = useDispatch();
  let { courseId } = useParams();
  

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
	
	dispatch(addEnquiry(newEnquiry));
	
	/*const postConfig = {
		method: 'POST',
		headers: {'content-type':'application/json'},
		body: JSON.stringify(newEnquiry)
	}
	fetch(enquiryApiURL,postConfig).then(res => res.json()).then(course => {alert("Added successfully:",course);navigate('/');});*/
	//setNewEnquiry([...enquiryList,newEnquiry]);
	//alert("Added successfully");
	
};
 
  return (
    <>
	  <h3 className="py-4">Add Enquiry</h3>	
      <section className="mb-3">
		<form onSubmit={handleSubmit}>
			<div className="mb-3">
			  <label htmlFor="name" className="form-label">Name</label>
			  <input type="text"  className="form-control" name="name" id="name" placeholder="Please enter your name" />
			</div>
			<div className="mb-3">
			  <label htmlFor="coursename" className="form-label">Course Name</label>
			  <input type="text" readOnly className="form-control" name="coursename" id="coursename"  value={courseId} placeholder="Please choose course name from course list page" />
			</div>
			<div className="mb-3">
			  <label htmlFor="email" className="form-label">Email address</label>
			  <input type="email"  className="form-control" name="email" id="email" placeholder="Please enter your email" />
			</div>
			<div className="mb-3">
			  <label htmlFor="comments" className="form-label">Comments</label>
			  <textarea  className="form-control" name="comments" id="comments" rows="3"></textarea>
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