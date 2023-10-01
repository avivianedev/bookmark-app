import { FaqContainer, FaqDescription, Question, } from "./Style"
import faqdata from "./faq.json"

import "../../lax"
import FaqItem from "./FaqItem"

export default function Faq() {


    return (
        <FaqContainer>
            <FaqDescription className="lax lax_preset_fadeInOut:229.75:0.3 lax_preset_scaleIn:229.75:0.6">
                <h2>Frequently Asked Questions</h2>
                <p> Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </FaqDescription>

            {faqdata.map(q => (
                <FaqItem
                    question={q.question}
                    answer={q.answer}
                    key={q.question}
                />

            ))}
            <div className="line"></div>
            <div className="Btn-faq-container">
                <button>More Info</button>
            </div>
        </FaqContainer>
    )
}