import { format } from 'timeago.js';

export function timeAgo(time) {
  return format(time, 'zh_CN');
}
