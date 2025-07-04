"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sections = [
    "About",
    "CV / Resume",
    "Publications",
    "Projects",
    "Talks / Media",
    "Teaching",
    "Outreach",
    "Startups",
    "Essays",
    "Awards",
    "Contact"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-8 max-w-5xl mx-auto">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Quang Liêm Trần</h1>
          <p className="text-gray-600 dark:text-gray-400">AI Researcher | Math Olympiad Coach | Stanford '29 (Prospective)</p>
          <p className="text-sm mt-1">📧 youremail@example.com</p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 md:mt-0 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 py-2 border-b border-gray-200 dark:border-gray-700 mb-6">
        <ul className="flex flex-wrap gap-4 text-sm font-medium overflow-x-auto">
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase().replace(/ /g, "-")}`} className="hover:underline">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="space-y-10">
        <Section id="about" title="1. About">
          <p>
            I’m a student researcher and entrepreneur passionate about building interpretable medical AI systems and solving hard mathematical problems. Currently working on cancer diagnostics AI and metacognitive models. Founder of Prime Force — a company bridging medicine and machine intelligence.
          </p>
        </Section>

        <Section id="cv-resume" title="2. CV / Resume">
          <p>You can find my full resume <a href="/cv.pdf" className="underline">here</a>, including education, research, teaching, and awards.</p>
        </Section>

        <Section id="publications" title="3. Publications">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>XLumi:</strong> ICLR 2025 — Real-Time Explainable AI for Hematology (First Author)</li>
            <li><strong>Metacognition and Identity in AI Age:</strong> ACM FAccT 2025 (Under Review)</li>
            <li><strong>Ramanujan Graphs:</strong> arXiv 2025 — Prime-Constrained Substructures</li>
          </ul>
        </Section>

        <Section id="projects" title="4. Projects">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Prime Force:</strong> AI system for medical diagnostics and robotic doctors.</li>
            <li><strong>πPI Olympiad:</strong> Weekly Math Olympiad challenge series.</li>
          </ul>
        </Section>

        <Section id="talks-media" title="5. Talks / Media">
          <ul className="list-disc pl-5 space-y-1">
            <li>Speaker at AI & Ethics Vietnam 2025</li>
            <li>Featured in Vietnam Youth Magazine</li>
          </ul>
        </Section>

        <Section id="teaching" title="6. Teaching">
          <ul className="list-disc pl-5 space-y-1">
            <li>Founder of The LAB – 500+ students</li>
            <li>Coach for city-level math team</li>
          </ul>
        </Section>

        <Section id="outreach" title="7. Outreach">
          <ul className="list-disc pl-5 space-y-1">
            <li>Built educational platform for underserved regions</li>
            <li>Workshops on AI & digital literacy</li>
          </ul>
        </Section>

        <Section id="startups" title="8. Startups">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Prime Force:</strong> CEO & Founder — Piloted with 2 clinics</li>
            <li>AI wrapper for IMO math tutoring</li>
          </ul>
        </Section>

        <Section id="essays" title="9. Essays">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>The Train Ride:</strong> Reflection on legacy and ambition</li>
            <li><strong>Between Practicality and Humanity:</strong> AI ethics essay</li>
          </ul>
        </Section>

        <Section id="awards" title="10. Awards">
          <ul className="list-disc pl-5 space-y-1">
            <li>Perfect Score AMC 12</li>
            <li>Top Paper Award, Hematology Institute</li>
            <li>Youngest Muay Thai Champion (KO record)</li>
          </ul>
        </Section>

        <Section id="contact" title="11. Contact">
          <p>Email: <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="underline">yourlinkedin</a></p>
          <p>GitHub: <a href="https://github.com/yourgithub" className="underline">yourgithub</a></p>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
}
