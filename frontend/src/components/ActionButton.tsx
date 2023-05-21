import React from "react";

type ActionButtonProps = {
  onClick: () => void;
  text: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ActionButton;
