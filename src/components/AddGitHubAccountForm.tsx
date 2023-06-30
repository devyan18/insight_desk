import { useState, useEffect } from "react";
import { GithubUser, getListOfGithubUsers } from "../services/github.service";
import GithubProfile from "./GithubProfile";

export default function AddGitHubAccountForm() {
  const [username, setUsername] = useState("");
  const [listOfUsers, setListOfUsers] = useState<GithubUser[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      getListOfGithubUsers(username).then((users) => {
        setListOfUsers(users);
      });
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [username]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

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
  );
}
