import { useState, useContext, createContext } from 'react'

interface ModalContextType {
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

interface Props {
  children: React.ReactNode
}

export default function ModalProvider (props: Props): JSX.Element {
  const [show, setShow] = useState(false)

  const toggleModal = (): void => {
    setShow(prev => !prev)
  }
  const closeModal = (): void => { setShow(false) }
  const openModal = (): void => { setShow(true) }

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

export const useModal = (): ModalContextType => useContext(ModalContext)
