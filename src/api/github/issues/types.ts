export interface getAllParams {
  state: string;
}

export interface getDetailsParams {
  number: number;
}

export interface createCommentParams {
  body: string;
  access_token: string;
  issuesId: string;
}

export interface getCommentsParams {
  number: number;
}
