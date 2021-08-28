import chalk from 'chalk';

export function info (msg:string):void{
    console.log(chalk.blue('INFO: ')+chalk.green(msg))
}

export function error (msg:any):void{
    console.log(chalk.red('Reference error: ') + msg)
}

export function warn (msg:any):void{
    console.log(chalk.yellow('WARN: ')+msg)
}

export function infovariante(msg:any){
    console.log(chalk.blueBright(msg));
}