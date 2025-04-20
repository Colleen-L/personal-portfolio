import Project from "./Project";
import ProjectTwo from "./ProjectTwo";

// social media platform
const projectOneImages = [
    {
        img: '/CS180-TeamProject/login.png',
        alt: 'Login Page',
      },
      {
        img: '/CS180-TeamProject/homepage.png',
        alt: 'Homepage',
      },
      {
        img: '/CS180-TeamProject/profile.png',
        alt: 'Profile',
      },
      {
        img: '/CS180-TeamProject/search.png',
        alt: 'Search',
      },
      {
        img: '/CS180-TeamProject/friends.png',
        alt: 'Friends',
      },
      {
        img: '/CS180-TeamProject/messageSent.png',
        alt: 'Message Sent',
      },
      {
        img: '/CS180-TeamProject/messaging1.png',
        alt: 'Messaging',
      },
      {
        img: '/CS180-TeamProject/messaging2.png',
        alt: 'Messaging',
      },
]

const projectOneDescription = [
    {
        text: "A text messaging platform created with my team using Java.",
    },
    {
        text: "Utilizes thread-safe network I/O and JFrames for graphic user interface.",
    },
]

const projectOneLanguages = [
    "Java",
    "Github",
    "IntelliJ",
]

const projectOneFeatures = [
    {
        feature: "Team collaboration"
    },
    {
        feature: "Thread-safe",
    },
    {
        feature: "Network I/O",
    },
    {
        feature: "JFrames",
    },
]

// {stats}

const projectTwoImages = [
    {
      img: '/stats/home.png',
      alt: 'Homepage',
    },
    {
      img: '/stats/tests.png',
      alt: 'Tests',
    },
    {
      img: '/stats/inputs.png',
      alt: 'Input Form',
    },
    {
      img: '/stats/results.png',
      alt: 'Result Page',
    },
]

const projectTwoDescription = [
    {
        text: "Conducts statistical tests and provides analysis based on user input",
    },
    {
        text: "Developed algorithms for analysis and hypothesis testing",
    },
]

const projectTwoLanguages = [
    "Jupyter",
    "Django",
    "Python and Python libraries",
]

const projectTwoFeatures = [
    {
        feature: "File Input"
    },
    {
        feature: "Backend Data Processing",
    },
    {
        feature: "Data Analysis",
    },
]

// ARchive

const projectThreeImages = [
  {
    img: '/ARchive/login.png',
    alt: 'Login',
  },
  {
    img: '/ARchive/posting.png',
    alt: 'Homepage',
  },
  {
    img: '/ARchive/profile.png',
    alt: 'Profile Page',
  },
]

const projectThreeDescription = [
  {
      text: "Augmented reality app for note posting, leveraging ARKit for immersive experiences",
  },
  {
      text: "Developed with a team as a part of the Hello World Hackathon at Purdue University",
  },
]

const projectThreeLanguages = [
  "Flutter",
  "Dart",
  "ARKit",
  "Firebase"
]

const projectThreeFeatures = [
  {
      feature: "Augmented Reality"
  },
  {
      feature: "Database: User and Location Storage",
  },
  {
      feature: "OAuth Login",
  },
]

//HelpHive

const projectFourImages = [
  {
    img: '/HelpHive/home.png',
    alt: 'Homepage',
  },
  {
    img: '/HelpHive/map.png',
    alt: 'Map',
  },
  {
    img: '/HelpHive/reporting.png',
    alt: 'Incident Report Form',
  },
]

const projectFourDescription = [
  {
      text: "Real-time incident reporting system with interactive map integration",
  },
  {
      text: "Allows users to submit and manage reports via intuitive icons",
  },
  {
    text: "Collaborated with a team to deliver this solution as a part of InnovateHer hackathon",
  },
]

const projectFourLanguages = [
  "Python",
  "Flask",
  "HTML, CSS, JavaScript",
  "MongoDB Atlas"
]

const projectFourFeatures = [
  {
      feature: "Error Handling"
  },
  {
      feature: "Database: User and Report Storage",
  },
  {
      feature: "Interactive Map with Address Validation",
  },
]

function Projects() {
    return(
        <>
            <div className="projectsContainer">
                <p className="projectsHeader"><b>Projects&gt;&gt; </b></p>
                <div className="projects">
                    <ProjectTwo images={projectTwoImages} title="{stats}" description={projectTwoDescription} languages={projectTwoLanguages} features={projectTwoFeatures}></ProjectTwo>
                    <ProjectTwo images={projectFourImages} title="HelpHive: Incident Reporting" description={projectFourDescription} languages={projectFourLanguages} features={projectFourFeatures}></ProjectTwo>
                    <Project images={projectOneImages} title="Social Media Platform" description={projectOneDescription} languages={projectOneLanguages} features={projectOneFeatures}></Project>
                    <Project images={projectThreeImages} title="Augmented Reality Note Posting" description={projectThreeDescription} languages={projectThreeLanguages} features={projectThreeFeatures}></Project>
                </div>
            </div>
        </>
    );
}

export default Projects