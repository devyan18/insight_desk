import styles from '../styles/PrimarySideBar.module.scss'
// import ConfigHeader from './ConfigHeader'
import { GithubLoginButton } from 'react-social-login-buttons'
import { useAuth0 } from '@auth0/auth0-react'

export default function PrimarySideBar (): JSX.Element {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0()
  console.log(isAuthenticated)
  console.log(user)

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* <ConfigHeader  /> */}

      {!isAuthenticated
        ? <GithubLoginButton onClick={async () => { await loginWithRedirect() }} />

        : (
          <>
           <h2>{user?.nickname}</h2>
           <button onClick={() => { logout() }}>
              Logout
           </button>
          </>
          )
      }
    </div>
  )
}
