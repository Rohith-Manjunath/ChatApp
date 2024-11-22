import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="p-2 grid grid-cols-5 items-center justify-between gap-2 border-b-[1px] border-b-purple-300 hover:bg-gray-800 hover:cursor-pointer">
      <div className="col-span-1 flex items-center justify-center">
        <img src={user.image} alt="" className="rounded-full h-10 w-10" />
      </div>
      <div className="col-span-4 relative">
        <h2 className="text-sm font-medium ">{user.name}</h2>
        <span className="text-[12px]">{user.message}</span>
        <span
          className={`w-2 h-2 ${
            user.status === "active" ? "bg-green-500" : "bg-red-500"
          } rounded-full absolute right-0`}
        ></span>
      </div>
    </div>
  );
};

export default UserCard;
