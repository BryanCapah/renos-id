import { memo } from "react";

const Header = memo(({ modalHandler, text }) => {
    return (
        <div className="modal-header component-padding border-bottom text-gray">
            <span className="font-semibold modal-header-text">{text}</span>
            <span onClick={() => modalHandler(false)} className="btn-close">✕</span>
        </div>
    )
})

export default Header