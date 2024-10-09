import Header from './components/Header'
import Footer from './components/Footer'
import JournalPromptGenerator from './components/JournalPromptGenerator'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <JournalPromptGenerator />
                <Features />
                <Testimonials />
                <CallToAction />
            </main>
            <Footer />
        </div>
    )
}