import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEnquiryList } from "../redux/enquiry.slice";

let enquiryApiURL = "http://localhost:4000/enquiry";
function EnquiryList(){
	let dispatch = useDispatch();
    let { enquiryList } = useSelector((state) => state.enquirylist);
	
	useEffect(()=> {
		fetch(enquiryApiURL).then(res => res.json()).then(res => {dispatch(setEnquiryList(res))});
	},[]);
	
	return (
	<>
		<h3 className="py-4">Enquiry List</h3>
		<table className="table">
		  <thead>
			<tr>
			  <th scope="col">#</th>
			  <th scope="col">Name</th>
			  <th scope="col">Course Name</th> 
			  <th scope="col">Email</th>
			  <th scope="col">Comments</th>
			</tr>
		  </thead>
		  <tbody>
		  {
			  enquiryList.map((enquiry, index) => {
				return (
				<tr key={index}>
				  <th scope="row">{++index}</th>
				  <td>{enquiry.name}</td>
				  <td>{enquiry.coursename}</td>
				  <td>{enquiry.email}</td>
				  <td>{enquiry.comments}</td>
				</tr>	
			);
			})}				
		  </tbody>
		</table>
	</>
	)
}

export default EnquiryList;