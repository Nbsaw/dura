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
  exact?: boolean;
  path?: string;
}
export interface DefaultLayoutRouterState {
  showAside: boolean;
}

// SocicalList
export interface PSocicalList {
  list: { link: string, key: string }[];
}
