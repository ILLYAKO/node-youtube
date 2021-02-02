const os = require('os')

console.log("OS: ", os.platform())
console.log("spu arch: ", os.arch())
console.log("spu: ", os.cpus())
console.log("Free memory: ", os.freemem())
console.log("Total memory: ", os.totalmem())
console.log("Home dir: ", os.homedir())
console.log("Working time: ", os.uptime())