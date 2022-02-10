import React from "react";

function Vote({ votes, incVotes }) {
  return (
    <div>
      <button onClick={() => incVotes(-1)}>&lt;</button>
      {votes}
      <button onClick={() => incVotes(1)}>&gt;</button>
    </div>
  );
}

export default Vote;
