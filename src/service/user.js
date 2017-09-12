import request from '../util/request';
import { GET_USER_INFO, SUBMIT_USER_NAME } from '../util/constants';

function getUserInfo(params) {
    return request.get(GET_USER_INFO, params);
}

function submitUserInfo(params) {
    return request.post(SUBMIT_USER_NAME, params);
}

export default { getUserInfo, submitUserInfo };
