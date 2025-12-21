import Image from "next/image";

type Props = {
  size?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export default function Logo({
  size = 32,
  alt = "Laxm logo",
  className = "",
  priority = true,
}: Props) {
  return (
    <Image
      src="/laxm_logo.png"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
