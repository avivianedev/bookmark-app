import { useState } from "react"
import { NewWrraper, NewsletterContent, InputBtnNewsletter, Input, InputContainer, InputError } from "./Style"


import validator from 'validator';
import ModalSucess from "../ModalSucess";



export default function Newsletter() {

    const [inputValue, SetInputValue] = useState("")
    const [Error, SetError] = useState(false)
    const [ShowSubmitted, SetShowSubmitted] = useState(false)

    function Validate(event) {
        event.preventDefault()

        if (validator.isEmail(inputValue)) {
            SetError(false)
            return SetShowSubmitted(!ShowSubmitted)
        } else {
            SetError(true)
            return

        }
    }

    function resetValue() {
        SetInputValue("")
        SetShowSubmitted(false)
        return
    }

    return (
        <>



            <NewWrraper>
                <span>35,000+ already joined</span>
                <div className="Mtitle">
                    <h4>Stay up-to-date with what we’re doing</h4>
                </div>

                <NewsletterContent>
                    <InputBtnNewsletter>
                        {Error ?
                            <InputError>
                                <Input type="email"
                                    onChange={(e) => SetInputValue(e.target.value)}
                                    value={inputValue}

                                />
                                <div className="icon-error">
                                    <img src="/assets/images/icon-error.svg" alt="icon-error" />
                                </div>
                                <span className="error">Whoops, make sure it's on email</span>
                            </InputError> :
                            <InputContainer><Input /></InputContainer>
                        }

                        <button onClick={Validate}>Contact Us</button>
                    </InputBtnNewsletter>
                    {ShowSubmitted && <ModalSucess
                        email={inputValue}
                        onClick={resetValue}
                    />}

                </NewsletterContent>

            </NewWrraper>

        </>
    )
}