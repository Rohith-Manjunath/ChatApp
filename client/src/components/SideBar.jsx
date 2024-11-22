import UsersList from "./UsersList";

const SideBar = () => {
  const users = [
    {
      id: 1,
      name: "John",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "active", // Added status
    },
    {
      id: 2,
      name: "Rohith",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "inactive", // Added status
    },
    {
      id: 3,
      name: "Doe",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "active", // Added status
    },
    {
      id: 4,
      name: "Doe",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "inactive", // Added status
    },
    {
      id: 5,
      name: "Doe",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "active", // Added status
    },
    {
      id: 6,
      name: "Doe",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "inactive", // Added status
    },
    {
      id: 7,
      name: "Doe",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "active", // Added status
    },
    {
      id: 8,
      name: "Doe",
      image:
        "https://dotandline.net/wp-content/uploads/2018/06/1_RlAYzmJ5wAfrsgNjueQtMw-1210x642.png",
      message: "5 new messages",
      status: "inactive", // Added status
    },
  ];

  return (
    <div className="rounded-md w-full h-full">
      <h2 className="uppercase text-center text-2xl font-semibold tracking-wide py-3 border-b-2 text-white">
        CHATSUP
      </h2>
      <UsersList users={users} />
    </div>
  );
};

export default SideBar;
