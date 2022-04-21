import React, {Component} from "react";
import './App.css';
import { Link } from "react-router-dom"
 
class New extends Component {
  constructor(){
    super();
     
    this.state = {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        dob: '',
        education: '',
        location: '',
        message: '',
        isEdit: false
    }
}

onchange = (e) => {
    const {name, value} = e.target;

    this.setState({
        [name] : value
    })
}

onsubmit = (e) => {
    if(!this.state.isEdit){
       let data = {
         firstname:this.state.firstname,
         lastname:this.state.lastname,
         email:this.state.email,
         dob:this.state.dob,
         education:this.state.education,
         location:this.state.location,
         message:this.state.message,
         isEdit: this.state.isEdit
     }
     this.props.myData(data) 
    }
     else{
        let data = {
            id: this.state.id,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            dob:this.state.dob,
            education:this.state.education,
            location:this.state.location,
            message:this.state.message,
            isEdit: this.state.isEdit
        }
        this.props.myData(data)  
     }
}

componentWillReceiveProps(props){
    if(props.setDetails.id != null)
    {
        this.setState({
             id: props.setDetails.id,
            firstname : props.setDetails.firstname,
            lastname : props.setDetails.lastname,
            email : props.setDetails.email,
            dob : props.setDetails.dob,
            education : props.setDetails.education,
            location : props.setDetails.location,
            message : props.setDetails.message,
            isEdit: true
        })
    }
 }
render(){
    return (
        <div> 
                        <form className="App" noValidate id="form" onSubmit={this.onsubmit}>
                            <h3>{this.state.isEdit ? "Update Student Details" : "Add Student Details"}</h3>
                            <div className="name">
                            <div class="col-md-12">
                                <div>Firstname</div>
                               <input className="form-control" type="text" name="firstname" required id="inputs" onChange={this.onchange} value={this.state.firstname}/>
                            </div>
                            <br/>
                            <div className="col-md-12">
                            <div>Lastname</div>
                               <input className="form-control" type="text" name="lastname" required id="inputs" onChange={this.onchange} value={this.state.lastname}/>
                            </div>
                            <br/>
                            </div>
                             <div className="email">   
                            <div className="col-md-12">
                            <div>Email</div>
                                <input className="form-control" type="email" name="email"  required id="inputs" onChange={this.onchange} value={this.state.email}/>
                            </div>
                            <br/>
                            <div className="col-md-12">
                            <div>DOB</div>
                                <input className="form-control" type="date" name="dob" required id="inputs" onChange={this.onchange} value={this.state.dob}/>
                            </div>
                            <br/>
                            </div>
                            <div className="education">
                            <div className="col-md-12">
                            <div>Education</div>
                                <input className="form-control" type="text" name="education" required id="inputs" onChange={this.onchange} value={this.state.education}/>
                            </div>
                            <br/>
                            <div className="col-md-12">
                            <div>Location</div>
                                <input className="form-control" type="text" name="location" required id="inputs" onChange={this.onchange} value={this.state.location}/>
                            </div>
                            <br/>
                            </div>
                            <div className="col-md-12" id="about" >
                            <div>About</div>
                                <input className="form-control" type="text" name="message" required id="about" onChange={this.onchange} value={this.state.message}/>
                            </div>
                            <br/>
                            <br />
                           <div className="form-button mt-3" id="button" >
                              <button id="submit" type="submit" className="btn btn-primary" >{this.state.isEdit ? "Update" : "Submit"}</button>  
                            </div> 
                        </form>
        </div>                
    )
}
}
 
export default New;