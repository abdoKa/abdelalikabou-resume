import './index.css'
import {getMyResume} from "./services/getMyResume.js";
import {useQuery} from "@tanstack/react-query";
import IntroSection from "./components/intro/IntroSection.jsx";


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
                                    <IntroSection
                                        title={data.intro_section.map(intro => intro.title)}
                                        firstParagraph={data.intro_section.map(intro => intro.content.paragraph_one)}
                                        secondParagraph={data.intro_section.map(intro => intro.content.paragraph_two)}
                                        JopPls={data.intro_section.map(intro => intro.content.job_pls)}
                                    />
                                </div>
                            </div>
                        </div>
                        : null}
        </main>
    )
}

export default App
