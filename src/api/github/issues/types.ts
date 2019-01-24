export interface getAllParams {
  state?: string;
}

export interface getAllResponse {
  number: string;
  title: string;
  author_association: string;
  labels: [
    {
      name: string,
      color: string
    }
  ];
}

export interface getDetailsParams {
  number: string;
}

export interface getCommentsParams {
  number: string;
}

export interface getCommentsResponse {
  user: {
    url: string,
    avatar_url: string,
    login: string,
    created_at: string,
    body: string
  };
}
