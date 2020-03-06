import $http from './index'

export function getBackgroundImg (data) {
  return $http({
    url: '/resource/image',
    method: 'get'
  })
}