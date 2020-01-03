import request from '@/axios'

export function getRankList (data) {
  return request({
    url: `rank/list&json=true`,
    methods: 'get',
    data
  })
}

export function getRankInfo (data) {
  return request({
    url: `rank/info`,
    methods: 'get',
    params: data
  })
}
