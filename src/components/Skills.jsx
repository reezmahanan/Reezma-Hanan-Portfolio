export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-hero-header text-center fade-in">
          <div className="section-pill-wrap">
            <span className="section-pill-badge">
              <i className="fas fa-tools"></i>
              <span>Skills</span>
            </span>
          </div>

          <h2 className="section-hero-title">
            Skills I<br />
            <span className="section-hero-accent">BUILD WITH.</span>
          </h2>

          <p className="section-hero-subtitle">
            A growing toolkit of technologies I use to build solutions, solve problems, and keep learning.
          </p>
        </div>

        <div className="skills-layout fade-in">
          {/* Skills Panel Grid with Real SkillIcons */}
          <div className="skills-categories-grid">
            {/* Languages */}
            <div className="skills-category-card card">
              <h4>Programming Languages</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="Java">
                  <img src="https://skillicons.dev/icons?i=java" alt="Java" />
                  <span>Java</span>
                </div>
                <div className="skill-icon-item" title="Python">
                  <img src="https://skillicons.dev/icons?i=py" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-icon-item" title="JavaScript">
                  <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-icon-item" title="TypeScript">
                  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
                  <span>TypeScript</span>
                </div>
                <div className="skill-icon-item" title="PHP">
                  <img src="https://skillicons.dev/icons?i=php" alt="PHP" />
                  <span>PHP</span>
                </div>
                <div className="skill-icon-item" title="C">
                  <img src="https://skillicons.dev/icons?i=c" alt="C" />
                  <span>C</span>
                </div>
              </div>
            </div>

            {/* Machine Learning & Data Science */}
            <div className="skills-category-card card">
              <h4>Machine Learning &amp; Data Science</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="Python">
                  <img src="https://skillicons.dev/icons?i=py" alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-icon-item" title="Scikit-Learn">
                  <img src="https://skillicons.dev/icons?i=sklearn" alt="Scikit-Learn" />
                  <span>Scikit-Learn</span>
                </div>
                <div className="skill-icon-item" title="Pandas">
                  <img src="/screenshots/pandas.svg" alt="Pandas" />
                  <span>Pandas</span>
                </div>
                <div className="skill-icon-item" title="NumPy">
                  <img src="/screenshots/numpy.svg" alt="NumPy" />
                  <span>NumPy</span>
                </div>
                <div className="skill-icon-item" title="LightGBM">
                  <img src="/screenshots/lightgbm.svg" alt="LightGBM" />
                  <span>LightGBM</span>
                </div>
              </div>
            </div>

            {/* Frameworks & Runtimes */}
            <div className="skills-category-card card">
              <h4>Frameworks &amp; Runtimes</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="Spring Boot">
                  <img src="https://skillicons.dev/icons?i=spring" alt="Spring Boot" />
                  <span>Spring Boot</span>
                </div>
                <div className="skill-icon-item" title="React">
                  <img src="https://skillicons.dev/icons?i=react" alt="React" />
                  <span>React</span>
                </div>
                <div className="skill-icon-item" title="Node.js">
                  <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
                  <span>Node.js</span>
                </div>
                <div className="skill-icon-item" title="Express.js">
                  <img src="https://skillicons.dev/icons?i=express" alt="Express.js" />
                  <span>Express</span>
                </div>
                <div className="skill-icon-item" title="Laravel">
                  <img src="https://skillicons.dev/icons?i=laravel" alt="Laravel" />
                  <span>Laravel</span>
                </div>
              </div>
            </div>

            {/* Databases & Persistence */}
            <div className="skills-category-card card">
              <h4>Databases &amp; Persistence</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="MySQL">
                  <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
                  <span>MySQL</span>
                </div>
                <div className="skill-icon-item" title="MongoDB">
                  <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            {/* Frontend & Styling */}
            <div className="skills-category-card card">
              <h4>Frontend &amp; Styling</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="HTML5">
                  <img src="https://skillicons.dev/icons?i=html" alt="HTML5" />
                  <span>HTML5</span>
                </div>
                <div className="skill-icon-item" title="CSS3">
                  <img src="https://skillicons.dev/icons?i=css" alt="CSS3" />
                  <span>CSS3</span>
                </div>
                <div className="skill-icon-item" title="Tailwind CSS">
                  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
                  <span>Tailwind</span>
                </div>
                <div className="skill-icon-item" title="Bootstrap">
                  <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            {/* Cloud, DevOps & Systems */}
            <div className="skills-category-card card">
              <h4>Cloud, DevOps &amp; Systems</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="AWS">
                  <img src="https://skillicons.dev/icons?i=aws" alt="AWS" />
                  <span>AWS</span>
                </div>
                <div className="skill-icon-item" title="Docker">
                  <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
                  <span>Docker</span>
                </div>
                <div className="skill-icon-item" title="Linux">
                  <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
                  <span>Linux</span>
                </div>
              </div>
            </div>

            {/* Developer Tools */}
            <div className="skills-category-card card">
              <h4>Developer Tools &amp; Testing</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="Git">
                  <img src="https://skillicons.dev/icons?i=git" alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skill-icon-item" title="GitHub">
                  <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                  <span>GitHub</span>
                </div>
                <div className="skill-icon-item" title="VS Code">
                  <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" />
                  <span>VS Code</span>
                </div>
                <div className="skill-icon-item" title="IntelliJ IDEA">
                  <img src="https://skillicons.dev/icons?i=idea" alt="IntelliJ IDEA" />
                  <span>IntelliJ</span>
                </div>
                <div className="skill-icon-item" title="Postman">
                  <img src="https://skillicons.dev/icons?i=postman" alt="Postman" />
                  <span>Postman</span>
                </div>
                <div className="skill-icon-item" title="Selenium">
                  <img src="/screenshots/selenium.svg" alt="Selenium" />
                  <span>Selenium</span>
                </div>
                <div className="skill-icon-item" title="TestNG">
                  <img src="/screenshots/testng.png" alt="TestNG" />
                  <span>TestNG</span>
                </div>
                <div className="skill-icon-item" title="NPM">
                  <img src="https://skillicons.dev/icons?i=npm" alt="NPM" />
                  <span>NPM</span>
                </div>
              </div>
            </div>

            {/* Design */}
            <div className="skills-category-card card">
              <h4>UI/UX &amp; Design Tools</h4>
              <div className="skills-icons-row">
                <div className="skill-icon-item" title="Figma">
                  <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />
                  <span>Figma</span>
                </div>
                <div className="skill-icon-item" title="Photoshop">
                  <img src="https://skillicons.dev/icons?i=ps" alt="Photoshop" />
                  <span>Photoshop</span>
                </div>
                <div className="skill-icon-item" title="Adobe Illustrator">
                  <img src="https://skillicons.dev/icons?i=ai" alt="Adobe Illustrator" />
                  <span>Illustrator</span>
                </div>
                <div className="skill-icon-item" title="Canva">
                  <img src="https://img.icons8.com/color/96/canva.png" alt="Canva" />
                  <span>Canva</span>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills & Leadership */}
          <div className="skills-soft-card card fade-in">
            <h4>Soft Skills &amp; Leadership</h4>
            <div className="skills-pills">
              <span className="skill-pill-highlight">
                <i className="fas fa-crown"></i> Team Leadership
              </span>
              <span>
                <i className="fas fa-lightbulb"></i> Problem Solving
              </span>
              <span>
                <i className="fas fa-users"></i> Team Collaboration
              </span>
              <span>
                <i className="fas fa-tasks"></i> Project Coordination
              </span>
              <span>
                <i className="fas fa-comments"></i> Communication
              </span>
              <span>
                <i className="fas fa-clock"></i> Time Management
              </span>
              <span>
                <i className="fas fa-brain"></i> Critical Thinking
              </span>
              <span>
                <i className="fas fa-vial"></i> Automated Testing (Selenium &amp; TestNG)
              </span>
            </div>
          </div>

          {/* Learning Platforms & Environments */}
          <div className="learning-platforms fade-in">
            <h3>Learning Platforms &amp; Academic Environments</h3>
            <div className="platforms-grid">
              <a href="https://www.hackerrank.com/profile/reezmahanan" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fab fa-hackerrank"></i> HackerRank
              </a>
              <a href="https://www.credly.com/users/reezma-hanan" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-network-wired"></i> Cisco NetAcad
              </a>
              <a href="https://learn.microsoft.com" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fab fa-microsoft"></i> Microsoft Learn
              </a>
              <a href="https://open.uom.lk" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-university"></i> CODL Uni of Moratuwa
              </a>
              <a href="https://www.w3schools.com" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-code"></i> W3Schools
              </a>
              <a href="https://www.sololearn.com" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-laptop-code"></i> SoloLearn
              </a>
              <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-terminal"></i> GeeksforGeeks
              </a>
              <a href="https://aws.amazon.com/education/awseducate/" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fab fa-aws"></i> AWS Educate
              </a>
              <a href="https://www.simplilearn.com" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-certificate"></i> Simplilearn
              </a>
              <a href="https://www.kaggle.com" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fab fa-kaggle"></i> Kaggle
              </a>
              <a href="https://kodekloud.com" target="_blank" rel="noreferrer" className="platform-badge card">
                <i className="fas fa-cloud"></i> KodeKloud
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}