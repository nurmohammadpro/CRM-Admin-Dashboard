export default function Button({ title, type, icon, onClick }) {
  return (
    <div>
      <button
        type={type}
        className="flex items-center justify-center gap-2 px-5 py-2 font-medium hover:bg-gray-200 border border-gray-400 rounded-md cursor-pointer"
        onClick={onClick}
      >
        {icon}
        {title}
      </button>
    </div>
  );
}
