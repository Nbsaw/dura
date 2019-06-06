import { RouteComponentProps } from 'react-router';

export type PostPageProps = RouteComponentProps<{ number: string }>;

export interface PostPageState {
  postTitle: string;
  content: string;
  load: boolean;
  created_at: string;
  updated_at: string;
  url: string;
}
