import axios from 'axios';

export async function getPixivList() {
  const res = await axios({
    method: 'get',
    url: 'http://121.199.30.170:10000/random'
  });
  return res.data.image;
}
