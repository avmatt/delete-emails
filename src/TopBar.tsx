import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faQuestion, faUser } from "@fortawesome/pro-duotone-svg-icons";

export const TopBar = () => {
  return (
    <div className="flex px-5 py-3">
      <div className="text-xl">Stress Deleter</div>

      <div className="ml-auto">
        <button className="transition-colors hover:bg-gray-200 aspect-square h-8 rounded-full">
          <FontAwesomeIcon icon={faQuestion} />
        </button>
        <button className="transition-colors hover:bg-gray-200 aspect-square h-8 rounded-full">
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button className="transition-colors hover:bg-gray-200 aspect-square h-8 rounded-full">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};
