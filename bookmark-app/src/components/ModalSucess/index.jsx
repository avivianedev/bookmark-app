import { ModalWrapper } from "./Style"
import { BsEmojiSmile } from "react-icons/bs"

export default function ModalSucess({ email, onClick }) {

    return (
        <ModalWrapper>
            <div className="modal-content">
                <h4>Thank you for your registration.</h4>
                <BsEmojiSmile size={40} color="var(--Soft-Blue)" />
                <p>You will receive a confirmation email to the registered address:</p>
                <span>{email}</span>
                <div className="btn-container">
                    <button onClick={onClick}>Close</button>
                </div>

            </div>

        </ModalWrapper>
    )
}