import type { FolderKey } from "./@types/app";

import { useReducer, useState } from "react";
import { defaultFolderState } from "@/data/folders";
import { defaultEmailState } from "@/data/emails";
import { Inbox } from "@/components/Inbox";
import { Nav } from "@/components/Nav";
import { TopBar } from "@/components/TopBar";
import { emailReducer } from "@/reducers/emailReducer";

export const App = () => {
  const [activeFolder, setActiveFolder] = useState<FolderKey>("inbox");
  const [folders, setFolders] = useState(defaultFolderState);
  const [emails, dispatchEmails] = useReducer(emailReducer, defaultEmailState);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div>
        <TopBar />
      </div>
      <div className="flex h-full">
        <div className="w-64 flex-shrink-0">
          <Nav
            folders={folders}
            activeFolder={activeFolder}
            setActiveFolder={setActiveFolder}
          />
        </div>
        <div className="w-full">
          <Inbox
            emails={emails[activeFolder]}
            dispatchEmails={dispatchEmails}
            activeFolder={activeFolder}
          />
        </div>
      </div>
    </div>
  );
};
