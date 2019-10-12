import { getAllResponse } from '../../../api/github/issues/types';

type Labels = {
  [key: string]: {
    // items is alias of issues item
    items: getAllResponse[];
    color: string;
  };
};

// Post Title
export interface PostTitleProps {
  number: string;
  title: string;
}

// Lable Title
export interface LabelTitleProps {
  name: string;
  color: string;
}

// Labels
export interface LabelsProps {
  labels: Labels;
}

export interface LabelsState {}

// Label Page
export interface TagsPageState {
  labels: Labels;
  loading: boolean;
}
