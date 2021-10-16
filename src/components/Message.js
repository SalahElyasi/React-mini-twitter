import React from "react";
import { useParams } from "react-router-dom";
const Message = ({ datas }) => {
  const { id } = useParams();
  const data = datas.find((e) => e._id === id);
  return (
    <div>
      <h3>Message:</h3>
      <br />
      <div>{data.text}</div>
      <br />
      <h3>Author:</h3>
      <br />
      <div>{data.userId.name}</div>
    </div>
  );
};

export default Message;
