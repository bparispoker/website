import Link from 'next/link'
import { Twitter, Twitch, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Bryan Paris</h3>
            <p className="text-gray-400">Elevating your poker game through expert courses and personalized coaching.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#courses">Courses</Link></li>
              <li><Link href="#coaching">Coaching</Link></li>
              <li><Link href="#testimonials">Testimonials</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect with Me</h4>
            <div className="flex space-x-4">
              <a href="mailto:bparispoker@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://twitter.com/bparispoker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://twitch.tv/bparispoker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitch size={24} />
              </a>
              <a href="https://youtube.com/bparispoker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 bparispoker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

