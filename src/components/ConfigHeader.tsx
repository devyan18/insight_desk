import { useModal } from '../providers/ModalProvider'
import styles from '../styles/ConfigHeader.module.scss'


export default function ConfigHeader() {

  const {openModal} = useModal()

  return (
    <div className={styles.container}>
      <button onClick={openModal}>Login GitHub Auth</button>
    </div>
  )
}
