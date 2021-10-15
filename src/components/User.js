import React from "react";
import { useParams } from "react-router-dom";
const User = ({ datas }) => {
  const { id } = useParams();
  const data = datas.find((e) => e._id === id);
  return (
    <div>
      User:
      <div>{data.name}</div>
      <div>{data.email}</div>
    </div>
  );
};

export default User;
