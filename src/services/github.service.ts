const GITHUB_API_URL = "https://api.github.com";

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export async function getGithubUser(username: string) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`);

  if (!response.ok) return Promise.resolve(null);

  return response.json() as Promise<GithubUser>;
}

export async function getListOfGithubUsers(query: string) {
  try {
    if (query.length < 3) return [] as GithubUser[];

    const request = await fetch(
      `${GITHUB_API_URL}/search/users?q=${query}+in:login&per_page=5`
    );

    if (!request.ok) return Promise.resolve([] as GithubUser[]);

    const response = await request.json();

    return response.items;
  } catch (error) {
    console.error(error);
    return Promise.resolve([] as GithubUser[]);
  }
}
