import Image from "next/image";

export type IconProps = {
  width?: string | number;
  height?: string | number;
  src?: string;
};

export default function Icon({ src, height, width }: IconProps) {
  return <Image width={width} height={height} src={src} alt="icon" />;
}
