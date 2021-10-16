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
      {data && (
        <>
          <div>
            <h3>User view:</h3>
            <br />
            <div>{data.name}</div>
            <div>{data._id}</div>
            <div>{data.email}</div>
          </div>
          <br />
          <div>
            <h3>User's Messages:</h3>
            <br />
            <div>
              {userMes &&
                userMes.map((message) => (
                  <ul key={message._id}>{message.text}</ul>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
