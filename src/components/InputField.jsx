import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function InputField({
  label,
  placeholder,
  type,
  value,
  onChange,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      <label htmlFor="" className="block text-md font-medium mb-1">
        {label}
      </label>
      <input
        type={type === "password" ? (showPass ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-none px-4 py-3 w-72 rounded-md text-sm bg-secondary focus:outline-1 focus:outline-secondary"
      />
      <span
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </span>
    </div>
  );
}
