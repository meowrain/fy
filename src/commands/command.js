const { Command } = require('commander');
const translate = require('../utils/translate');
const program = new Command();

program
    .name('fy')
    .description('一个基于百度翻译API的终端翻译工具(A translator based on Baidu Translate API)')
    .description('翻译英文到中文(translate English to Chinese)')
    .argument('<string>','要翻译得英文(word to be translated)')
    .action((word)=>{
        translate(word);
    })
    .version('1.0.0')


program.parse();

