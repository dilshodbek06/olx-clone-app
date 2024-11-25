const EmptyState = () => {
  return (
    <div className="p-4 flex justify-center flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-x-2 w-14 h-14 mb-4 text-white"
      >
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m8 12.5-5 5" />
        <path d="m3 12.5 5 5" />
      </svg>

      <h2 className="text-md opacity-90 font-semibold mb-2 break-words text-center text-white">
        No data found
      </h2>
    </div>
  );
};

export default EmptyState;
