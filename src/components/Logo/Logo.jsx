import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ size, link }) => {
  const sizeVariants = {
    s: 80,
    m: 110,
    l: 140,
    xl: 170,
    xxl: 220,
    xxxl: 260
  }

  return link ? (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="선진하이텍"
        width={sizeVariants[size]}
        height={sizeVariants[size]}
        priority={true}
      />
    </Link>
  ) : (
    <Image
      src="/images/logo.png"
      alt="선진하이텍"
      width={sizeVariants[size]}
      height={sizeVariants[size]}
      priority={true}
    />
  )
}

export default Logo
