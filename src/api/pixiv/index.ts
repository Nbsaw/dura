import axios from 'axios';

export async function getPixivList() {
  const res = await axios({
    method: 'get',
    url: 'https://pixiv-ilpgskxxnj.now.sh/random  '
  });
  return res.data.image;
}
