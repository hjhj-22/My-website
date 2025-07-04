import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, FileText, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Quang Liêm Trần</h1>
        <p className="text-muted-foreground text-lg">
          AI Researcher | Math Olympiad Coach | Stanford '29 (Prospective)
        </p>
        <div className="flex items-center space-x-4 text-sm">
          <a href="mailto:youremail@example.com" className="flex items-center hover:underline">
            <Mail className="w-4 h-4 mr-1" /> youremail@example.com
          </a>
          <a href="/cv.pdf" target="_blank" className="flex items-center hover:underline">
            <FileText className="w-4 h-4 mr-1" /> CV
          </a>
          <a href="https://github.com/yourgithub" target="_blank" className="flex items-center hover:underline">
            <Github className="w-4 h-4 mr-1" /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="flex items-center hover:underline">
            <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
          </a>
        </div>
      </div>

      <Separator />

      {/* Sections */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">1. About</h2>
        <p>
          I’m a student researcher and entrepreneur passionate about building interpretable medical AI systems and solving hard mathematical problems. Currently working on cancer diagnostics AI and metacognitive models. Founder of Prime Force — a company bridging medicine and machine intelligence.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. CV / Resume</h2>
        <p>You can find my full resume <a href="/cv.pdf" className="underline">here</a>, including education, research, teaching, and awards.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Publications / Research</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>XLumi: Real-Time Explainable AI for Hematology</strong>, ICLR 2025 (First Author)</li>
          <li><strong>Metacognition and Identity in AI Age</strong>, ACM FAccT 2025 (Under Review)</li>
          <li><strong>Ramanujan Graphs with Prime-Constrained Substructures</strong>, arXiv 2025</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Projects</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Prime Force:</strong> AI system for medical diagnostics and robotic doctors.</li>
          <li><strong>πPI Olympiad:</strong> Weekly Math Olympiad challenge series for national teams.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Talks / Media</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Speaker at AI & Ethics Vietnam 2025: "Human-AI Symbiosis in Medical Decisions"</li>
          <li>Featured in Vietnam Youth Magazine, Jan 2025</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Teaching & Mentorship</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Founder of The LAB — free math outreach for rural Vietnam (500+ students)</li>
          <li>Coach for city-level math team, 3 national qualifiers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Outreach / Community</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Built educational platform for underserved students in Mekong Delta</li>
          <li>Organized workshops on AI awareness and digital literacy in rural schools</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Startups / Entrepreneurship</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Prime Force:</strong> CEO & Founder — AI for diagnostics, currently piloted with 2 clinics</li>
          <li>Developed AI wrapper platform for IMO math tutoring (10k+ users projected)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Essays / Writing</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>The Train Ride:</strong> Reflection on loss, legacy, and ambition (Common App draft)</li>
          <li><strong>Between Practicality and Humanity:</strong> Stanford supplement on AI ethics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">10. Awards & Honors</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Perfect Score AMC 12</li>
          <li>Top Paper Award, Vietnamese Institute of Hematology</li>
          <li>Youngest Muay Thai Champion (15 y/o), Thailand National KO Record</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">11. Contact / Connect</h2>
        <p>
          I’m always open to collaboration, ideas, and mentorship connections. Feel free to reach out!
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Email: <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="underline">linkedin.com/in/yourlinkedin</a></li>
          <li>GitHub: <a href="https://github.com/yourgithub" className="underline">github.com/yourgithub</a></li>
        </ul>
      </section>
    </div>
  );
}
