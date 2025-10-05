"use client";

const Skills = () => {
  const technicalSkills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "Redux Toolkit", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "React Query", level: 80 },
    { name: "Material UI", level: 75 },
  ];

  const toolsAndPractices = [
    { name: "Vite", level: 85 },
    { name: "Webpack", level: 80 },
    { name: "Git/GitHub", level: 90 },
    { name: "ESLint/Prettier", level: 85 },
    { name: "Jest/Testing Library", level: 75 },
    { name: "Agile/Scrum", level: 80 },
    { name: "Code Reviews", level: 90 },
    { name: "Performance Optimization", level: 85 },
  ];

  const additionalSkills = [
    "Server Components",
    "Context API",
    "SWR",
    "Zustand",
    "Styled Components",
    "Responsive Design",
    "Accessibility (a11y)",
    "REST APIs",
    "GraphQL",
    "CI/CD",
    "Documentation",
    "Mentoring",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Frontend Engineering skills with a focus on React ecosystem and
            modern web development practices. Continuously learning and
            implementing best practices for scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Core Technologies
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-5 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">
                      {skill.name}
                    </span>
                    <span className="text-purple-600 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Tools & Practices
            </h3>
            <div className="space-y-6">
              {toolsAndPractices.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-5 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">
                      {skill.name}
                    </span>
                    <span className="text-purple-600 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
