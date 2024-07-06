function EnquiryList(props){
	let { enquiryList } = props;
	console.log(enquiryList);
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
				<tr>
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