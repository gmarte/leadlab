import Link from 'next/link'
import Image from 'next/image'; // Import the Image component


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image 
       src="/images/logo1.png"
       alt="logo"
       width={140}
       height={40} />      
    </Link>
  )
}
