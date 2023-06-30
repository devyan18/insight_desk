import './App.scss'
import AddGitHubAccountForm from './components/AddGitHubAccountForm'
import EditorSide from './components/EditorSide'
import PrimarySideBar from './components/PrimarySideBar'
import { useModal } from './providers/ModalProvider'

function App (): JSX.Element {
  const { show } = useModal()

  return (
    <>
      {show && (
        <dialog className="dialog" open={show}>
          <div
            className="modal"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <AddGitHubAccountForm />
          </div>
        </dialog>
      )}
      <div className="container">
        <PrimarySideBar />
        <EditorSide />
        {/* <SecondarySideBar /> */}
      </div>
    </>
  )
}

export default App
