import React from "react";

function Data(props) {
  return (
    props.toggle && (
      <div>
        <p>FirstName : {props.firstName}</p>
        <p>Last Name : {props.lastName}</p>
        <p>Email : {props.email}</p>
        <p>Phone Number : {props.phoneNumber}</p>
        <p>Gender : {props.gender}</p>
        <p>Country : {props.country}</p>

        <p>Subject :{props.subject}</p>
        <p>Message :{props.message}</p>
      </div>
    )
  );
}

export default Data;
