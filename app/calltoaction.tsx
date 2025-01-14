import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Poker Game?</h2>
        <p className="text-xl mb-8">Join the ranks of successful players I've coached and take your skills to new heights.</p>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-white border-white hover:bg-green-700"
          onClick={() => window.location.href = 'mailto:bparispoker@gmail.com'}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

