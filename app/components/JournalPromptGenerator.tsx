'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Theme = {
    value: string
    label: string
}

type Prompts = {
    [key: string]: string[]
}

const themes: Theme[] = [
    { value: 'gratitude', label: 'Gratitude' },
    { value: 'self-reflection', label: 'Self-Reflection' },
    { value: 'goals', label: 'Goals' },
    { value: 'creativity', label: 'Creativity' },
]

const prompts: Prompts = {
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

const JournalPromptGenerator: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = useState<string>('')
    const [currentPrompt, setCurrentPrompt] = useState<string>('')

    const generatePrompt = () => {
        if (selectedTheme) {
            const themePrompts = prompts[selectedTheme]
            const randomPrompt = themePrompts[Math.floor(Math.random() * themePrompts.length)]
            setCurrentPrompt(randomPrompt)
        }
    }

    return (
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
    )
}

export default JournalPromptGenerator