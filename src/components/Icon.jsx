export default function Icon({ src, alt, width = 24, height = 24 }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </div>
  );
}
