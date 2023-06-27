import styles from '../styles/PrimarySideBar.module.scss'
import ConfigHeader from './ConfigHeader'



export default function PrimarySideBar() {
  return (
    <div className={styles.container}>
      <ConfigHeader  />
    </div>
  )
}
