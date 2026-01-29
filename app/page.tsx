import Image from "next/image";
import { Section } from "@/components/Section";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { SkillPill } from "@/components/SkillPill";
import { Certification } from "@/components/Certification";
import { SocialLink } from "@/components/SocialLink";
import { Divider } from "@/components/Divider";
import { Project } from "@/components/Project";
import { CVNavbar } from "@/components/CVNavbar";
import profileImage from "@/assets/DSC0881.jpg";
import chocoLogo from "@/assets/choco2.png";
import enactusLogo from "@/assets/enacrus.png";
import nfactorialLogo from "@/assets/nfact.png";
import nisLogo from "@/assets/nis.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background min-h-screen pb-32">
      <div className="grid-frame w-full max-w-[960px] mx-auto">
        <div className="relative z-10 flex flex-col items-center">
          <Divider />

          {/* Intro */}
          <Section className="pt-24 pb-8" gap="gap-6">
            <div className="flex gap-6 items-center">
              <div className="relative w-[90px] h-[100px] shrink-0 rounded-[10px] overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Yntyqbay Dinmukhammed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <h1 className="text-[28px] font-semibold tracking-[-0.05em] leading-[1.2em] text-foreground">
                  Yntyqbay Dinmukhammed
                </h1>
                <h2 className="text-[20px] font-normal tracking-[-0.02em] leading-[1.2em] text-secondary">
                  Junior+ Software Engineer · AI Full-Stack Developer
                </h2>
              </div>
            </div>
          </Section>

          <Divider />

          {/* About */}
          <Section id="about" title="About" gap="gap-4">
            <p className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary">
              Junior+ Software Engineer and AI-focused Full-Stack Developer with hands-on experience building RAG-based AI systems, leading multi-agent orchestration and analytics automation, and deploying cloud-native, production-ready apps. Proven ability to deliver measurable impact across startups and enterprise environments, serving 1000+ users, leading cross-functional teams, and shipping end-to-end AI products.
            </p>
          </Section>

          <Divider />

          {/* Projects */}
          <Section id="projects" title="Projects" gap="gap-8">
            <Project
              index={0}
              title="OpenLab"
              href="https://openlab-five.vercel.app/"
              description="A free digital incubator program for early-stage founders and innovators worldwide, offering 1:1 mentoring in a competitive, growth-driven environment."
            />
            <Project
              index={1}
              title="Lirix.ai"
              href="https://lirix-front.vercel.app/"
              description="No-code platform for building RAG-based AI chatbots. Stack: Next.js, FastAPI, PostgreSQL, LangGraph, Qdrant, Supabase, Docker, Vercel."
            />
            <Project
              index={2}
              title="QuokkaAI"
              href="https://quokkaai.site"
              description="AI-agent-based analytics platform generating automated charts, insights, and reports for 1000+ users and B2B clients."
            />
            <Project
              index={3}
              title="Axel"
              href="https://www.tryaxel.app"
              description="Node-based workflow creation and AI video generation platform for creators. Orchestrated embedding models and state-handling agents to create consistent characters and videos."
            />
          </Section>

          <Divider />

          {/* Experience */}
          <Section id="experience" title="Experience" gap="gap-8">
            <ExperienceEducation
              logo={chocoLogo}
              positions={[
                {
                  title: "Junior+ Software Engineer",
                  company: "CHOCO HOLDING",
                  date: "Aug 2025 – Present",
                  description: (
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Leading a delivery team of 1 backend engineer and 2 DevOps engineers.</li>
                      <li>Designing and developing a CRM-like BI analytics platform as a new internal product.</li>
                      <li>Led Freedom AI Analysis, a multi-agent AI system automating insights and report generation.</li>
                      <li>Serving 1000+ users and reducing manual analytics time by 70%.</li>
                    </ul>
                  ),
                },
              ]}
            />
            <ExperienceEducation
              logo={enactusLogo}
              positions={[
                {
                  title: "Team Lead",
                  company: "ENACTUS NIS TARAZ",
                  date: "2024 – 2025",
                  description: (
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Led student engineering teams building technology-driven social impact startups.</li>
                      <li>Developed SmartKoz, a computer-vision bullying detection system.</li>
                      <li>Integrated into 2 schools with 0.95 detection accuracy.</li>
                    </ul>
                  ),
                },
              ]}
            />
          </Section>

          <Divider />

          {/* Education */}
          <Section title="Education" gap="gap-8">
            <ExperienceEducation
              logo={nfactorialLogo}
              positions={[
                {
                  title: "Full-Stack & AI Engineer",
                  company: "NFACTORIAL INCUBATOR",
                  date: "Jun 2025 – Aug 2025",
                  description: (
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Focus: Applied AI engineering, full-stack development, cloud infrastructure.</li>
                      <li>Capstone: Built QuokkaAI, an AI-driven data analytics automation platform.</li>
                      <li>Impact: 1000+ users, 2 B2B clients, and $1000+ revenue from production usage.</li>
                    </ul>
                  ),
                },
              ]}
            />
            <ExperienceEducation
              logo={nisLogo}
              positions={[
                {
                  title: "High School Student",
                  company: "NAZARBAYEV INTELLECTUAL SCHOOL OF TARAZ",
                  date: "2021 – 2027",
                  description: (
                    <ul className="list-disc pl-4 space-y-2">
                      <li>GPA: 5.0 / 5.0</li>
                      <li>Honors: Computer Science Olympiad Gold; Infomatrix Asia 2025 Gold; 1st place in 15+ hackathons.</li>
                    </ul>
                  ),
                },
              ]}
            />
          </Section>

          <Divider />

          {/* Certifications */}
          <Section title="Certifications" gap="gap-8">
            <Certification
              logo={nfactorialLogo}
              title="Full-Stack & AI Engineer"
              provider="NFACTORIAL INCUBATOR"
              date="2025"
              href="https://nfactorial.school/"
              description={
                <p>Certification for applied AI engineering, full-stack development, and cloud infrastructure through a production capstone.</p>
              }
            />
          </Section>

          <Divider />

          {/* Skills / Stack */}
          <Section id="skills" title="Skills / Stack" gap="gap-6">
            <div className="flex flex-wrap gap-2.5">
              {[
                "Python",
                "TypeScript",
                "JavaScript",
                "Go",
                "RAG",
                "LLM Agents",
                "LangChain",
                "LangGraph",
                "React",
                "Next.js",
                "Vue",
                "Nuxt",
                "FastAPI",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "SQLite",
                "Qdrant",
                "Docker",
                "AWS",
                "GCP",
                "Linux",
                "Nginx",
                "CI/CD",
                "OAuth",
                "JWT",
              ].map((skill) => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </Section>

          <Divider />

          {/* Contact */}
          <Section id="contact" title="Contact" gap="gap-8">
            <div className="w-full flex flex-col gap-4">
              <SocialLink label="Email" value="dinmuhamedyntykbaj@gmail.com" href="mailto:dinmuhamedyntykbaj@gmail.com" />
              <SocialLink label="Phone" value="+7 747 399 42 93" href="tel:+77473994293" />
              <SocialLink label="LinkedIn" value="linkedin.com" href="https://linkedin.com" />
              <SocialLink label="GitHub" value="github.com" href="https://github.com" />
            </div>
          </Section>

          <Divider />
        </div>
      </div>
      
      <CVNavbar />
    </main>
  );
}