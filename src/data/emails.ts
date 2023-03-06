import type { FolderKey, Email } from "@/@types/app";

export const defaultEmailState: { [folder in FolderKey]: Email[] } = {
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
  archive: [],
  trash: [],
};
