const apiConfig = {
    url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
    appid: '20200212000382989',
    key: 'L3k96KA8dAH96O_61tH7',
    from: 'en',
    to: 'zh',
    salt: Math.floor(Math.random() * 10000000000).toString(),
};
module.exports = apiConfig;