import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "AJ",
    title: "Amateur Player",
    quote: "The courses have dramatically improved my game. I'm now consistently winning in my local tournaments."
  },
  {
    name: "Sarah Lee",
    avatar: "SL",
    title: "Semi-Pro Player",
    quote: "The personalized coaching helped me identify and fix leaks in my game. My win rate has doubled since."
  },
  {
    name: "Mike Thompson",
    avatar: "MT",
    title: "Professional Player",
    quote: "Even as a pro, I learned new strategies that have given me an edge in high-stakes games. Highly recommended!"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What My Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

