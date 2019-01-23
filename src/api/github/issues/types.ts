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
