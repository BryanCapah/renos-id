import { useCallback, useState } from "react"

export const useApp = () => {
    const [modal, modalSet] = useState(false)
    const modalHandler = useCallback((props) => {
        modalSet(props)
    }, [])

    const formChangeHandler = useCallback((e) => {
        const { name, value } = e.target
        formSet(state => ({ ...state, [name]: value }))
    }, [])

    const [form, formSet] = useState({
        modalHeaderText: '',
        modalBodyText: '',
        modalFooterText: '',
    })

    return {
        modal,
        modalHandler,
        formChangeHandler,
        form
    }
}