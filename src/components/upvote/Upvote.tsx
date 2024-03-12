import { useState } from "react";

import UpvoteList from "../upvote-list/UpvoteList";

function Upvote() {
  const [upvoteListsById, setUpvoteListsById] = useState({
    0: { id: 0, numUpvotes: 0, isSelected: false },
    1: { id: 1, numUpvotes: 0, isSelected: false },
    2: { id: 2, numUpvotes: 0, isSelected: false },
  });

  const setIsSelected = (id) => {
    const upvoteList = upvoteListsById[id];
    setUpvoteListsById({
      ...upvoteListsById,
      [id] : {
        ...upvoteList,
        isSelected: !upvoteList.isSelected
      }
    })
  };

  const setNumUpvotes = (id, numUpvotes) => {
    const upvoteList = upvoteListsById[id];
    setUpvoteListsById({
      ...upvoteListsById,
      [id] : {
        ...upvoteList,
        numUpvotes
      }
    })
  };

  return (
    <div className="card">
      {Object.keys(upvoteListsById).map((upvoteListId) => (
        <UpvoteList
          id={upvoteListId}
          isSelected={upvoteListsById[upvoteListId].isSelected}
          numUpvotes={upvoteListsById[upvoteListId].numUpvotes}
          setIsSelected={setIsSelected}
          setNumUpvotes={setNumUpvotes}
        />
      ))}
    </div>
  );
}

export default Upvote;
