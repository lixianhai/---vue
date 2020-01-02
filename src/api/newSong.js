import request from '@/axios'

export function getNewSongList (data) {
  return request({
    url: `?json=true`,
    methods: 'post',
    data
  })
}
