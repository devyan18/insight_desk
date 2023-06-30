import { useState, useEffect } from 'react'
import { type GithubUser, getListOfGithubUsers } from '../services/github.service'
import GithubProfile from './GithubProfile'

export default function AddGitHubAccountForm (): JSX.Element {
  const [username, setUsername] = useState('')
  const [listOfUsers, setListOfUsers] = useState<GithubUser[]>([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      getListOfGithubUsers(username).then((users) => {
        setListOfUsers(users)
      }).catch((err) => {
        console.error(err)
      })
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [username])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value)
  }

  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleInputChange}
      />

      <div className="results">
        {
          listOfUsers.map((user) => (
            <GithubProfile key={user.id} username={user.login} avatar_url={user.avatar_url}/>
          ))
        }
      </div>
    </>
  )
}
