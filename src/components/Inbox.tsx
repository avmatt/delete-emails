import type { Email, FolderKey } from "@/@types/app";
import type { EmailReducerAction } from "@/reducers/emailReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faClock,
  faEnvelope,
  faEnvelopeOpen,
  faSquare,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";

type InboxProps = {
  emails: Email[];
  dispatchEmails: React.Dispatch<EmailReducerAction>;
  activeFolder: FolderKey;
};

export const Inbox: React.FC<InboxProps> = ({
  emails,
  dispatchEmails,
  activeFolder,
}) => {
  const markAsRead = (id: number) => {
    dispatchEmails({ type: "SET_READ", folder: activeFolder, id, read: true });
  };

  const markAsUnread = (id: number) => {
    dispatchEmails({ type: "SET_READ", folder: activeFolder, id, read: false });
  };

  const snoozeEmail = (id: number) => {
    dispatchEmails({
      type: "MOVE",
      folder: activeFolder,
      id,
      destination: "snoozed",
    });
  };

  const archiveEmail = (id: number) => {
    dispatchEmails({
      type: "MOVE",
      folder: activeFolder,
      id,
      destination: "archive",
    });
  };

  const deleteEmail = (id: number) => {
    dispatchEmails({
      type: "MOVE",
      folder: activeFolder,
      id,
      destination: "trash",
    });
  };

  return (
    <div className="px-3 pb-3 h-full">
      <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
        {emails.map(({ id, from, subject, preview, timestamp, read }) => (
          <div
            key={id}
            className="group flex items-center px-4 h-10 border-b hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faSquare} className="fa-lg mr-2" />
            <div
              className={`w-1/5 text-sm truncate ${read ? "" : "font-bold"}`}
            >
              {from}
            </div>
            <div className="text-sm truncate">
              <span className={`${read ? "" : "font-bold"}`}>{subject}</span>
              <span className="text-gray-500">&nbsp;- {preview}</span>
            </div>
            <div className="ml-auto hidden group-hover:block whitespace-nowrap">
              {read ? (
                <button
                  className="transition-colors hover:bg-gray-300 aspect-square h-10 rounded-full"
                  onClick={() => markAsUnread(id)}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              ) : (
                <button
                  className="transition-colors hover:bg-gray-300 aspect-square h-10 rounded-full"
                  onClick={() => markAsRead(id)}
                >
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </button>
              )}
              <button
                className="transition-colors hover:bg-gray-300 aspect-square h-10 rounded-full"
                onClick={() => snoozeEmail(id)}
              >
                <FontAwesomeIcon icon={faClock} />
              </button>
              <button
                className="transition-colors hover:bg-gray-300 aspect-square h-10 rounded-full"
                onClick={() => archiveEmail(id)}
              >
                <FontAwesomeIcon icon={faBoxArchive} />
              </button>
              <button
                className="transition-colors hover:bg-gray-300 aspect-square h-10 rounded-full"
                onClick={() => deleteEmail(id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <div
              className={`ml-auto group-hover:hidden text-xs whitespace-nowrap ${
                read ? "" : "font-bold"
              }`}
            >
              {timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
