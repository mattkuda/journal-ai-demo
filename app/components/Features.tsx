const Features: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Themed Prompts</h3>
                        <p className="text-gray-600">Choose from various themes to focus your journaling session.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Daily Inspiration</h3>
                        <p className="text-gray-600">Get a new prompt every day to keep your writing fresh and engaging.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Reflective Writing</h3>
                        <p className="text-gray-600">Deepen your self-awareness through guided journaling exercises.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features