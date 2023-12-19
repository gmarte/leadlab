import Link from 'next/link'
import Image from 'next/image'; // Import the Image component


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image 
       src="/images/leadlab.png"
       alt="logo"
       width={60}
       height={120} />      
    </Link>
  )
}
