type Props = {
    avatar_url: string
    username: string
}

export default function GithubProfile(props: Props) {
  return (
    <div className="github_user_result">
        <img src={props.avatar_url} alt={props.username} />
        <p>{props.username}</p>
    </div>
  )
}
