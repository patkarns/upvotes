import { useState } from "react";

import colors from "../../styles/utilities/colors.module.scss";
import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up.svg";
import "./Upvote.scss";

function Upvote({ isSelected, setIsSelected }) {
  return (
    <button
      style={{
        backgroundColor: isSelected
          ? colors.backgroundSelected
          : colors.backgroundDefault,
      }}
      className="UpvoteButton"
      onClick={() => setIsSelected(!isSelected)}
    >
      {" "}
      <ArrowUpIcon fill={isSelected ? colors.selected : colors.default} />{" "}
    </button>
  );
}

export default Upvote;
