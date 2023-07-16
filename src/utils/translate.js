const apiConfig = require('../config/baiduTranslateApiConfig');
const axios = require('axios');
const CryptoJS = require('crypto-js');
const chalk = require('chalk');
const translate = async (word) => {
    const { url, appid, key, from, to, salt } = apiConfig;
    sign = CryptoJS.MD5(appid + word + salt + key).toString();
    const query = {
        q: word,
        from,
        to,
        appid,
        salt,
        sign
    };

    try {
        const response = await axios.get(url, { params: query });
        const { data } = response;
        console.log(chalk.green("英文：" + data.trans_result[0].src));
        console.log(chalk.yellow("翻译结果：" + data.trans_result[0].dst));
    } catch (err) {
        console.error(err);
    }
};


module.exports = translate;