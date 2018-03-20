export default class Api {
    constructor(arg) {
        this.data = {
            'zh-cn': [
                { 'title': '百度', url: 'http://www.baidu.com/', logo: 'baidu'},
                { 'title': '天猫', url: 'http://www.tmall.com/', logo: 'tmall' },
                { 'title': '京东', url: 'http://www.jd.com/', logo: 'jd' },
                { 'title': '新浪网', url: 'http://www.sina.com/', logo: 'sina' }
            ],
            'en-us': [1, 2]
        }
    }

    get() {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(this.data[navigator.language.toLocaleLowerCase()]);
                }, 1000);
            } catch (e) {
                reject(e);
            }
        })
    }
}
