import { useState } from "react";

import Box from "@mui/material/Box";

import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as ClearIcon } from "../../assets/clear.svg";
import UpvoteButton from "../upvote-button/UpvoteButton";
import "./UpvoteList.scss";

function UpvoteList({
  id,
  isSelected,
  setIsSelected,
  numUpvotes,
  setNumUpvotes,
}) {
  const upvotes = [...Array(numUpvotes)].map((e, i) => (
    <UpvoteButton
      key={i}
      isSelected={isSelected}
      setIsSelected={() => setIsSelected(id)}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box className="UpvotesList" sx={{ display: "flex" }}>
        {" "}
        {upvotes}
      </Box>
      <button
        className="AddUpvoteButton"
        onClick={() => setNumUpvotes(id, numUpvotes + 1)}
      >
        {" "}
        <PlusIcon />{" "}
      </button>
      <button onClick={() => setNumUpvotes(id, 0)}>
        <ClearIcon />
      </button>
    </div>
  );
}

export default UpvoteList;
