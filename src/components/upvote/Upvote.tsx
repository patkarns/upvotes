import { useEffect, useState } from "react";

import UpvoteList from "../upvote-list/UpvoteList";

function Upvote() {
  const [upvoteListsById, setUpvoteListsById] = useState({
    0: { id: 0, numUpvotes: 0, isSelected: false },
    1: { id: 1, numUpvotes: 0, isSelected: false },
    2: { id: 2, numUpvotes: 0, isSelected: false },
  });

  const setIsSelected = (id) => {
    const upvoteList = upvoteListsById[id];
    const updatedUpvoteListsById = {
      ...upvoteListsById,
      [id]: {
        ...upvoteList,
        isSelected: !upvoteList.isSelected,
      },
    };
    setUpvoteListsById(updatedUpvoteListsById);
    localStorage.setItem(
      "upvoteListsById",
      JSON.stringify(updatedUpvoteListsById)
    );
  };

  const setNumUpvotes = (id, numUpvotes) => {
    const upvoteList = upvoteListsById[id];
    const updatedUpvoteListsById = {
      ...upvoteListsById,
      [id]: {
        ...upvoteList,
        numUpvotes,
      },
    };
    setUpvoteListsById(updatedUpvoteListsById);
    localStorage.setItem(
      "upvoteListsById",
      JSON.stringify(updatedUpvoteListsById)
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("upvoteListsById");
    if (data) {
      setUpvoteListsById(JSON.parse(data));
    }
  }, []);

  return (
    <div className="card">
      {Object.keys(upvoteListsById).map((upvoteListId) => (
        <UpvoteList
          key={upvoteListId}
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
