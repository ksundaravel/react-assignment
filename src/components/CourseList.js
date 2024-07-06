import { Link } from "react-router-dom";

function CourseList(props){
	let { courseList } = props;
	return (
	<>
		<h3 className="py-4">Course List</h3>
		<table className="table">
		  <thead>
			<tr>
			  <th scope="col">S.No</th>
			  <th scope="col">Course Name</th>
			  <th scope="col">Action</th>
			</tr>
		  </thead>
		  <tbody>	
			{courseList.map((course, index) => {
				return (
					<tr key={index}>
					  <th scope="row">{course.id}</th>
					  <td>{course.name}</td>
					  <td> 
					    <Link to={`/add-enquiry/${course.id}`} className="nav-link active" aria-current="page">
						  <button type="button" className="btn btn-secondary btn-sm">Enquiry</button>
						</Link>
					  </td>			 
					</tr>
				);
			})}		
		  </tbody>
		</table>
	</>
	)
}

export default CourseList;