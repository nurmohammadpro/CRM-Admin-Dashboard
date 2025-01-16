const variants = {
  dark: {
    backgroundColor: "#212121",
    backgroundHover: "#424242",
    color: "#FFFFFF",
    borderHover: "1px solid #424242",
  },
  light: {
    backgroundColor: "#FFFFFF",
    backgroundHover: "#fafafa",
    color: "#000000",
    borderHover: "1px solid #d6d6d6",
  },
};

export default function SidebarMenuItem({
  icon,
  title,
  path,
  variant = "light",
}) {
  const userVariant = variants[variant];

  return external ? (
    <a
      href={path}
      target=""
      rel="noopener noreferrer"
      style={{
        backgroundColor: userVariant.backgroundColor,
        color: userVariant.color,
        border: userVariant.border,
      }}
      className={`block w-full text-md px-4 py-2 rounded-lg cursor-pointer hover:bg-${userVariant.backgroundHover} mb-2`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </a>
  ) : (
    <div
      style={{
        backgroundColor: userVariant.backgroundColor,
        color: userVariant.color,
        border: userVariant.border,
      }}
      className={`flex items-center gap-4 w-full text-md px-4 py-2 rounded-lg cursor-pointer hover:bg-${userVariant.backgroundHover}`}
    >
      {icon && <span className="m-2">{icon}</span>}
      <p>{title}</p>
    </div>
  );
}
