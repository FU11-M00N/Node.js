const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1',() => {
    console.log('이벤트 1');
    
});

myEvent.addListener('event2',() => {
    console.log('이벤트 2');
    
});

myEvent.addListener('event2',() => {
    console.log('이벤트 2 추가');
    
});

myEvent.once('event3',() => {
    console.log('이벤트 3');
    
}); //한번만 실행됨 once

myEvent.emit('event1'); // emit 로 호출
myEvent.emit('event2'); // emit 로 호출
myEvent.emit('event3'); // emit 로 호출
myEvent.emit('event3'); // 이제 실행안됨

myEvent.on('event4', ()=> {
    console.log('이벤트 4');
});

myEvent.removeAllListeners('event4');
myEvent.emit('event4');