import colors from "../../styles/utilities/colors.module.scss";
import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up.svg";
import "./UpvoteButton.scss";

function UpvoteButton({ isSelected, setIsSelected }) {
  return (
    <button
      style={{
        backgroundColor: isSelected
          ? colors.backgroundSelected
          : colors.backgroundDefault,
      }}
      className="UpvoteButton"
      onClick={() => setIsSelected()}
    >
      {" "}
      <ArrowUpIcon fill={isSelected ? colors.selected : colors.default} />{" "}
    </button>
  );
}

export default UpvoteButton;
