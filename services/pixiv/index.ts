import axios from 'axios';

export async function getPixivList() {
  const res = await axios({
    method: 'get',
    url: 'https://now-serverless.yuxino.now.sh/api/pixiv'
  });
  return res.data.image;
}
