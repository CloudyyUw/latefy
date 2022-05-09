import chalk from 'chalk';

export default {
    warn: (message) => {
        console.log(
            `${chalk.bold.yellow('[WARN]:')} ${chalk.blueBright(message)}`
        );
    },
    error: (message) => {
        console.log(
            `${chalk.bold.redBright('[ERR]:')} ${chalk.blueBright(message)}`
        );
    },
    log: (message) => {
        console.log(
            `${chalk.bold.greenBright('[LOG]:')} ${chalk.blueBright(message)}`
        );
    },
};
