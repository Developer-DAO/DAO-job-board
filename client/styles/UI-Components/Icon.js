import Image from 'next/image'

export default function Icon({src, height, width}) {
  return <Image
  width={width}
  height={height}
  src={src}
  alt='icon' />
}
