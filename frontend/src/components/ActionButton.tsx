import React from "react";

const ActionButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Connect Wallet
    </button>
  );
};

export default ActionButton;
