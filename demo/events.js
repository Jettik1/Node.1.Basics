// чтобы запустить - в консоли: node demo/events

const log = console.log

const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('anything', data => {
    log('ON: anything ', data)
})

emitter.emit('anything', {a: 1})
setTimeout(() => {
    emitter.emit('anything', {a: 2})
}, 1000);
// Можно создавать свои классы на основе эвентов
/* class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        log('Subscribe...')
        this.on(eventName, callback)
    } // При вызове этого эвента возвращает коллбэк функцию

    dispatch(eventName, data) {
        log('Dispatching...')
        this.emit(eventName, data)
    } // вызывает эвент с названием eventName
}

const dis = new Dispatcher()

// Важен порядок
const something = 23+23
dis.dispatch('nameOfEvent', {a: 22, something})

dis.subscribe('nameOfEvent', data => {
    log('ON: nameOfEvent', data)
}) //не выведет ничего, так как эвент вызвался раньше, а он ждёт его дальше */
