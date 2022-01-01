
import chalk from "chalk"

const tag=process.argv[2]
const flag=process.argv[3]

if (tag=='add') {
    console.log(chalk.green('add tag'))
}

if (flag=='--test') {
    console.log(chalk.red('--test flag'))
    
}





