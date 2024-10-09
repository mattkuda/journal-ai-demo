import { Button } from "@/components/ui/button"

const CallToAction: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-orange-50">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Your Journaling Journey?</h2>
                <p className="text-xl text-gray-600 mb-8">Sign up now and get access to unlimited prompts!</p>
                <Button className="text-lg px-8 py-3">Sign Up Free</Button>
            </div>
        </section>
    )
}

export default CallToAction