'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const themes = [
  { value: 'gratitude', label: 'Gratitude' },
  { value: 'self-reflection', label: 'Self-Reflection' },
  { value: 'goals', label: 'Goals' },
  { value: 'creativity', label: 'Creativity' },
]

const prompts = {
  gratitude: [
    "List three things you're grateful for today and why.",
    "Describe a person who has positively impacted your life recently.",
    "What's a small pleasure you often take for granted?",
  ],
  'self-reflection': [
    "What's a challenge you've overcome recently, and what did you learn from it?",
    "Describe a moment when you felt proud of yourself. What led to that feeling?",
    "What's a habit you'd like to change, and why?",
  ],
  goals: [
    "What's one short-term goal you'd like to achieve this week?",
    "Describe your ideal life five years from now. What steps can you take today to move towards it?",
    "What's a skill you'd like to develop, and how can you start learning it?",
  ],
  creativity: [
    "If you could invent anything, what would it be and why?",
    "Describe your perfect day from start to finish, using all five senses.",
    "Write a short story inspired by the last dream you remember.",
  ],
}

export function JournalPromptGeneratorComponent() {
  const [selectedTheme, setSelectedTheme] = useState('')
  const [currentPrompt, setCurrentPrompt] = useState('')

  const generatePrompt = () => {
    if (selectedTheme) {
      const themePrompts = prompts[selectedTheme]
      const randomPrompt = themePrompts[Math.floor(Math.random() * themePrompts.length)]
      setCurrentPrompt(randomPrompt)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Journal Spark</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-4 bg-gradient-to-b from-teal-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Daily Journal Prompt</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <Select onValueChange={setSelectedTheme}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        {theme.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={generatePrompt} className="w-full mb-6">Generate Prompt</Button>
              {currentPrompt && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">{currentPrompt}</h3>
                  <Textarea placeholder="Write your response here..." rows={6} />
                </div>
              )}
            </div>
          </div>
        </section>

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

        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-orange-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Your Journaling Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">Sign up now and get access to unlimited prompts!</p>
            <Button className="text-lg px-8 py-3">Sign Up Free</Button>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 bg-gradient-to-r from-orange-100 to-rose-100">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 Journal Spark. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}