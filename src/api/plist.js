import request from '@/axios'

export function getPList (data) {
  return request({
    url: `plist/index&json=true`,
    methods: 'get',
    params: data
  })
}
