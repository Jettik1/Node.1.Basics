// чтобы запустить - в консоли: node demo/fs

const log = console.log

const fs = require('fs')
const path = require('path')

// Код далльше создаст новую папку
// fs.mkdir(path.join(__dirname, 'test'), (err) => { // Вначале передается ошибка для обработки её в случае возникновения
//     if (err) {
//         throw err
//     }
//     log('папка создана')
// })

const filePath = path.join(__dirname, 'text.txt')


fs.writeFile(filePath, 'Hello NodeJS!', err => {
    if (err) {
        throw err
    }

    log('Файл создан')
}) 
// Перезаписывает файл если тот уже создан

log(fs.appendFile(filePath, '\nAdd from NodeJS!', err => {
    if (err) {
        throw err
    }

    log('Файл обновлен')
}) )

fs.readFile(filePath, 'utf-8', (err, content) => { // Выводет тукса не буффер потому что мы указали кодировку 'utf-8'
    if (err) {
        throw err
    }

    log(content)
})

