import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Bryan Paris</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#coaching">Coaching</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
          </ul>
        </nav>
        <Button variant="outline" className="text-white border-white hover:bg-green-700">
          Get Started
        </Button>
      </div>
    </header>
  )
}

