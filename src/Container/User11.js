import "./Style2.css/User1.css";
import Frame30086 from "../Images/Frame 30086.png";
import message_box from "../Images/message_box.png";
function User11(props1) {
  return (
    <div className="userDetails-Box" style={{marginLeft: "0",marginTop:"0",marginBottom:"0",marginRight:"0",paddingLeft:"0",paddingTop:"0",paddingRight:"0",paddingBottom:"0" }}>
      <div className="Each_user_detailing_boxx_">
        <p style={{ marginBottom: "5px", marginTop: "25px" }}>{props1.selectedUsers.id}</p>
        <img src={props1.selectedUsers.image} alt="#" className="user-card" style={{ marginTop: "0px" }}></img>
        <br></br>
        <p>{props1.selectedUsers.name}</p>
        <div className="phone_email_icons"></div>
        <img src={Frame30086} alt="#" className="icons-size"></img>
        <img src={message_box} alt="#" className="icons-size"></img>
        <div className="about_">
          <p>About :</p>
        </div>
        <div className="age-gender">
          <p>
            Age :<span style={{ color: "grey", marginRight: "5%" }}>{props1.selectedUsers.age}</span>
          </p>
          <p>
            {" "}
            Gender :<span style={{ color: "grey" }}>Female</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default User11;
