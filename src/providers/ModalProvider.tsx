import {useState, useContext, createContext} from 'react'

type ModalContextType = {
    show: boolean
    toggleModal: () => void
    closeModal: () => void
    openModal: () => void
}

const ModalContext = createContext<ModalContextType>({
    show: false,
    toggleModal: () => {},
    closeModal: () => {},
    openModal: () => {}
})

type Props = {
    children: React.ReactNode
}

export default function ModalProvider (props: Props)  {

    const [show, setShow] = useState(false)

    const toggleModal = () => {
        setShow(prev => !prev)
    }
    const closeModal = () => setShow(false)
    const openModal = () => setShow(true)

    return (
        <ModalContext.Provider value={{
            show,
            toggleModal,
            closeModal,
            openModal
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)