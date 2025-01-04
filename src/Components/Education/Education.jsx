import "./Education.css"; // Link to the CSS file

export default function Education() {
  return (
    <div className="education-container">
      <div className="education-list">
        {/* Education Item 1 */}
        <div className="education-item-1">
          <h2 className="institution">App Academy</h2>
          <span className="education-row-2">
            <p className="degree">Full-Stack Web Development</p>
            <p className="year"> March 2024 - February 2025</p>
          </span>
          <p className="description">
          Completed an intensive, immersive program in full-stack web development with a strong focus on collaboration and real-world 
          problem-solving. Worked closely with peers in pair programming and team settings to build and deploy dynamic web applications. 
          Developed expertise in technologies like React, Redux, Node.js, Express, Flask, and PostgreSQL, while demonstrating adaptability, 
          communication skills, and a commitment to high-quality code. Delivered multiple full-stack projects that showcase scalable designs 
          and user-centric functionality.
          </p>
        </div>

        {/* Education Item 2 */}
        <div className="education-item-2">
          <h2 className="institution">Grant Union High School</h2>
          <span className="education-row-2">
            <p className="degree">High School Diploma</p>
            <p className="year">August 2017 - June 2021</p>
          </span>
          <p className="description">
          Graduated with the Seal of Biliteracy in Spanish, demonstrating advanced proficiency in both English and Spanish. 
          Maintained a strong academic record with a GPA above 3.0 while excelling in rigorous coursework, including four AP classes. 
          Balanced academics with athletics as a committed member of the soccer team for all four years, highlighting teamwork, discipline, 
          and leadership on and off the field.
          </p>
        </div>

        {/* Education Item 3 */}
        <div className="education-item-3">
          <h2 className="institution">American River College</h2>
          <span className="education-row-2">
            <p className="degree">Plan to Transfer</p>
            <p className="year">2021 - Present</p>
          </span>
          <p className="description">
          Currently enrolled at American River College, I am pursuing foundational coursework with plans to transfer to a University of California 
          to complete a double major in Molecular Biology and Computer Science. This unique combination reflects my deep passion for understanding 
          biological systems and leveraging computational tools to solve complex problems in science and technology. I am committed to excelling in 
          interdisciplinary fields and aim to contribute to innovations at the intersection of biology, data analysis, and software development.
          In addition to my academic pursuits, I am an active member of the programming club, where I collaborate with fellow students on various 
          coding projects and participate in coding challenges to further hone my skills in software development.
          </p>
        </div>
      </div>
    </div>
  );
}