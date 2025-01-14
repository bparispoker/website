import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-green-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">Elevate Your Poker Game with Bryan Paris</h1>
          <p className="text-xl mb-8">Expert-led courses and personalized coaching to take your skills to the next level</p>
          <Button size="lg" className="bg-white text-green-900 hover:bg-green-100">
            Explore Courses
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Bryan Paris"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

