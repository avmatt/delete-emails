import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faHexagonExclamation,
  faInbox,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";

export const Nav = () => {
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const folders = [
    {
      icon: faInbox,
      label: "Inbox",
      count: 513,
    },
    {
      icon: faHexagonExclamation,
      label: "Spam",
      count: 9,
    },
    {
      icon: faClock,
      label: "Snoozed",
      count: 3,
    },
    {
      icon: faBookmark,
      label: "Important",
      count: 2,
    },
    {
      icon: faTrash,
      label: "Trash",
      count: 302,
    },
  ];

  return (
    <div className="">
      {folders.map(({ icon, label, count }) => (
        <button
          key={label}
          className={`flex items-center w-full text-left px-5 py-2 text-sm rounded-r-full transition-colors ${
            activeFolder === label
              ? "bg-slate-300 font-bold"
              : "hover:bg-gray-200"
          }`}
          onClick={() => setActiveFolder(label)}
        >
          <FontAwesomeIcon icon={icon} className="fa-lg fa-fw mr-3" />
          {label}
          <div className="ml-auto text-xs">{count}</div>
        </button>
      ))}
    </div>
  );
};
