// чтобы запустить - в консоли: node demo/os

const log = console.log

const os = require('os')

console.log('Операционная система: ', os.platform())
log('Архитектура процесора: ', os.arch())
// log('Инфа по процессорам: ', os.cpus())
log('Свободная память: ', os.freemem())
log('Всего памяти:     ', os.totalmem())
log('Домашняя дирректория: ', os.homedir())
log('Включен', os.uptime(), 'сек')
