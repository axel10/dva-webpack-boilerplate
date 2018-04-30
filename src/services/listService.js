
import request from '../utils/request';

export function fetchList() {
    return request('/static/data.json')
}

export function removeListItem(i) {
    return true
}