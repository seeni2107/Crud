import React, {Component} from "react";
import New from "./addnewdetails";
import StudentDetails from "./StudentDetails";
import axios from "axios"
import { BrowserRouter as Router , Link ,Route, Routes, Switch } from "react-router-dom"
 
class App extends Component {

  constructor(){
    super()
    this.state = {
      data : [],
      editData : []
    }
  }
   
  create = (data) =>{
      if(!data.isEdit){
        axios.post("http://localhost:3001/create",data).then(res => {
        this.getAllData()
      })
      } else{
        axios.put("http://localhost:3001/update",data).then(res => {
          this.getAllData()
        })
      }
  }

  componentDidMount(){
     this.getAllData()
  }
  getAllData(){
    axios.get("http://localhost:3001/create").then(res => {
         this.setState({
           data: res.data
         })
    })
  }

  updateData = (data) => {
     console.log(data)
     this.setState({
       editData : data
     })
  }
   
  deleteData = (data) => {
    const option = window.confirm(`Are you sure want to delete ${data.firstname}${data.lastname}`)
    // if(option){
      axios.delete(`http://localhost:3001/delete/${data.id}`).then(res => {
        console.log(res)
        this.getAllData()
    })
    // }
    console.log(data)
  }
  render() {
    return (
       <div>
         <New myData={this.create} setDetails = {this.state.editData}/>
         <StudentDetails getAllData = {this.state.data} updateData = {this.updateData} deleteData = {this.deleteData}/>
       </div>

    );
  }
}
 
export default App;
