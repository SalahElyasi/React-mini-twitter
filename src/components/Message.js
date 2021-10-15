import React from "react";
import { useParams } from "react-router-dom";
const Message = ({ datas }) => {
  const { id } = useParams();
  const data = datas.find((e) => e._id === id);
  return (
    <div>
      Message
      <div>{data.text}</div>
    </div>
  );
};

export default Message;
