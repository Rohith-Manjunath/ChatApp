import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users }) => {
  return (
    <div className="px-0 py-4 max-h-full">
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
