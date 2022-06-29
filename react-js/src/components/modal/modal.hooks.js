import { useEffect, useRef } from "react"

export const useModal = ({ modal, modalHandler }) => {
    const modalRef = useRef(null)

    useEffect(() => {
        if (modal) {
            modalRef.current.style.visibility = 'visible'
            modalRef.current.style.opacity = 1
            document.body.style.overflow = 'unset'
        }
        else {
            modalRef.current.style.visibility = 'hidden'
            modalRef.current.style.opacity = 0
            document.body.style.overflow = 'scroll'
        }

        const element = modalRef.current;

        element.addEventListener('click', (e) => e.target.id === 'modal' && modalHandler())
        window.addEventListener('keydown', (e) => e.key === 'Escape' && modalHandler())

        return () => {
            element.removeEventListener('click', (e) => e.target.id === 'modal' && modalHandler())
            window.addEventListener('keydown', (e) => e.key === 'Escape' && modalHandler())
        };

    }, [modal, modalHandler])

    return {
        modalRef
    }
}