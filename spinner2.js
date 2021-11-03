
let time = 100
let rArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\  ', '\r|   ','\r/   ','\r-   ','\r\\  ','\r|   ']
for(let r of rArray){
setTimeout(() => {
    process.stdout.write(r); // 
  }, time);
 time += 200;
} 

