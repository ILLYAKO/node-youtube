const EventEmitter = require("events");

const emmitter = new EventEmitter();

// emmitter.on("anything", (data) => {
//   console.log("On: anything", data);
// });

// setTimeout(() => {
//   emmitter.emit("anything", { z: 0 });
// }, 1500);

// emmitter.emit("anything", { a: 1 });
// emmitter.emit("anything", { b: 2 });

// setTimeout(() => {
//   emmitter.emit("anything", { c: 3 });
// }, 1500);

class Dispathcer extends EventEmitter {
  subscribe(eventName, cb) {
    console.log("[Subscribe...]");
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log("[Dispatch...]");
    this.emit(eventName, data);
  }
}
const dis = new Dispathcer();

dis.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});

dis.dispatch("aa", { aa1: 22 });
