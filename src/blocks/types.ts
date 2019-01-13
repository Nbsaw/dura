import { RouteProps } from 'react-router';

// Aside
export interface PNikeNameSection {
  nickname: string;
}

export interface PAvatarSection {
  avatar: string;
}

export interface PDescriptionSection {
  bio: string;
}

export interface PAside {
  nickname: string;
  avatar: string;
  bio: string;
}

// DefaultLayoutRouter
export interface DefaultLayoutRouterProps {
  component: Function;
  exact: boolean;
  path: string;
}
export interface DefaultLayoutRouterState {
  showAside: boolean;
}

// Lables
export interface PLabelTitle {
  name: string;
  color: string;
}

export interface PPostTitle {
  number: string;
  title: string;
}

// SocicalList
export interface PSocicalList {
  list: { link: string, key: string }[];
}
