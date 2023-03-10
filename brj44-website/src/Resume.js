import "./Resume.css"
const Resume = () => {
    return (
        <>
            <h2 className={"header"}>Resume:</h2>
            <div className={"mainTextbox"}>
                <h3>Education:</h3>
                <b>Texas State University</b>
                <p>Bachelor of Science in Computer Science<br/>
                Minor in Applied Mathematics<br/>
                Expected Graduation: May 2023</p>
            </div>
            <div className={"mainTextbox"}>
                <h3>Experience:</h3>

                <b>Front-End Web Developer at <a href={"https://spexodisks.com/"}>SpexoDisks</a></b>
                <b>January 2023 - Present</b>
                <ul>
                    <li>Design pages to modernize the website UI and make pages feel more homogenous.</li>
                    <li>Create reusable components that can serve a variety of purposes on the website.</li>
                    <li>Reformat frontend to make the pages responsive to a variety of different screen sizes.</li>
                    <li>Communicate our project lead to convert their ideas into real components on the website.</li>
                    <li>Collaborate with a small team to create a better overall website for our users.</li>
                </ul>

                <b>Software Development Intern at Paycom</b>
                <b>May 2022 - August 2022</b>
                <ul>
                    <li>Created a responsive Single Page Application (SPA) using the React framework.</li>
                    <li>Created MySQL tables that were used to provide dynamic information to the React SPA.</li>
                    <li>Expanded upon existing legacy code and sent user changes into a MySQL table using PHP.</li>
                    <li>Managed project progress and collaborated with coworkers using GitLab.</li>
                    <li>Created project plans and UI designs with coworkers using confluence.</li>
                </ul>
                <b>Student Worker at The Department of Marketing at Texas State University</b>
                <b>August 2019 - December 2022</b>
                <ul>
                    <li>Over 3 years of work experience in a professional office setting.</li>
                    <li>Assisted students with questions regarding staff and courses.</li>
                    <li>Assisted staff with various tasks relating to their courses.</li>
                    <li>Set up various forms of technology, such as computers and printers, for the office and staff.</li>
                    <li>Maintained the office’s cleanliness and restocked supplies.</li>
                </ul>
                <b>References</b>
                <ul>
                    <li>Caleb Wheeler – Detector Readout Development Scientist: Phone 314-283-8383</li>
                    <li>Tecpal SolisRayos - Previous Team Lead and mentor: Phone – 915-990-5187</li>
                    <li>Cheryl Contreras - Previous Employer: Work Phone - 512-245-7467</li>
                </ul>
            </div>
            <div className={"mainTextbox"}>
                <h3>Relevant Coursework:</h3>
                <b>Data Structures & Algorithms</b>
                <ul>
                    <li>Gathered a more comprehensive look at advanced data structures and basic common algorithms.</li>
                    <li>Implemented the use of data structures and algorithms on those data structures in C++.</li>
                    <li>Introduction to advanced algorithms such as Dijkstra’s graph algorithm.</li>
                </ul>
                <b>Fundamentals of Algorithms Design and Analysis</b>
                <ul>
                    <li>Conducted through the Engineer in Residence program in collaboration with Facebook.</li>
                    <li>Gained a more in-depth look into popular advanced algorithms and their functions commonly used in
                        software engineering.</li>
                    <li>Implemented advanced algorithms to solve common problems in C++.</li>
                </ul>
            </div>
            <div className={"mainTextbox"}>
                <h3>Projects:</h3>
                <a href={"http://www.spacevision.one"}><b>Space Vision</b></a>
                <ul>
                    <li>Frontend Website created using React and multiple UI libraries to present the user with a modern looking website.</li>
                    <li>Displayed data from NASA’s open APIs to allow the user to easily view the data.</li>
                    <li>Project was created by a team of four and progress was managed using Jira and Bitbucket.</li>
                    <li>Version control and merging of changes was completed using Git.</li>
                    <li>Website is hosted on a personal Linux machine using Apache HTTP Server Software.</li>
                </ul>
            </div>
            <div className={"mainTextbox"}>
                <h3>Technical Skills:</h3>
                <b>Programming Languages:</b>
                <p>Experienced in C++, HTML/CSS, JavaScript, TypeScript, Python, PHP, and SQL.</p>
                <b>Frameworks and Technologies:</b>
                <p>React.js, Linux, and Git.</p>
            </div>

        </>
    )
}
export default Resume;
