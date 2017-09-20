const cookieStorageService = (function() {

	// 设置数据
	const setData = function(key, data, expire) {
		const cookieData = data;

		if(!expire) {
			const days = 30;
			const exp = new Date();
			const cookieStr = `${key}=${cookieData};expires=${expire};path=/`;
		}
	};

	// 获取数据
    const getData = function (key) {
        const arr = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
        if (arr !== null) {
            if (arr[2] && arr[2] !== 'undefined') {
                return JSON.parse(arr[2]);
            }
        }
        return null;
    };
    // 清除数据
    const removeData = function (key) {
        const exp = new Date();
        exp.setTime(exp.getTime() - 1);
        const expire = exp.toGMTString();
        const cval = getData(key) || '';
        setData(key, cval, expire);
    };
    return {
        get : getData,
        set : setData,
        remove : removeData
    };
}());

// 本地存储服务
const localStorageService = (function () {
    // 设置数据
    const setData = function (key, data) {
        const saveData = JSON.stringify(data);
        window.localStorage.setItem(key, saveData);
    };
    // 获取数据
    const getData = function (key) {
        const saveData = window.localStorage.getItem(key);
        if (saveData && saveData !== 'undefined') {
            return JSON.parse(saveData);
        }
        return null;
    };
    // 清除数据
    const remove = function (key) {
        window.localStorage.removeItem(key);
    };
    return {
        get : getData,
        set : setData,
        remove
    };
}());

// 会话存储服务
const sessionStorageService = (function () {
    const set = function (key, data) {
        const saveData = JSON.stringify(data);
        return window.sessionStorage.setItem(key, saveData);
    };
    const get = function (key) {
        const settings = window.sessionStorage.getItem(key);
        if (settings && settings !== 'undefined') {
            return JSON.parse(settings);
        }
        return null;
    };
    const remove = function (key) {
        return window.sessionStorage.removeItem(key);
    };
    return {
        set,
        get,
        remove
    };
}());

// 客户端存储服务
const constantStorageService = (function () {
    const setData = function (key, data) {
        localStorageService.set(key, data);
        cookieStorageService.set(key, data);
    };
    const getData = function (key) {
        let data = localStorageService.get(key);
        if (!data) {
            data = cookieStorageService.get(key);
        }
        return data;
    };
    const removeData = function (key) {
        localStorageService.remove(key);
        cookieStorageService.remove(key);
    };
    return {
        get : getData,
        set : setData,
        remove : removeData
    };
}());

export {
    cookieStorageService,
    localStorageService,
    sessionStorageService,
    constantStorageService
};