import { useState } from "react"
import { FaqContent, Question, Ansewer, Arrow } from "./Style"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"


export default function FaqItem({ question, answer }) {

    const [showanswers, SetShowAnswer] = useState(false)


    return (
        <FaqContent key={question} >
            <Arrow>
                <Question >
                    <h4 > {question} </h4>
                    {showanswers ? <MdKeyboardArrowUp size={25} color="red" onClick={() => SetShowAnswer(!showanswers)} /> : <MdKeyboardArrowDown size={25} color="#5267DF" onClick={() => SetShowAnswer(!showanswers)} />}

                </Question>
            </Arrow>
            {showanswers && <Ansewer>
                <p>{answer}</p>
            </Ansewer>}

        </FaqContent>
    )
}