import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function InputField({
  label,
  placeholder,
  type,
  value = "",
  onChange = () => {},
}) {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    type === "password" &&
      setError(
        !validatePassword(inputValue)
          ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
          : ""
      );
  };

  return (
    <div className="relative">
      <label htmlFor="" className="block text-md font-medium mb-1">
        {label}
      </label>
      <input
        type={type === "password" ? (showPass ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="border-none px-4 py-3 w-72 rounded-md text-sm bg-secondary focus:outline-1 focus:outline-secondary"
      />
      {type === "password" && (
        <span
          className="absolute top-9 right-4 cursor-pointer"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </span>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
