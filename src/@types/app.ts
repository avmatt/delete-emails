import type { IconDefinition } from "@fortawesome/pro-duotone-svg-icons";

export type FolderKey =
  | "inbox"
  | "spam"
  | "snoozed"
  | "important"
  | "archive"
  | "trash";
export type Folder = {
  key: FolderKey;
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
