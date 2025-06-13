import Hero from '../components/Hero';

export default function Learning2Page() {
  return (
    <>
      <Hero title="Module 2: Techniques and Strategies" subtitle="Welcome to the Prompt Engineering Power-Up!" />
      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8 text-base text-gray-800 dark:text-gray-100">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">You’re no longer just crafting prompts—you’re about to master them!</h2>
          <p className="mb-4">In Module 2, we’re diving into the exciting world of advanced techniques and strategies that will take your prompt engineering skills to the next level. From using templates to streamline your work to testing prompts like a scientist, you’ll learn how to make AI deliver precise, creative, and reliable results. Plus, we’ll explore cutting-edge methods like chain-of-thought prompting that make AI think step-by-step. Buckle up for a thrilling ride filled with practical tips and interactive challenges!</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Why this module rocks:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You’ll save time with reusable prompt templates.</li>
              <li>You’ll discover how to tweak prompts for perfect results.</li>
              <li>You’ll master advanced techniques to tackle even the trickiest tasks.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">What you’ll learn:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>How to use templates and frameworks for consistent, high-quality prompts.</li>
              <li>The art of iterative testing and refinement to optimize AI outputs.</li>
              <li>Advanced strategies like chain-of-thought, few-shot, and zero-shot prompting.</li>
            </ul>
          </div>
          <p className="italic">Let’s unleash your inner prompt engineering superhero!</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 1: Using Templates and Frameworks</h2>
          <p className="mb-2 font-semibold">Why Templates Are Your Secret Weapon</p>
          <p className="mb-4">Templates are like cheat codes for prompt engineering—they provide a reusable structure that saves time and ensures consistency. Instead of starting from scratch every time, you can plug in specific details into a proven framework. Templates are especially handy for repetitive tasks like writing emails, generating reports, or creating social media posts.</p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-4">
            <span className="font-semibold">Example Template:</span> Task: Generate a product description.<br/>
            Template: “Write a [word count]-word description for [product/service] targeting [audience], emphasizing [key feature/benefit] in a [tone] tone.”<br/>
            Filled Prompt: “Write a 100-word description for a smartwatch targeting fitness enthusiasts, emphasizing battery life in a motivational tone.”
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Benefits of Templates:</h3>
            <ul className="list-disc pl-6">
              <li>Speed: Create prompts faster.</li>
              <li>Consistency: Ensure uniform outputs across tasks.</li>
              <li>Scalability: Perfect for teams or large projects.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Popular Frameworks</h3>
            <ul className="list-disc pl-6">
              <li><span className="font-semibold">STAR Framework:</span> Situation, Task, Action, Result—great for problem-solving prompts.<br/>Example: “Describe a situation where a small business needs a marketing strategy (Situation). Suggest a social media campaign (Task). Outline the steps to implement it (Action). Predict the potential outcomes (Result).”</li>
              <li><span className="font-semibold">SPARK Framework:</span> Specific, Purposeful, Actionable, Relevant, Knowledgeable—ensures prompts are clear and goal-driven.<br/>Example: “Write a 200-word blog post (Specific) to educate new coders (Purposeful) on Python basics (Relevant), including a code example (Actionable) based on current best practices (Knowledgeable).”</li>
            </ul>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Build Your Own Template!</h3>
            <p>Create a template for one of these tasks:</p>
            <ul className="list-disc pl-6">
              <li>Writing a customer service email.</li>
              <li>Generating a creative story idea.</li>
              <li>Summarizing a news article.</li>
            </ul>
            <p className="mt-2 text-sm">Fill it in with details and share it in our forum. Who’s got the most versatile template?</p>
          </div>
          <div className="text-blue-700 dark:text-blue-300 font-semibold">Pro Tip: Save your templates in a digital notebook for quick access during projects!</div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 2: Iterative Testing and Refinement</h2>
          <p className="mb-2 font-semibold">The Science of Perfect Prompts</p>
          <p className="mb-4">Great prompts aren’t born—they’re made! Iterative testing means trying a prompt, checking the AI’s output, and tweaking it until it’s just right. Think of it like tuning a guitar: small adjustments lead to harmony.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Write a Prompt: Start with a clear, specific prompt.</li>
            <li>Test It: Run it through the AI and review the output.</li>
            <li>Analyze: Is the output accurate, relevant, and complete? If not, why?</li>
            <li>Refine: Adjust the prompt (e.g., add context, clarify tone, or simplify).</li>
            <li>Repeat: Test again until the output nails your goal.</li>
          </ul>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-4">
            <span className="font-semibold">Example:</span><br/>
            Initial Prompt: “Write about renewable energy.”<br/>
            Output Issue: Too broad, includes wind, solar, and more in a jumbled way.<br/>
            Refined Prompt: “Write a 150-word article on solar energy benefits for homeowners, in a friendly tone.”<br/>
            Result: A focused, engaging article.
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Tools to Help</h3>
            <ul className="list-disc pl-6">
              <li>Prompt Logs: Keep a record of your prompts and outputs to track improvements.</li>
              <li>A/B Testing: Try two versions of a prompt to see which works better.</li>
              <li>AI Feedback Tools: Use platforms like Anthropic’s Prompt Generator to analyze prompt effectiveness.</li>
            </ul>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Tweak It!</h3>
            <p>Take this prompt and refine it based on the output issues:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">Prompt: “Explain machine learning.”<br/>Issue: Output is too technical for beginners.</div>
            <p className="text-sm">Share your refined prompt in our forum and compare results!</p>
          </div>
          <div className="text-green-700 dark:text-green-300 font-semibold">Fun Fact: Iterative testing can boost output quality by up to 40%!</div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 3: Advanced Techniques</h2>
          <p className="mb-4">Now for the exciting stuff—advanced techniques that make AI think smarter and deliver better results. These methods are like giving the AI a roadmap to success.</p>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">1. Chain-of-Thought (CoT) Prompting</h3>
            <p>Encourage the AI to reason step-by-step, improving accuracy for complex tasks like math or decision-making.</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">Example Prompt: “Solve this math problem: 2x + 5 = 15. Show each step clearly.”<br/>Output: The AI breaks it down: “Subtract 5 from both sides: 2x = 10. Divide by 2: x = 5.”</div>
            <p className="text-sm">When to Use: Problem-solving, analysis, or tasks requiring logic.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">2. Few-Shot Prompting</h3>
            <p>Provide a few examples in the prompt to guide the AI’s response style or format.</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">Example Prompt: “Write a product review like these: <br/>Ex 1: ‘This blender is a game-changer! Blends smoothies in seconds.’ <br/>Ex 2: ‘Love the sleek design, but it’s a bit noisy.’<br/>Write a 50-word review for a wireless mouse.”</div>
            <p className="text-sm">When to Use: When you want consistent formatting or tone.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">3. Zero-Shot Prompting</h3>
            <p>Rely on the AI’s pre-trained knowledge without examples, ideal for straightforward tasks.</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">Example Prompt: “Translate ‘Hello, world!’ into Spanish.”<br/>Output: “¡Hola, mundo!”</div>
            <p className="text-sm">When to Use: Simple tasks where the AI doesn’t need guidance.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">4. Prompt Chaining</h3>
            <p>Break complex tasks into multiple prompts, feeding the output of one into the next.</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">Example:<br/>Prompt 1: “List three key features of electric cars.”<br/>Prompt 2: “Write a 100-word ad based on these features: [insert output from Prompt 1].”</div>
            <p className="text-sm">When to Use: Multi-step tasks like planning or content creation.</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Try an Advanced Technique!</h3>
            <p>Pick one technique (CoT, few-shot, zero-shot, or chaining) and write a prompt for this task:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">Generate a 100-word travel itinerary for a day in Paris.</div>
            <p className="text-sm">Share your prompt and the AI’s output in our forum. Which technique worked best?</p>
          </div>
          <div className="text-blue-700 dark:text-blue-300 font-semibold">Pro Tip: Mix and match techniques for complex tasks. For example, use few-shot to set the tone and CoT for detailed reasoning.</div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Learning Materials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Video Lectures</h3>
              <ul className="list-disc pl-6">
                <li>“Templates & Frameworks” – 15-minute guide</li>
                <li>“Iterative Testing 101” – Fun demo</li>
                <li>“Advanced Techniques Unleashed” – 12-minute deep dive into CoT, few-shot, and more.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Reading Materials</h3>
              <ul className="list-disc pl-6">
                <li>“Prompt Engineering Techniques” (Prompting Guide)</li>
                <li>“Advanced Prompt Engineering” (Mercity)</li>
                <li>“Optimizing Prompts with Iteration” (SaaSGuru)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Interactive Tools</h3>
              <ul className="list-disc pl-6">
                <li>Template Creator: Build and save custom prompt templates.</li>
                <li>Prompt Tester: Run A/B tests on prompts and compare outputs.</li>
                <li>Technique Sandbox: Experiment with CoT, few-shot, and zero-shot prompts in real-time.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Community Support</h3>
              <ul className="list-disc pl-6">
                <li>Join our Prompt Engineering Forum to share your templates, refinements, and advanced prompts. Get feedback and inspire others!</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Assessment</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Quiz</h3>
            <ul className="list-disc pl-6">
              <li>Identify the best template for a given task.</li>
              <li>Spot when to use CoT vs. few-shot prompting.</li>
              <li>Evaluate a prompt’s need for iterative refinement.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Assignment</h3>
            <ul className="list-disc pl-6">
              <li>Write a 100-word blog post intro on AI trends, using a SPARK framework.</li>
              <li>Solve a simple math problem (e.g., 3x - 7 = 14) with chain-of-thought.</li>
              <li>Generate a tweet about a new app, using few-shot prompting with two examples.</li>
            </ul>
            <p className="text-sm mt-2">Submit to our forum for peer review.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Reflection</h3>
            <p>In 50 words, answer: “Which technique are you most excited to use, and why?” Share in the forum to spark discussion!</p>
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Wrap-Up: You’re a Prompt Engineering Pro!</h2>
          <p className="mb-2">Congrats—you’ve unlocked the secrets of advanced prompt engineering! You can now use templates to work smarter, refine prompts like a scientist, and wield techniques like chain-of-thought to tackle any task. In Module 4, we’ll get hands-on with practical exercises to put your skills to the test. Get ready to shine!</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Sneak Peek at Module 4:</h3>
            <ul className="list-disc pl-6">
              <li>Practice crafting prompts for real-world scenarios.</li>
              <li>Analyze case studies of successful prompt engineering.</li>
              <li>Test your skills with interactive quizzes.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Keep the Momentum Going!</h3>
            <ul className="list-disc pl-6">
              <li>Share your assignment prompts in our forum and vote for the most creative.</li>
              <li>Watch the bonus video: “5 Advanced Prompt Hacks You’ll Wish You Knew Sooner.”</li>
              <li>Try one advanced technique today for a personal project!</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
