import { useState } from "react";

import Box from '@mui/material/Box';

import colors from "../../styles/utilities/colors.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import Upvote from '../upvote/Upvote';
import './UpvoteList.scss';
import { flexbox } from "@mui/system";

function UpvoteList() {
  const [isSelected, setIsSelected] = useState(false);
  const [numUpvotes, setNumUpvotes] = useState(0);

  const upvotes = [...Array(numUpvotes)].map((e, i) => <Upvote key={i} isSelected={isSelected} setIsSelected={setIsSelected}/>)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <Box className="UpvotesList" sx={{ display: 'flex' }}> {upvotes}</Box>
    <button className="AddUpvoteButton" onClick={() => setNumUpvotes(numUpvotes + 1)}>
      {" "}
      <PlusIcon />{" "}
    </button>
  </div>
  );
}

export default UpvoteList;
