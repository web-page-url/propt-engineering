import Hero from '../components/Hero';

export default function Learning4Page() {
  return (
    <>
      <Hero title="Module 4: Advanced Topics" subtitle="Welcome to the Prompt Engineering Frontier!" />
      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8 text-base text-gray-800 dark:text-gray-100">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Get ready to push the boundaries of what AI can do!</h2>
          <p className="mb-4">Module 4 takes you into the thrilling world of advanced prompt engineering, where you’ll craft complex prompts, combine text with images, and tackle ethical challenges like a pro. Think of yourself as an AI innovator, shaping the future with every prompt you write. Whether you’re dreaming up multimodal masterpieces or ensuring AI plays fair, this module will elevate your skills to new heights. Let’s explore the cutting edge together!</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Why this module is epic:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You’ll create prompts that handle complex, multi-step tasks with ease.</li>
              <li>You’ll combine text, images, and more to unlock AI’s full potential.</li>
              <li>You’ll learn to navigate ethical challenges, making you a responsible AI leader.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">What you’ll learn:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>How to design complex prompt structures for sophisticated tasks.</li>
              <li>How to craft multimodal prompts that blend text, images, and other data.</li>
              <li>How to address ethical considerations and mitigate biases in AI outputs.</li>
            </ul>
          </div>
          <p className="italic">Grab your innovator’s hat and let’s shape the future of AI!</p>
        </section>

        {/* Section 1: Complex Prompt Structures */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 1: Complex Prompt Structures</h2>
          <p className="mb-2 font-semibold">Mastering the Art of Sophisticated Prompts</p>
          <p className="mb-4">Complex prompt structures are like building a skyscraper—layered, strategic, and designed for big impact. These prompts tackle multi-step tasks or require the AI to combine multiple skills, such as analysis, creativity, and reasoning. You’ll use techniques like prompt chaining and meta-prompting to break down complex problems into manageable parts.</p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-4">
            <span className="font-semibold">Key Techniques:</span>
            <ul className="list-disc pl-6 mt-2">
              <li><span className="font-semibold">Prompt Chaining:</span> Break a task into sequential prompts, using the output of one as input for the next.<br/>
                <span className="text-sm">Example:<br/>Prompt 1: “List three key challenges in urban sustainability.”<br/>Prompt 2: “Based on these challenges [insert output], propose a 200-word plan to address one of them.”</span>
                <br/><span className="text-xs">Use Case: Planning, research, or multi-step problem-solving.</span>
              </li>
              <li className="mt-2"><span className="font-semibold">Meta-Prompting:</span> Write a prompt that instructs the AI to create or refine another prompt.<br/>
                <span className="text-sm">Example: “Generate a prompt to write a 100-word blog post on AI ethics for beginners, ensuring clarity and a friendly tone.”</span>
                <br/><span className="text-xs">Use Case: Automating prompt creation for efficiency.</span>
              </li>
              <li className="mt-2"><span className="font-semibold">Structured Outputs:</span> Request specific formats like tables, JSON, or outlines.<br/>
                <span className="text-sm">Example: “Create a table comparing three AI models, with columns for name, strengths, and weaknesses.”</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Real-World Application</h3>
            <p>A data analyst used prompt chaining to generate a report: first prompting for key data points, then for a summary, and finally for visualizations. The result? A polished report in half the time!</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Build a Complex Prompt!</h3>
            <ul className="list-disc pl-6">
              <li>A prompt to identify the product’s key features.</li>
              <li>A prompt to create a 100-word ad based on those features.</li>
            </ul>
            <p className="mt-2 text-sm">Share your chain in our forum and vote for the most creative approach!</p>
          </div>
          <div className="text-blue-700 dark:text-blue-300 font-semibold">Pro Tip: Break complex tasks into smaller steps to keep the AI focused and avoid overwhelming it.</div>
        </section>

        {/* Section 2: Multimodal Prompts */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 2: Multimodal Prompts</h2>
          <p className="mb-2 font-semibold">Combining Text, Images, and More</p>
          <p className="mb-4">Multimodal prompts are the future of AI interaction, blending text, images, and other data to create richer outputs. Imagine asking AI to describe an image, generate visuals from text, or combine both for a creative project. This section unlocks the power of multimodal AI models like those from Google Cloud or DeepLearning.AI.</p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-4">
            <span className="font-semibold">What Are Multimodal Prompts?</span>
            <ul className="list-disc pl-6 mt-2">
              <li>Definition: Prompts that combine multiple data types (e.g., text + image) to guide AI.</li>
              <li>Text-to-Image: “Generate an image of a futuristic city based on this description: [insert text].”</li>
              <li>Image-to-Text: “Describe the mood and key elements of this image: [insert image].”</li>
              <li>Combined: “Based on this image [insert image], write a 100-word story about its scene.”</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">How to Craft Multimodal Prompts</h3>
            <ul className="list-disc pl-6">
              <li>Be Specific: Clearly describe the role of each data type (e.g., “Use this image as inspiration”).</li>
              <li>Set Expectations: Specify the output format (e.g., text description, image generation).</li>
              <li>Test and Refine: Multimodal prompts often need tweaking to balance text and visual inputs.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mt-4">
              <span className="font-semibold">Example Prompt:</span> “Using this image of a serene forest [insert image], write a 150-word poem about tranquility, incorporating three visual elements from the image (e.g., trees, river, sunlight).”
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Real-World Application</h3>
            <p>A graphic designer used a multimodal prompt to generate a logo description from a mood board image, then fed that description into a text-to-image AI to create the final logo. The result? A stunning design in record time!</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Go Multimodal!</h3>
            <p>Write a multimodal prompt that combines text and an imaginary image (describe it briefly). Example: “Based on an image of a starry night sky, write a 50-word sci-fi story.”</p>
            <p className="text-sm mt-2">Share your prompt and imagined output in our forum. Who can create the most vivid scene?</p>
          </div>
          <div className="text-green-700 dark:text-green-300 font-semibold">Fun Fact: Multimodal AI models are revolutionizing industries, with 60% of creative agencies adopting them for content creation by 2025.</div>
        </section>

        {/* Section 3: Ethical Considerations and Bias Mitigation */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Section 3: Ethical Considerations and Bias Mitigation</h2>
          <p className="mb-2 font-semibold">Crafting Responsible Prompts</p>
          <p className="mb-4">With great power comes great responsibility! Prompt engineering isn’t just about getting results—it’s about ensuring those results are fair, inclusive, and ethical. AI can unintentionally amplify biases or produce harmful outputs if prompts aren’t carefully designed. This section equips you to create prompts that promote fairness and transparency.</p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 mb-4">
            <span className="font-semibold">Key Ethical Challenges:</span>
            <ul className="list-disc pl-6 mt-2">
              <li>Bias in Outputs: AI can reflect biases in its training data, like gender stereotypes or cultural assumptions.<br/>
                <span className="text-sm">Example: A prompt like “Describe a typical software engineer” might yield a male-dominated stereotype.<br/>Fix: “Describe a software engineer, ensuring diversity in gender, background, and skills.”</span>
              </li>
              <li className="mt-2">Harmful Content: Vague prompts can lead to inappropriate or offensive responses.<br/>
                <span className="text-sm">Example: “Write a story about a villain” might include violence unless specified otherwise.<br/>Fix: “Write a 100-word story about a villain who uses clever tricks, avoiding violence.”</span>
              </li>
              <li className="mt-2">Transparency: Users should know when content is AI-generated.<br/>
                <span className="text-sm">Example: Add “Generated by AI” to outputs for clarity.</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Strategies for Ethical Prompting</h3>
            <ul className="list-disc pl-6">
              <li>Neutral Language: Avoid assumptions (e.g., instead of “he” or “she,” use “they”).</li>
              <li>Explicit Constraints: Include instructions like “avoid stereotypes” or “use inclusive language.”</li>
              <li>Test for Bias: Run prompts multiple times to check for unintended patterns.</li>
              <li>Cultural Sensitivity: Consider global audiences in your prompts.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Real-World Application</h3>
            <p>A healthcare company used ethical prompts to generate patient education materials, specifying “use inclusive language and avoid medical jargon.” The result? Materials that were accessible to diverse patients, improving engagement by 20%.</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">Interactive Activity: Ethical Prompt Challenge!</h3>
            <p>Rewrite this biased prompt to be ethical and inclusive:</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 my-2">“Describe a typical CEO.”</div>
            <p className="text-sm">Share your revised prompt in our forum and discuss: How did you ensure fairness? Bonus: Test it in our AI sandbox and share the output!</p>
          </div>
          <div className="text-blue-700 dark:text-blue-300 font-semibold">Pro Tip: Always include an ethical “guardrail” in your prompts, like “use inclusive language” or “avoid harmful content.”</div>
        </section>

        {/* Learning Materials */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Learning Materials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Video Lectures</h3>
              <ul className="list-disc pl-6">
                <li>“Complex Prompt Structures” – 15-minute guide</li>
                <li>“Multimodal Magic” – 12-minute dive</li>
                <li>“Ethics in Prompt Engineering” – 10-minute exploration</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Reading Materials</h3>
              <ul className="list-disc pl-6">
                <li>“Advanced Prompt Engineering Techniques” (Mercity)</li>
                <li>“Designing Multimodal Prompts” (Google Cloud)</li>
                <li>“Ethical Considerations in Prompt Engineering” (Tutorialspoint)</li>
                <li>“Avoiding Bias in AI” (Prompt Engineering Institute)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Interactive Tools</h3>
              <ul className="list-disc pl-6">
                <li>Prompt Chainer: Build and test multi-step prompt chains in real-time.</li>
                <li>Multimodal Sandbox: Experiment with text and image prompts (simulated images for practice).</li>
                <li>Bias Checker: Paste your prompt to flag potential ethical issues.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-2">Community Support</h3>
              <ul className="list-disc pl-6">
                <li>Join our Prompt Engineering Forum to share your complex prompts, multimodal creations, and ethical strategies. Get feedback and inspire your peers!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Assessment</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Quizzes</h3>
            <ul className="list-disc pl-6">
              <li>Quiz 1: Complex Prompts (10 questions): Write and analyze prompt chains and structured outputs.</li>
              <li>Quiz 2: Multimodal Mastery (8 questions): Match multimodal scenarios to the best prompt structure.</li>
              <li>Quiz 3: Ethical Prompting (10 questions): Identify biases and rewrite prompts for fairness.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Assignment</h3>
            <ul className="list-disc pl-6">
              <li>A prompt chain to plan a sustainable city initiative (e.g., identify challenges, propose solutions).</li>
              <li>A multimodal prompt combining a text description and an imagined image (e.g., a futuristic car) to generate a 100-word ad.</li>
              <li>An ethical prompt to describe a “typical data scientist,” ensuring inclusivity and avoiding stereotypes.</li>
            </ul>
            <p className="text-sm mt-2">Submit your prompts and outputs to the forum for peer review.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold mb-2">Reflection</h3>
            <p>In 50 words, answer: “How will you use ethical prompting in your future projects?” Share in the forum to spark discussion!</p>
          </div>
        </section>

        {/* Wrap-Up */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2 text-indigo-700 dark:text-indigo-300">Wrap-Up: You’re an AI Innovator!</h2>
          <p className="mb-2">Congratulations—you’ve conquered the advanced world of prompt engineering! You can now craft complex prompt structures, create multimodal masterpieces, and ensure your prompts are ethical and inclusive. In Module 6, we’ll explore the latest trends and future directions in prompt engineering—get ready to stay ahead of the curve!</p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Sneak Peek at Module 6:</h3>
            <ul className="list-disc pl-6">
              <li>Discover the latest research and innovations in prompt engineering.</li>
              <li>Explore future applications in healthcare, finance, and more.</li>
              <li>Find resources to keep learning and growing.</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
            <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Keep the Momentum Going!</h3>
            <ul className="list-disc pl-6">
              <li>Share your assignment prompts and quiz scores in our forum—aim for the “Ethical Innovator” badge!</li>
              <li>Watch the bonus video: “The Future of Multimodal AI.”</li>
              <li>Try a multimodal prompt today for a personal project (e.g., describe a favorite photo)!</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
