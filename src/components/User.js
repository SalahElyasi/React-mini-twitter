import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const User = ({ datas }) => {
  const { id } = useParams();
  const data = datas.find((e) => e._id === id);

  const [userMes, setUserMes] = useState([]);

  useEffect(() => {
    fetch(`https://minitwitterbackend.herokuapp.com/users/${id}/messages`)
      .then((response) => response.json())
      .then((data) => {
        setUserMes(data);
      });
  }, [id]);

  console.log("userMes", userMes);

  return (
    <div>
      <h3>User view:</h3>
      <div>{data.name}</div>
      <div>{data.id}</div>
      <div>{data.email}</div>
      <div>
        <h3>User's Messages:</h3>
        <ul>
          {userMes &&
            userMes.map((message) => <li key={message._id}>{message.text}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default User;
