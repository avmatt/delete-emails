import type { IconDefinition } from "@fortawesome/pro-duotone-svg-icons";

import { useState } from "react";
import {
  faBookmark,
  faClock,
  faHexagonExclamation,
  faInbox,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { Inbox } from "./Inbox";
import { Nav } from "./Nav";
import { TopBar } from "./TopBar";

export type Folder = {
  id: string;
  label: string;
  icon: IconDefinition;
  count: number;
};

export type Email = {
  id: number;
  read: boolean;
  from: string;
  subject: string;
  preview: string;
  timestamp: string;
};

export const App = () => {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [folders, setFolders] = useState<Folder[]>([
    { id: "inbox", label: "Inbox", icon: faInbox, count: 0 },
    { id: "spam", label: "Spam", icon: faHexagonExclamation, count: 0 },
    { id: "snoozed", label: "Snoozed", icon: faClock, count: 0 },
    { id: "important", label: "Important", icon: faBookmark, count: 0 },
    { id: "trash", label: "Trash", icon: faTrash, count: 0 },
  ]);

  const [emails, setEmails] = useState<{ [folder: string]: Email[] }>({
    inbox: [
      {
        id: 2,
        read: false,
        from: "EyeMed Vision Care",
        subject: "Hello March, hello savings",
        preview:
          "Your vision benefits go above and beyond - and so do the extra perks",
        timestamp: "10:51 PM",
      },
      {
        id: 1,
        read: true,
        from: "Amazon.com",
        subject: "Your Amazon.com order #24314-141412-321 has shipped",
        preview: "Hi Matt, your package is on the way!",
        timestamp: "9:32 PM",
      },
    ],
    spam: [],
    snoozed: [],
    important: [],
    trash: [],
  });

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
            setEmails={setEmails}
            activeFolder={activeFolder}
          />
        </div>
      </div>
    </div>
  );
};
