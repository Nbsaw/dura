import { getAllResponse } from '../api/github/issues/types';

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
export interface LabelTitleProps {
  name: string;
  color: string;
}

export interface PostTitleProps {
  number: string;
  title: string;
}

export interface LabelsProps {
  labels: {
    [key: string]: {
      // items is alias of issues item
      items: getAllResponse[],
      color: string
    }
  };
}

export interface LabelsState {}

// SocicalList
export interface PSocicalList {
  list: { link: string, key: string }[];
}
