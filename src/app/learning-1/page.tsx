import Hero from '../components/Hero';

export default function Learning1Page() {
  return (
    <>
      <Hero title="Basics of Prompt Creation" subtitle="Welcome to the Prompt Creation Party!" />
      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8 text-base text-gray-800 dark:text-gray-100">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Picture yourself as a director, and the AI is your star actor.</h2>
          <p className="mb-4">Your job? Give clear, precise instructions (aka prompts) to make the performance shine! In Module 2, we’re diving into the nuts and bolts of creating prompts that get AI to deliver exactly what you want. Whether you’re a newbie or leveling up your AI game, this module will transform you into a prompt-crafting wizard.</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Why is this module awesome?</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You’ll learn to communicate with AI like it’s your best friend.</li>
              <li>You’ll avoid frustrating “huh?” moments when AI misinterprets your request.</li>
              <li>You’ll create prompts for real-world tasks, from writing emails to brainstorming ideas.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">What you’ll learn:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>How to understand user intent and set the right context.</li>
              <li>Tips for writing clear, concise prompts that AI loves.</li>
              <li>Common mistakes and how to sidestep them like a pro.</li>
            </ul>
          </div>
          <p className="italic">Grab your creative hat, and let’s make some AI magic!</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 1: Understanding User Intent and Context</h2>
          <p className="mb-2 font-semibold">What’s User Intent, and Why Does It Matter?</p>
          <p className="mb-4">User intent is the goal behind your prompt—what you want the AI to achieve. The clearer your intent, the better the AI’s response.</p>
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
              <span className="font-semibold">Vague Intent:</span> “Tell me about dogs.”
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
              <span className="font-semibold">Clear Intent:</span> “List three fun facts about golden retrievers for a kids’ presentation.”
            </div>
          </div>
          <p className="mb-2 font-semibold">Setting the Context</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Audience: Who is the response for? (e.g., kids, experts, casual readers)</li>
            <li>Tone: Formal, funny, professional?</li>
            <li>Scope: How detailed or brief should the answer be?</li>
          </ul>
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
              <span className="font-semibold">Prompt Without Context:</span> “Explain quantum physics.”
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
              <span className="font-semibold">Prompt With Context:</span> “Explain quantum physics in 100 words for a high school student using simple language.”
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Spot the Intent!</h3>
            <ul className="list-disc pl-6">
              <li>“Write a 50-word ad for a coffee shop.”</li>
              <li>“Summarize the plot of ‘Pride and Prejudice’ in one paragraph.”</li>
              <li>“Generate a Python code snippet for a calculator.”</li>
            </ul>
            <p className="mt-2 text-sm">What’s the user’s intent? Share your thoughts in our forum!</p>
          </div>
          <div className="text-blue-700 dark:text-blue-300 font-semibold">Pro Tip: Always ask yourself, “What do I want the AI to do, and who’s it for?”</div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 2: Crafting Clear and Concise Prompts</h2>
          <p className="mb-2 font-semibold">The Golden Rule: Keep It Simple!</p>
          <p className="mb-4">AI thrives on clarity. A concise prompt cuts through the noise and gets straight to the point. Think of it like texting a friend—you wouldn’t send a novel when a sentence will do.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use Simple Language: Avoid jargon unless necessary.</li>
            <li>Be Specific: Instead of “Write something about history,” try “Write a 200-word essay on the causes of the American Revolution.”</li>
            <li>State the Format: Want a list, paragraph, or table? Say so!</li>
            <li>Set Boundaries: Specify word count, tone, or exclusions (e.g., “No technical terms”).</li>
          </ul>
          <div className="flex flex-col gap-2 mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
              <span className="font-semibold">Unclear Prompt:</span> “Give me info on climate change.”
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
              <span className="font-semibold">Clear Prompt:</span> “List five effects of climate change on oceans in bullet points, using simple language for a general audience.”
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Rewrite the Prompt!</h3>
            <p>Take this vague prompt and make it clear and concise:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">“Tell me about exercise.”</div>
            <p className="text-sm">Post your improved version in our forum and vote for the best one!</p>
          </div>
          <div className="text-green-700 dark:text-green-300 font-semibold">Fun Fact: Specific prompts can improve AI accuracy by up to 30%!</div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 3: Common Pitfalls and How to Avoid Them</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><span className="font-semibold">Vague Language</span><br/>Problem: “Write something creative.”<br/>Fix: “Write a 100-word sci-fi story about a time-traveling chef.”</li>
            <li><span className="font-semibold">Missing Context</span><br/>Problem: “Explain AI.”<br/>Fix: “Explain AI in 50 words for a 10-year-old.”</li>
            <li><span className="font-semibold">Negative Instructions</span><br/>Problem: “Don’t write a long answer.”<br/>Fix: “Write a 3-sentence answer.”</li>
            <li><span className="font-semibold">Overloading the Prompt</span><br/>Problem: “Write a blog post, make it funny, include stats, and keep it short.”<br/>Fix: “Write a 200-word funny blog post about AI trends with one statistic.”</li>
            <li><span className="font-semibold">Ignoring the Model’s Limits</span><br/>Problem: Asking for real-time data an AI can’t access.<br/>Fix: “Describe typical weather patterns in June for New York City.”</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Fix the Flop!</h3>
            <p>Below is a bad prompt. Rewrite it to avoid pitfalls:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">“Don’t write a boring essay about space, make it cool.”</div>
            <p className="text-sm">Share your fix in our forum and see who nails it!</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Learning Materials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Video Lectures</h3>
              <ul className="list-disc pl-6">
                <li>“Understanding Intent & Context” – 12-minute guide</li>
                <li>“Crafting Clear Prompts” – Fun demo</li>
                <li>“Avoiding Prompt Pitfalls” – 10-minute breakdown</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Reading Materials</h3>
              <ul className="list-disc pl-6">
                <li>“Prompt Engineering Best Practices” (DigitalOcean)</li>
                <li>“Tips for Designing Prompts” (Prompting Guide)</li>
                <li>“Prompt Engineering Mistakes to Avoid” (TechTarget)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Interactive Tools</h3>
              <ul className="list-disc pl-6">
                <li>Prompt Builder: Drag-and-drop tool for clear prompts</li>
                <li>Pitfall Checker: Flags vagueness or negative phrasing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Community Support</h3>
              <ul className="list-disc pl-6">
                <li>Join our Prompt Engineering Forum to share and get feedback</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Assessment</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Quiz</h3>
            <ul className="list-disc pl-6">
              <li>Identify user intent in sample prompts.</li>
              <li>Spot vague or unclear prompts.</li>
              <li>Choose the best fix for common pitfalls.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Assignment</h3>
            <ul className="list-disc pl-6">
              <li>Generate a 50-word motivational quote for students.</li>
              <li>List three benefits of recycling for a community newsletter.</li>
              <li>Write a 100-word bedtime story for kids about a magical tree.</li>
            </ul>
            <p className="text-sm mt-2">Submit to our forum for peer review.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Reflection</h3>
            <p>In 50 words, answer: “What’s one prompt-writing tip you’ll never forget?” Share to inspire others!</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Wrap-Up: You’re a Prompt-Crafting Rockstar!</h2>
          <p className="mb-2">Wow, you’ve mastered the basics of prompt creation! You now know how to pinpoint user intent, write clear and concise prompts, and avoid those pesky pitfalls. You’re ready to make AI work for you like never before. In Module 3, we’ll level up with advanced techniques like chain-of-thought prompting—get ready to take your skills to new heights!</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Sneak Peek at Module 3:</h3>
            <ul className="list-disc pl-6">
              <li>Discover templates and frameworks to streamline your prompts.</li>
              <li>Learn iterative testing to perfect your results.</li>
              <li>Explore cool techniques like few-shot prompting.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Keep the Vibe Going!</h3>
            <ul className="list-disc pl-6">
              <li>Share your assignment prompts in our forum and vote for the most creative.</li>
              <li>Watch the bonus video: “3 Hacks for Writing Killer Prompts.”</li>
              <li>Practice writing one new prompt today for a task you care about!</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
