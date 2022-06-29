import { memo } from "react";

const Form = memo(({
    modalHandler,
    formChangeHandler
}) => {
    return (
        <div id='form-container' className="form-container">
            <form
                onSubmit={e => e.preventDefault()}
                className="form">
                <input
                    onChange={formChangeHandler}
                    placeholder='insert modal header text'
                    className='input-text'
                    name='modalHeaderText'
                    id='input-header' />
                <textarea
                    onChange={formChangeHandler}
                    placeholder='insert modal body text'
                    className='input-text'
                    name='modalBodyText'
                    id='input-body'></textarea>
                <input
                    onChange={formChangeHandler}
                    placeholder='insert modal footer text'
                    className='input-text'
                    name='modalFooterText'
                    id='input-footer' />
                <button
                    onClick={() => modalHandler(true)}
                    id="btn-modal"
                    className="button">
                    open modal
                </button>
            </form>
        </div>


    )
})

export default Form