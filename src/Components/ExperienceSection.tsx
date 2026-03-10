import { motion } from "motion/react";
import { useState } from "react";

function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex justify-center items-center bg-gradient-to-t from-[#2C3E50] to-[#1B2631] py-[8vh]">
      <div className="w-[90vw] max-w-4xl flex flex-col gap-8 items-center">
        <h2 className="aboutme-header">EXPERIENCE</h2>

        {/* Website Executive Lead */}
        <div className="flex gap-4 w-full justify-center">
          <div className="flex flex-col items-center pt-3">
            <div className="w-[3vh] h-[3vh] rounded-full bg-[#A5C8D6] border border-[#FDF4F8]" />
            <div className="flex-1 w-[5px] bg-[#2C3E50]" />
          </div>
          <motion.article
            className="flex flex-col gap-2 rounded-xl bg-[#0b1216]/70 border border-[#2C3E50] p-[3vh] shadow-md flex-1 max-w-[65vw] sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              scale: hoveredIndex === null ? 1 : hoveredIndex === 0 ? 1.05 : 0.95,
              x: hoveredIndex === null ? 0 : hoveredIndex === 0 ? 10 : -10,
              y: hoveredIndex === null ? 0 : hoveredIndex === 0 ? 10 : -10,
              opacity: hoveredIndex === null ? 1 : hoveredIndex === 0 ? 1 : 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setHoveredIndex(0)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 ">
              <h3 className="font-semibold text-[#A5C8D6] text-[1.1rem]">
                Website Executive Lead
              </h3>
              <p className="text-sm text-[#A5C8D6] opacity-80">
                Jan 2026 – Present · McMaster AI Society · Hamilton, ON
              </p>
            </div>
            <ul className="list-disc list-inside text-sm text-[#FDF4F8] space-y-2">
              <li>
                Led a 5‑developer team to build and deploy a website using React and APIs for dynamically loaded content.
              </li>
              <li>
                Increased user base by 25% and conversion rate by 10% through performance optimization and UX improvements.
              </li>
              <li>
                Owned the CI/CD pipeline via Vercel, streamlining deployments and cutting release cycles by 20%.
              </li>
            </ul>
          </motion.article>
        </div>

        {/* Software Developer */}
        <div className="flex gap-4 w-full justify-center">
          <div className="flex flex-col items-center pt-3">
            <div className="w-[3vh] h-[3vh] rounded-full bg-[#A5C8D6] border border-[#FDF4F8]" />
            <div className="flex-1 w-[5px] bg-[#2C3E50]" />
          </div>
          <motion.article
            className="flex flex-col gap-2 rounded-xl bg-[#0b1216]/70 border border-[#2C3E50] p-[3vh] shadow-md flex-1 max-w-[65vw] sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              scale: hoveredIndex === null ? 1 : hoveredIndex === 1 ? 1.05 : 0.95,
              x: hoveredIndex === null ? 0 : hoveredIndex === 1 ? 10 : -10,
              y: hoveredIndex === null ? 0 : hoveredIndex === 1 ? 10 : -10,
              opacity: hoveredIndex === null ? 1 : hoveredIndex === 1 ? 1 : 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setHoveredIndex(1)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 ">
              <h3 className="font-semibold text-[#A5C8D6] text-[1.1rem]">
                Software Developer
              </h3>
              <p className="text-sm text-[#A5C8D6] opacity-80">
                Dec 2025 – Present · Sunday Badminton Group Club · Milton, ON
              </p>
            </div>
            <ul className="list-disc list-inside text-sm text-[#FDF4F8] space-y-2">
              <li>
                Led a stakeholder‑facing project to develop a full‑stack web application, owning front‑end design and UX while iterating in agile sprints toward a scalable product.
              </li>
              <li>
                Delivered a responsive, cross‑platform web experience serving 100+ users per day.
              </li>
              <li>
                Deployed applications using Docker and Kubernetes, achieving 99% uptime and streamlined CI/CD workflows.
              </li>
            </ul>
          </motion.article>
        </div>

        {/* Math Instructor */}
        <div className="flex gap-4 w-full justify-center">
          <div className="flex flex-col items-center pt-3">
            <div className="w-[3vh] h-[3vh] rounded-full bg-[#A5C8D6] border border-[#FDF4F8]" />
            {/* Last item: no line below */}
          </div>
          <motion.article
            className="flex flex-col gap-2 rounded-xl bg-[#0b1216]/70 border border-[#2C3E50] p-[3vh] shadow-md flex-1 max-w-[65vw] sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              scale: hoveredIndex === null ? 1 : hoveredIndex === 2 ? 1.05 : 0.95,
              x: hoveredIndex === null ? 0 : hoveredIndex === 2 ? 10 : -10,
              y: hoveredIndex === null ? 0 : hoveredIndex === 2 ? 10 : -10,
              opacity: hoveredIndex === null ? 1 : hoveredIndex === 2 ? 1 : 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setHoveredIndex(2)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 ">
              <h3 className="font-semibold text-[#A5C8D6] text-[1.1rem]">
                Math Instructor
              </h3>
              <p className="text-sm text-[#A5C8D6] opacity-80">
                Jun 2024 – Feb 2025 · Mathnasium · Milton, ON
              </p>
            </div>
            <ul className="list-disc list-inside text-sm text-[#FDF4F8] space-y-2 ">
              <li>
                Mentored over 20 students per day in mathematics topics including calculus, physics, and algebra.
              </li>
              <li>
                Helped students strengthen logical reasoning and problem‑solving, improving grades by up to +10%.
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

