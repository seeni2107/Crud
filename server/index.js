const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Seeni9090",
    database: "newdetails",
})

app.post("/create", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const dob = req.body.dob;
    const education = req.body.education;
    const location = req.body.location;
    const message = req.body.message;

    db.query("INSERT INTO details(firstname, lastname, email, dob, education, location, message) VALUES (?,?,?,?,?,?,?)",
     [firstname, lastname, email, dob, education, location, message] , (err, result) => {
         if(err){
             console.log("err")
         }else{
             res.send("success")
         }
     }
    )
})

app.get("/create" , (req, res) => {
   db.query("SELECT * FROM details", (err, result) => {
       if(err) {
           console.log(err)
       }else{
           res.send(result)
       }
   })
})

app.put("/update", (req, res) => {
    const id= req.body.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const dob = req.body.dob;
    const education = req.body.education;
    const location = req.body.location;
    const message = req.body.message
   db.query("UPDATE details SET  firstname = ?, lastname = ?, email = ?, dob = ?, education = ?, location = ?, message = ?  WHERE id = ? ",[firstname,lastname,email,dob,education,location,message,id], (err,result) => {
       if(err) {
           console.log(err)
       }else{
           res.send(result)
       }
   })
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM details WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
    console.log("Post run on 3000!")
})