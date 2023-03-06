import type { Folder } from "@/@types/app";

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
      {folders.map(({ key, icon, label, count }) => (
        <button
          key={key}
          className={`flex items-center w-full text-left px-5 py-2 text-sm rounded-r-full transition-colors ${
            activeFolder === key
              ? "bg-slate-300 font-bold"
              : "hover:bg-gray-200"
          }`}
          onClick={() => setActiveFolder(key)}
        >
          <FontAwesomeIcon icon={icon} className="fa-lg fa-fw mr-3" />
          {label}
          <div className="ml-auto text-xs">{count}</div>
        </button>
      ))}
    </div>
  );
};
