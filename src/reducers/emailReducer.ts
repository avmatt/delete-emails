import type { FolderKey, Email } from "@/@types/app";

export type EmailReducerAction =
  | { type: "SET_READ"; folder: FolderKey; id: number; read: boolean }
  | { type: "MOVE"; folder: FolderKey; id: number; destination: FolderKey };

export const emailReducer = (
  state: { [folder in FolderKey]: Email[] },
  action: EmailReducerAction
) => {
  switch (action.type) {
    case "SET_READ": {
      const emails = state[action.folder].map((email) => ({
        ...email,
        read: email.id === action.id ? action.read : email.read,
      }));
      return {
        ...state,
        [action.folder]: emails,
      };
    }

    case "MOVE": {
      const email = state[action.folder].find(
        (email) => email.id === action.id
      );
      const emails = state[action.folder].filter(
        (email) => email.id !== action.id
      );
      return {
        ...state,
        [action.folder]: emails,
        [action.destination]: [...state[action.destination], email],
      };
    }
  }
};
