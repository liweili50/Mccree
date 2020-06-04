import $http from './index'

export function getArticleList(data) {
  return $http({
    url: '/article/getArticleList',
    method: 'get',
    params: data
  })
}
export function getArticle(id) {
  return $http({
    url: '/article/' + id,
    method: 'get'
  })
}
export function getArchiveList() {
  return $http({
    url: '/article/getArchiveList',
    method: 'get'
  })
}
export function getTagList() {
  return $http({
    url: '/article/getTags',
    method: 'get'
  })
}
export function getArticleListByTag(data) {
  return $http({
    url: '/article/getArticlesByTag',
    method: 'get',
    params: data
  })
}
