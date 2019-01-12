import $http from './index'

export function getBackgroundImg (data) {
  return $http({
    url: '/img/img',
    method: 'get'
  })
}