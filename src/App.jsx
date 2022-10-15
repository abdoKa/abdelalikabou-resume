import './index.css'
import {getMyResume} from "./services/getMyResume.js";
import {useQuery} from "@tanstack/react-query";
import NewSection from "./components/layouts/NewSection.jsx";
import Intro from "./components/resumeSections/Intro.jsx";
import Skills from "./components/resumeSections/Skills.jsx";
import Education from "./components/resumeSections/Education.jsx";
import Experiences from "./components/resumeSections/Experiences.jsx";
import Projects from "./components/resumeSections/Projects.jsx";
import ResumePdf from "./components/Buttons/ResumePdf.jsx";

function App() {
    const {data, isLoading, isError} = useQuery(['my-resume'], getMyResume);
    
    return (
        <main>
            {isLoading
                ? 'Loading...'
                : isError
                    ? 'Error!'
                    : data
                        ? <div>
                            <div className="left">
                                <div className="bg-me">
                                    <div className="left-inner">
                                        <h1>Hello Friends,I'm Abdelali</h1>
                                        <p>Developer in Casablanca, Morocco</p>
                                        <p>Full-Stack developer @ <a href="https://www.leadz.ma/"
                                                                     target="_blank">Leadz</a></p>
                                        <div className="flex items-center justify-center my-3 gap-2">
                                            <a href={data.get_in_touch.github} target="_blank">
                                                <ion-icon name="logo-github" size="large"></ion-icon>
                                            </a>
                                            <a href={data.get_in_touch.linkedin} target="_blank">
                                                <ion-icon name="logo-linkedin" size="large"></ion-icon>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-inner">
                                    <NewSection>
                                        <Intro
                                            title={data.intro_section.map(intro => intro.title)}
                                            firstParagraph={data.intro_section.map(intro => intro.content.paragraph_one)}
                                            secondParagraph={data.intro_section.map(intro => intro.content.paragraph_two)}
                                            JopPls={data.intro_section.map(intro => intro.content.job_pls)}
                                        />
                                    </NewSection>
                                    <NewSection>
                                        <Skills
                                            title={data.skills.map(skills => skills.title)}
                                            languages={data.skills.map(skills => skills.content.programming_languages.map(p_lang => p_lang + ' | '))}
                                            libraries_and_frameworks={data.skills.map(skills => skills.content.libraries_and_frameworks.map(libAndFram => libAndFram + ' | '))}
                                            tools={data.skills.map(skills => skills.content.tools.map(tools => tools + ' | '))}
                                        />
                                    </NewSection>
                                    <NewSection>
                                        <Education
                                            title={data.education.title}
                                            educations={data.education.educations}
                                        />
                                    </NewSection>
                                    <NewSection>
                                        <Experiences
                                            title={data.experience.title}
                                            experiences={data.experience.experiences}
                                        />
                                    </NewSection>
                                    <NewSection>
                                        <Projects
                                            title={data.projects.title}
                                            projects={data.projects.projects_details}
                                        />
                                    </NewSection>
                                    <ResumePdf label="Grab a PDF of my full resume" link={data.resume_pdf_link}/>

                                </div>
                            </div>
                        </div>
                        : null
            }
        </main>
    )
}

export default App
