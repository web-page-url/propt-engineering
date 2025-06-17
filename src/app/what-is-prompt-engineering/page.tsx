import React from "react";
import Hero from '../components/Hero';

export default function WhatIsPromptEngineeringPage() {
  return (
    <>
      <Hero title="What is Prompt Engineering?" subtitle="A Practical Guide for Everyone" />
      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8 text-base text-gray-800 dark:text-gray-100">
        <section className="mb-8">
          <p className="mb-4 text-lg">Prompt Engineering is the practice of designing and structuring inputs (prompts) in a way that helps AI systems like ChatGPT, Claude, or Gemini give the best possible responses. You’re essentially “engineering” your prompt to guide the model toward the output you want.</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4 flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            <div>
              <span className="font-bold text-blue-700 dark:text-blue-300">Simple Definition</span>
              <p className="text-gray-700 dark:text-gray-200">Prompt engineering is like asking the right question in the right way so the AI gives you exactly what you need.</p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <span className="font-bold text-green-700 dark:text-green-300">Goal</span>
              <p className="text-gray-700 dark:text-gray-200">To maximize the quality of output by writing clear, detailed, and well-structured instructions.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Basic Example</h2>
          <div className="mb-2">
            <span className="font-semibold text-red-600">❌ Bad Prompt:</span>
            <div className="bg-red-50 dark:bg-red-900/30 rounded p-3 mt-1 mb-2">Write about dogs.<br /><span className="italic text-xs">Result: Too generic and unfocused.</span></div>
          </div>
          <div>
            <span className="font-semibold text-green-700">✅ Good Prompt:</span>
            <div className="bg-green-50 dark:bg-green-900/30 rounded p-3 mt-1">Write a 100-word informative paragraph about the history and intelligence of German Shepherd dogs, suitable for a 10-year-old child.<br /><span className="italic text-xs">Result: Clear length, topic, tone, audience.</span></div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">💡 Prompt Engineering Template</h2>
          <p className="mb-2">You can structure prompts with this format:</p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-2 font-mono text-sm">
            [Instruction] + [Context] + [Format] + [Constraints] + [Example]
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">✨ Examples of Prompt Engineering</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-1">📝 1. Creative Writing Prompt</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-1 font-mono text-sm">Act as a professional story writer. Write a 3-paragraph short story about a lonely robot on Mars who finds a mysterious signal. The story should be emotional, use vivid descriptions, and end with a twist.</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-1">👨‍💼 2. Business Email Prompt</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-1 font-mono text-sm">Write a polite and professional follow-up email to a client who hasn't responded in 3 days. Mention the proposal you sent, and kindly request an update.</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-1">👩‍🏫 3. Educational Prompt</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-1 font-mono text-sm">Explain the concept of "Newton's Laws of Motion" in simple words for a 6th-grade student. Use short examples from daily life.</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-1">🔧 4. Technical Prompt</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-1 font-mono text-sm">You are a senior React developer. Write a code snippet to fetch data from a public API using axios and display it in a list. Explain each step in comments.</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-1">🧪 5. Prompt for Prompt Optimizer App</h3>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-1 font-mono text-sm">User Input (Raw Idea):<br />I want to write a blog post on AI in education.<br /><br />Optimized Prompt (AI-Generated):<br />Write a detailed blog post (700 words) about the impact of artificial intelligence in education. Focus on benefits, risks, and real-world examples. Use an informative and engaging tone for a general audience.</div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">✅ Tips for Good Prompts</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Be specific.</li>
            <li>Define the format (e.g., essay, bullet points, code).</li>
            <li>Mention audience (kids, professionals, etc.).</li>
            <li>Set tone (formal, funny, poetic).</li>
            <li>Limit length (optional but helps).</li>
          </ul>
        </section>
      </main>
    </>
  );
}
