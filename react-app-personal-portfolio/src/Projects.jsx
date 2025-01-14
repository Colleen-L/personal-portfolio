import Project from "./Project";

// social media platform
const projectOneImages = [
    {
        img: "./CS180-TeamProject/login.png",
        alt: "Login",
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

// {stats}ew

// ARchive

function Projects() {
    return(
        <>
            <div className="projectsContainer">
                <p className="projectsHeader"><b>Projects&gt;&gt; </b></p>
                <div className="projects">
                    <Project images={projectOneImages} title="Social Media Platform" description={projectOneDescription} languages={projectOneLanguages} features={projectOneFeatures}></Project>
                </div>
            </div>
        </>
    );
}

export default Projects