
import request from '../utils/request';

export function fetchList() {
    return request('/public/data.json');
}

export function removeListItem() {
    return true;
}
