import { RouteComponentProps } from 'react-router';

export type PostPageProps = RouteComponentProps<{ number: string }>;

export interface PostPageState {
  postTitle: string;
  content: string;
  load: boolean;
}
