import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { useModal } from "./modal.hooks";

export default function Modal({
    modal,
    modalHandler,
    form
}) {

    const {
        modalHeaderText,
        modalBodyText,
        modalFooterText } = form

    const { modalRef } = useModal({
        modal,
        modalHandler
    })

    return (
        <div
            ref={modalRef}
            id="modal"
            className="modal-container">
            <div
                id='modal-content'
                className="modal-content">
                <Header modalHandler={modalHandler} text={modalHeaderText} />
                <Body text={modalBodyText} />
                <Footer text={modalFooterText} />
            </div>
        </div>
    )
}