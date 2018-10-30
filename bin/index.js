const program = require('commander');
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');


program.version('1.0.0', '-v, --version')
       .command('init <name>')
       .action((name) => {
        //    console.log(name);
        download('https://github.com/yuanjunliang/create-fibos-dapp.git', name, {clone: true}, (err) => {
				console.log(err ? 'Error' : 'Success')
		   })
       });
program.parse(process.argv);