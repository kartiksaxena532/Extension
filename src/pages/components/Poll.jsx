import React, { useState } from 'react';

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (event) => {
    event.preventDefault();
    alert(`You voted for: ${selectedOption}`);
  };

  return (
    <div className="widget">
      <h3 className="text-xl font-semibold mb-2">Poll</h3>
      <form onSubmit={handleVote} className="space-y-2">
        <label className="block">
          <input
            type="radio"
            name="poll"
            value="Option 1"
            className="mr-2"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 1
        </label>
        <label className="block">
          <input
            type="radio"
            name="poll"
            value="Option 2"
            className="mr-2"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 2
        </label>
        <label className="block">
          <input
            type="radio"
            name="poll"
            value="Option 3"
            className="mr-2"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 3
        </label>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          Vote
        </button>
      </form>
    </div>
  );
};

export default Poll;
