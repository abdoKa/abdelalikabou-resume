import './index.css'
import {getMyResume} from "./services/getMyResume.js";
import {useQuery} from "@tanstack/react-query";
import NewSection from "./components/layouts/NewSection.jsx";
import Intro from "./components/resumeSections/Intro.jsx";
import Skills from "./components/resumeSections/Skills.jsx";
import Education from "./components/resumeSections/Education.jsx";

function App() {
    const {data, isLoading, isError} = useQuery(['my-resume'], getMyResume);
    console.log(data);

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
                                    <div className="left-inner"></div>
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
                                            title={data.education.map(ed => ed.title)}
                                            educationTitle={data.education.map(ed => ed.content.map(edTitle => edTitle.title))}
                                            schoolName={data.education.map(ed => ed.content.map(school => school.school_name))}
                                            startAt={data.education.map(ed => ed.content.map(startAt => startAt.start_at))}
                                            endAt={data.education.map(ed => ed.content.map(endAt => endAt.end_at))}
                                        />
                                    </NewSection>
                                </div>
                            </div>
                        </div>
                        : null
            }
        </main>
    )
}

export default App
