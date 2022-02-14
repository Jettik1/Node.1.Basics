// function(exports, require, module, __dirname, __filename){} - то, как оборачивает node js модули
// import path from 'path';

// чтобы проверить надо запустить node index.js в данной дирректории через консоль

const path = require('path');
const fs = require('fs');
const log = console.log;

const http = require('http')
/* 
log('Filename: ', path.basename(__filename));
log('Имя Дерриктории: ', path.basename(__dirname));
log('Directory name 2ver: ', path.dirname(__filename));

log('Расширение файла: ', path.extname(__filename));
log('Parse: ', path.parse(__filename).name); // .name - обращение у полю объекта
log(path.join(__dirname, 'server', 'index.html')) // Пример как входить в другие папки */

const server = http.createServer((request,response) => { // Используеся чтобы прокинуть приложение на сервер
    

    /* if (request.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'),(err,data)=> { // Просто читаем файл index.html если такой существует
            if (err) {
                throw err
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end(`${data} Hello`) // передастся на localhost:3000
        })
    }

    if (request.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'),(err,data)=> { // Просто читаем файл index.html если такой существует
            if (err) {
                throw err
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end(`${data} contact page`) // передастся на localhost:3000/contact
        })
    } */
// Оптимизация кода выше =========================

    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url) // получаем запрашиваемый путь
    console.log(filePath)
    const ext = path.extname(filePath)
    
    switch (ext) {
        case '.css':
          contentType = 'text/css'
          break
        case '.js':
          contentType = 'text/javascript'
          break
        default:
          contentType = 'text/html'
      }

    if (!ext) {
        filePath += '.html'
    }


    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join('./public', 'error.html'),(err, data) => {
                if (err) {
                    response.writeHead(500)
                    response.end('Error')
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    const buf = Buffer.from(data); // Берет буффер из даты чтобы вернуть его в виде сторки ниже 
                    console.log(buf.toString())// тут
                    response.end(data) // В данном случае data - это html возвращаемой страницы
                }
            })
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.end(content)
        }
    })


}) // чтобы сервер постоянно обновлялся, в package.sjon мы добавили "dev": "nodemon index.js" и теперь чтобы запустить сервер в режиме разработки пропишите: npm run dev
// 
server.listen(3000,()=>{
    log('server has been started...')
})
