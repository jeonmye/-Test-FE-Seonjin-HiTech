import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'

const Logo = ({ size, link }) => {
  const sizeVariants = {
    s: 80,
    m: 110,
    l: 140,
    xl: 170,
    xxl: 220
  }

  return link ? (
    <Link href="/">
      <Image
        src={logo}
        alt="선진하이텍"
        width={sizeVariants[size]}
        priority={true}
      />
    </Link>
  ) : (
    <Image
      src={logo}
      alt="선진하이텍"
      width={sizeVariants[size]}
      priority={true}
    />
  )
}

export default Logo
