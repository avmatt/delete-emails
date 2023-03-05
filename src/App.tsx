import { Inbox } from "./Inbox";
import { Nav } from "./Nav";
import { TopBar } from "./TopBar";

export const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div>
        <TopBar />
      </div>
      <div className="flex h-full">
        <div className="w-64 flex-shrink-0">
          <Nav />
        </div>
        <div className="w-full">
          <Inbox />
        </div>
      </div>
    </div>
  );
};
