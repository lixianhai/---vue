import request from '@/axios'

export function getPList (data) {
  return request({
    url: `/api/rank/list&json=true`,
    methods: 'get',
    data
  })
}
