import React from "react";
import "./App.css"

class StudentDetails extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
         <table className="table">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Location</th>
      <th>Education</th>
      <th>DOB</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
     {
       this.props.getAllData.length > 0 ? (
         this.props.getAllData.map(val =>  
           <tr>
             <td>{val.firstname}</td>
             <td>{val.lastname}</td>
             <td>{val.email}</td>
             <td>{val.location}</td>
             <td>{val.education}</td>
             <td>{val.dob}</td>
             <td><button className="btn btn-primary"  onClick={e => {this.props.updateData(val)}}><a id="edit"className="glyphicon glyphicon-edit">Edit</a></button></td>
             <td><button className="btn btn-danger" onClick={e => {this.props.deleteData(val)}}>Delete</button></td>
           </tr>
         )
       ) : (
         <h5>No Data Available</h5>
       )
     }
  </tbody>
</table>
      </div>
  )
  }
}
export default StudentDetails