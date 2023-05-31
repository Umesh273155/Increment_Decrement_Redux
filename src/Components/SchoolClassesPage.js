import "./Style.css/SchoolClassesPage.css";
import React, { useState } from "react";
import "./Style.css/ATCPage.css";
import CardPage from "./CardPage";
import Users10 from "../Container2/Users10";
import { useSelector } from "react-redux";
import Ellipse14_1 from "../Images/Ellipse14_1.png";
import Ellipse14 from "../Images/Ellipse14.png";
import Ellipse14_2 from "../Images/Ellipse14_2.png";
import Ellipse14_3 from "../Images/Ellipse14_3.png";
import Ellipse14_4 from "../Images/Ellipse14_4.png";
import Ellipse14_5 from "../Images/Ellipse14_5.png";
import Ellipse14_6 from "../Images/Ellipse14_6.png";
import Ellipse14_7 from "../Images/Ellipse14_7.png";
import Ellipse14_8 from "../Images/Ellipse14_8.png";
import Ellipse14_9 from "../Images/Ellipse14_9.png";
import Ellipse14_10 from "../Images/Ellipse14_10.png";
import Ellipse14_11 from "../Images/Ellipse14_11.png";

function SchoolClassesPage() {
  const useremail = useSelector((state) => state.userSlice.user.email);
  let arr = [
    {
      image: Ellipse14,
      name: "Eneh Mercy",
      id: "703703",
      email: "michelle.rivera@gmail.com",
      age: "30",
    },
    {
      image: Ellipse14_1,
      name: "Marvin Mckinney		",
      id: "877037",
      email: "kenzi.lawson@example.com",
      age: "28",
    },
    {
      image: Ellipse14_2,
      name: "Brooklyn Simmons	",
      id: "370357",
      email: "	nathan.robert@example.com",
      age: "21",
    },
    {
      image: Ellipse14_3,
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
      image: Ellipse14_6,
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
      image: Ellipse14_8,
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
      image: Ellipse14_10,
      name: "Eleanor Pena",
      id: "570156",
      email: "goorgia.young@example.com",
      age: "18",
    },
    {
      image: Ellipse14_11,
      name: "Eneh Mercy",
      id: "703703",
      email: "michelle.rivera@gmail.com",
      age: "25",
    },
    {
      image: Ellipse14_11,
      name: "Eneh Mercy",
      id: "703703",
      email: "michelle.rivera@gmail.com",
      age: "25",
    },
  ];

  const [selectedUser, setSelectedUser] = useState({ ...arr[6] });

  return (
    <div className="atcs-main-box">
      <div className="atcs-inner-box" style={{ marginLeft: "0", marginTop: "0px", marginBottom: "0", marginRight: "0", paddingLeft: "0", paddingTop: "0", paddingRight: "0", paddingBottom: "0" }}>
        <CardPage />
        <div className="atcs-section" style={{ marginLeft: "0", marginTop: "20px", marginBottom: "0", marginRight: "0", paddingLeft: "0", paddingTop: "0", paddingRight: "0", paddingBottom: "0" }}>
           <div className="logged">
           <h3 className="logged_email">{useremail}</h3>
           </div>
          <div className="addfilter-input-box" style={{ marginRight: "0" }}>
            <input type="text" className="input-box" placeholder=" Search for a ATC's by name"></input>

            <select style={{ textDecoration: "none", border: "none", outline: "none", backgroundColor: "white", marginLeft: "80px" }}>
              <option>Add Filter </option>
              <option disabled>Name</option>
              <option disabled>ID</option>
              <option disabled>Email</option>
            </select>
           
          </div>

          <div className="userDetails-Box" style={{ marginLeft: "0" }}>
            <div className="users_Box" style={{ marginLeft: "0" }}>
              <section className="table_section" style={{ marginTop: "0", marginBottom: "0", marginRight: "0", paddingLeft: "0", paddingTop: "0", paddingRight: "0", paddingBottom: "0" }}>
                <table className="table_box" id="school_table_box">
                  <thead>
                    <tr id="table_row">
                      <th className="header_profile">profile</th>
                      <th className="header_name">Name</th>

                      <th className="header_id">ID</th>

                      <th className="header_email">Email</th>
                    </tr>
                  </thead>

                  <tbody>
                    {arr.map((item) => {
                      return (
                        <tr className="trow" onClick={() => setSelectedUser(item)}>
                          <td>
                            {" "}
                            <img src={item.image} alt="#" className="user-image"></img>
                          </td>
                          <td style={{ paddingLeft: "0", marginRight: "0", paddingRight: "5px" }}>{item.name}</td>
                          <td style={{ paddingLeft: "0" }}> {item.id}</td>
                          <td style={{ paddingLeft: "10px" }}>{item.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </section>
            </div>
            <div className="users_div">
              <Users10 selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SchoolClassesPage;
