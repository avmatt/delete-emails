import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/pro-duotone-svg-icons";

export const Inbox = () => {
  const [emails, setEmails] = useState([
    {
      id: 2,
      from: "EyeMed Vision Care",
      subject: "Hello March, hello savings",
      preview:
        "Your vision benefits go above and beyond - and so do the extra perks",
      timestamp: "10:51 PM",
    },
    {
      id: 1,
      from: "Amazon.com",
      subject: "Your Amazon.com order #24314-141412-321 has shipped",
      preview: "Hi Matt, your package is on the way!",
      timestamp: "9:32 PM",
    },
  ]);

  return (
    <div className="px-3 pb-3 h-full">
      <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
        {emails.map(({ id, from, subject, preview, timestamp }) => (
          <div
            key={id}
            className="flex items-center px-4 py-3 border-b hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faSquare} className="fa-lg mr-2" />
            <div className="w-1/5 text-sm">{from}</div>
            <div className="text-sm">{subject}</div>
            <div className="text-sm text-gray-500">&nbsp;- {preview}</div>
            <div className="ml-auto text-xs">{timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
