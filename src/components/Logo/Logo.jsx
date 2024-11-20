import Image from 'next/image'
import logo from '../../../public/images/logo.png'


const Logo = ({size, link}) => {
const sizeVariants = {
  's' : 80,
  'm' : 110,
  'l' : 140,
  'xl' : 170,
  'xxl' : 220
}
return(
  <a href={`${link ? '/': '#none'}`}>
<Image
src={logo}
alt="선진하이텍"
width={sizeVariants[size]}
></Image>
</a>
)}

export default Logo