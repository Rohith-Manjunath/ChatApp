import ChatArea from "@/components/ChatArea";
import SideBar from "@/components/SideBar";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 grid grid-cols-8">
      {/* <ModeToggle /> */}
      <div className="col-span-2 m-4 rounded-md border border-purple-400">
        <SideBar />
      </div>
      <div className="col-span-6 m-4 rounded-md border border-purple-400">
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
