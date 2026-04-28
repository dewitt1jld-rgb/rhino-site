type TrainingImageProps = {
  src: string;
  alt?: string;
  tall?: boolean;
};

export default function TrainingImage({
  src,
  alt = "",
  tall = false,
}: TrainingImageProps) {
  return (
    <div className={`imageFrame ${tall ? "imageTall" : ""}`}>
      <img
        src={src}
        alt={alt}
      style={{
  display: "block",
  width: "100%",
  height: tall ? "auto" : "auto",
  maxHeight: tall ? "620px" : "420px",
  objectFit: "contain",
  borderRadius: "16px",
}}
      />
    </div>
  );
}