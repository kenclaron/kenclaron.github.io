import { Octokit } from "octokit";

import { OctokitResponse } from "@octokit/types";

import { Repositories, User } from "utils/types/github.type";

const USERNAME = process.env.REACT_APP_USERNAME as string;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN as string;

const octokit = new Octokit({
  auth: TOKEN,
});

export class GitHub {
  /**
   * Get repositories by username
   * @return {Promise<Repositories>}
   */
  static getRepositories(): Promise<Repositories> {
    return new Promise((resolve, reject) =>
      octokit
        .request(`GET /users/${USERNAME}/repos`, {
          type: "public",
          sort: "stars",
        })
        .then((response: OctokitResponse<Repositories, number>) => {
          resolve(
            response.data.sort(
              (a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0)
            )
          );
          return response.data;
        })
        .catch(() => {
          reject();
          return [] as Repositories;
        })
    );
  }

  /**
   * Get user by username
   * @return {Promise<User>}
   */
  static getUser(): Promise<User> {
    return octokit
      .request(`GET /users/${USERNAME}`)
      .then((response) => response.data)
      .catch(() => [] as Repositories);
  }
}

export default GitHub;
