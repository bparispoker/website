import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CoachingServices() {
  return (
    <section id="coaching" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Personal Coaching with Bryan</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Take Your Game to the Next Level</h3>
            <ul className="space-y-4">
              {['One-on-one sessions tailored to your needs', 'In-depth hand analysis', 'Customized study plans', 'Live game coaching and support'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 text-center">
            <p className="text-4xl font-bold mb-4">$150<span className="text-xl font-normal">/hour</span></p>
            <Button 
              size="lg"
              onClick={() => window.open('https://calendly.com/bparispoker/mtt-coaching', '_blank')}
            >
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

