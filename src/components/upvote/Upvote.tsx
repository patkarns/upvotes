import { useState } from "react";

import colors from "../../styles/utilities/colors.module.scss";
import { ReactComponent as ArrowUpIcon } from "../../assets/arrow-up.svg";

function Upvote({isSelected, setIsSelected}) {

  return (
    <>
      <div>
        <button
          style={{
            backgroundColor: isSelected
              ? colors.backgroundSelected
              : colors.backgroundDefault,
          }}
          onClick={() => setIsSelected(!isSelected)}
        >
          {" "}
          <ArrowUpIcon
            fill={isSelected ? colors.selected : colors.default}
          />{" "}
        </button>
      </div>
    </>
  );
}

export default Upvote;
