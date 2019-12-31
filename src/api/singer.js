import request from '@/axios'

export function getSingList (data) {
  return request({
    url: `singer/class&json=true`,
    methods: 'get',
    data
  })
}
