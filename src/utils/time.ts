import { format, TDate } from 'timeago.js';

export function timeAgo(time: TDate) {
  return format(time, 'zh_CN');
}
