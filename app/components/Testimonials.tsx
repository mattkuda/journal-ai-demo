const Testimonials: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <p className="text-gray-600 mb-4">"Journal Spark has revolutionized my daily writing routine. The prompts are always thought-provoking!"</p>
                        <p className="font-semibold text-gray-700">- Sarah K.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <p className="text-gray-600 mb-4">"I love how I can choose different themes. It keeps my journaling diverse and interesting."</p>
                        <p className="font-semibold text-gray-700">- Mike T.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials