import request from '../common'
export function banner(data) {
    return request({
        url: '/banner?current=1&size=10',
        method: 'get',
        data: data
    })
}
export function article(data) {
    // var menuId = menuId?menuId:'';
    return request({
        url: '/article?current=1&size=3',
        method: 'get',
        data: data
    })
}
export function about(data) {
    return request({
        url: '/about',
        method: 'get',
        data: data
    })
}

export function message(data) {
    return request({
        url: '/message',
        method: 'post',
        data: data
    })
}
export function menu(data) {
    return request({
        url: '/menu?current=1&size=20',
        method: 'get',
        data: data
    })
}
export function MenuArticle(menuId, currentPage) {
    return request({
        url: '/article?current=' + currentPage + '&size=10&menuId=' + menuId,
        method: 'get',
    })
}
export function detail(id, menuId) {
    return request({
        url: '/article/' + id + '?menuId=' + menuId,
        method: 'get',
    })
}
export function stepDocment(type) {
    return request({
        url: '/step?current=1&size=10&type=' + type,
        method: 'get',
    })
}

export function course() {
    return request({
        url: '/course?current=1&size=10',
        method: 'get',
    })
}