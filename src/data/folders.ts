import { Folder } from "@/@types/app";
import {
  faArchive,
  faBookmark,
  faClock,
  faHexagonExclamation,
  faInbox,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";

export const defaultFolderState: Folder[] = [
  { key: "inbox", label: "Inbox", icon: faInbox, count: 2 },
  { key: "spam", label: "Spam", icon: faHexagonExclamation, count: 0 },
  { key: "snoozed", label: "Snoozed", icon: faClock, count: 0 },
  { key: "important", label: "Important", icon: faBookmark, count: 0 },
  { key: "archive", label: "Archive", icon: faArchive, count: 0 },
  { key: "trash", label: "Trash", icon: faTrash, count: 0 },
];
