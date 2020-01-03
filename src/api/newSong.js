import request from '@/axios'

export function getNewSongList (data) {
  return request({
    url: `?json=true`,
    methods: 'get',
    data
  })
}

export function getSongInfo (data) {
  return request({
    url: `app/i/getSongInfo.php`,
    methods: 'get',
    params: data
  })
}
