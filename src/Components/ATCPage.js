import "./Style.css/ATCPage.css";
import CardPage from "./CardPage";
import User1 from "../Container/User1";
import React, { useState } from "react";
import { useSelector } from "react-redux";

 import  Ellipse14_1  from "../Images/Ellipse14_1.png";
 import  Ellipse14  from "../Images/Ellipse14.png";
 import   Ellipse14_2  from "../Images/Ellipse14_2.png";
 import   Ellipse14_3  from "../Images/Ellipse14_3.png";
 import  Ellipse14_4   from "../Images/Ellipse14_4.png";
 import  Ellipse14_5   from "../Images/Ellipse14_5.png";
 import   Ellipse14_6 from "../Images/Ellipse14_6.png";
 import  Ellipse14_7  from "../Images/Ellipse14_7.png";
 import  Ellipse14_8   from "../Images/Ellipse14_8.png";
 import   Ellipse14_9 from "../Images/Ellipse14_9.png";
 
 import  Ellipse14_11   from "../Images/Ellipse14_11.png";

function ATCPage() {
  const useremail = useSelector((state) => state.userSlice.user.email);

  let array = [
    {
      image:Ellipse14,
      name: "Eneh Mercy",
      id: "703703",
      email: "michelle.rivera@gmail.com",
      age: "30",
    },
    {
      image:  Ellipse14_1,
      name: "Marvin Mckinney		",
      id: "877037",
      email: "kenzi.lawson@example.com",
      age: "28",
    },
    {
      image:  Ellipse14_2,
      name: "Brooklyn Simmons	",
      id: "370357",
      email: "	nathan.robert@example.com",
      age: "21",
    },
    {
      image:Ellipse14_3,
      name: "Dianne Russell",
      id: "870316",
      email: "felicia.reid@example.com",
      age: "19",
    },
    {
      image: Ellipse14_4,
      name: "Caddy Fisher",
      id: "547030",
      email: "tim.jennings@example.com",
      age: "23",
    },
    {
      image: Ellipse14_5,
      name: "Guy Hawkins",
      id: "270374",
      email: "alma.lawson@example.com",
      age: "20",
    },
    {
      image:  Ellipse14_6,
      name: "Dovon Lane",
      id: "970374",
      email: "nathan.robert@example.com",
      age: "16",
    },
    {
      image: Ellipse14_7,
      name: "Ronald Richards",
      id: "570336",
      email: "denna.curtis@example.com",
      age: "55",
    },
    {
      image:  Ellipse14_8,
      name: "Lucy",
      id: "970374",
      email: "michelle.rivera@gmail.com",
      age: "21",
    },
    {
      image: Ellipse14_9,
      name: "Bessie Cooper",
      id: "157034",
      email: "goorgia.young@example.com",
      age: "57",
    },
   
    {
      image:Ellipse14_11,
      name: "Eneh Mercy",
      id: "703703",
      email: "michelle.rivera@gmail.com",
      age: "25",
    },
   
  ];

  const [selectedUsers, setSelectedUsers] = useState({ ...array[8] });

  return (
    <div className="atcs_main_box" style={{marginLeft: "0",marginTop:"0",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
      <div className="atcs_inner_box" style={{marginLeft: "0",marginTop:"0",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
        <CardPage />
        <div className="atcs-section"  style={{marginLeft: "0",marginTop:"20px",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1 style={{ textAlign: "left" }} className="main-text">
              <i>ATC's under you</i>
            </h1>
            <h3 style={{ marginTop: "10px" }}>
              <p className="user_email_atc">{useremail}</p>
            </h3>
          </div>

          

           
            <div className="addfilter_input__box"  >
            <input type="text" className="input-box" placeholder=" Search for a ATC's by name"></input>
            <select style={{ textDecoration: "none", border: "none", outline: "none", backgroundColor: "white",marginLeft:"10px" }}>
              <option>Add Filter </option>
              <option disabled>Name</option>
              <option disabled>ID</option>
              <option disabled>Email</option>
            </select>
          </div>
          <div className="userDetails_Box" style={{ display: "flex",marginLeft: "0",marginTop:"0",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
            <div className="users_Box"  style={{marginLeft: "0",marginTop:"0",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
              <table style={{ width: "33rem",marginLeft:"5%",marginRight:"10px" ,marginTop:"20px",paddingBottom:"20px"}} >
                <thead>
                  <tr id="table_row">
                    <th>profile</th>
                    <th style={{ width: "100%", textAlign: "center" }}>Name</th>

                    <th style={{ width: "100%" }}>ID</th>

                    <th style={{ width: "100%" }}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {array.map((itm) => {
                    return (
                      <tr className="trow" onClick={() => setSelectedUsers(itm)}>
                        <td>
                          {" "}
                          <img src={itm.image} alt="#" className="user-image"></img>
                        </td>
                        <td>{itm.name}</td>

                        <td> {itm.id}</td>

                        <td style={{ paddingLeft: "40px" }}>{itm.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <User1 selectedUsers={selectedUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ATCPage;
