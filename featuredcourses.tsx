import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Poker Fundamentals",
    description: "Master the basics with my comprehensive guide to poker strategy",
    price: "$299",
    url: "https://strungoutpoker.gumroad.com/l/idktr"
  },
  {
    title: "Midstakes Mastery",
    description: "Learn the techniques I use to crush mid-stakes games",
    price: "$299",
    url: "https://strungoutpoker.gumroad.com/l/jXCpY"
  },
  {
    title: "Beat the Fish",
    description: "Discover the most common exploits and strategies to use against soft competition",
    price: "$99",
    url: "https://www.advancedpokertraining.com/beatthefish"
  }
]

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">{course.price}</p>
                <Button 
                  className="w-full"
                  onClick={() => window.open(course.url, '_blank')}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

