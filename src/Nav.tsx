import type { Folder } from "./App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavProps = {
  folders: Folder[];
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
};

export const Nav: React.FC<NavProps> = ({
  folders,
  activeFolder,
  setActiveFolder,
}) => {
  return (
    <div className="">
      {folders.map(({ id, icon, label, count }) => (
        <button
          key={id}
          className={`flex items-center w-full text-left px-5 py-2 text-sm rounded-r-full transition-colors ${
            activeFolder === id ? "bg-slate-300 font-bold" : "hover:bg-gray-200"
          }`}
          onClick={() => setActiveFolder(id)}
        >
          <FontAwesomeIcon icon={icon} className="fa-lg fa-fw mr-3" />
          {label}
          <div className="ml-auto text-xs">{count}</div>
        </button>
      ))}
    </div>
  );
};
