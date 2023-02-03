export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  private: boolean;
  fork: boolean;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  git_url?: string;
  html_url: string;
  homepage?: string;
  size?: number;
  stargazers_count?: number;
  watchers_count?: number;
  forks_count?: number;
  language?: string;
  languages: { [key: string]: number }[];
  archived?: boolean;
  disabled?: boolean;
  open_issues_count?: number;
  license?: {
    key?: string;
    name?: string;
    spdx_id?: string;
    url?: string;
    node_id?: string;
  };
  is_template?: boolean;
  topics?: string[];
  visibility?: string;
  forks?: number;
  default_branch?: string;
  owner: {
    avatar_url: string;
    id: number;
    login: string;
    email?: string;
    name?: string;
    url: string;
    type: string;
  };
};

export default Repository;
