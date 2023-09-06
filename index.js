import "./app/moduleA.js";
import "./app/moduleB.js";
import "./app/moduleC.js";

export function main(a) {
  if (a) {
    someFunc1();
    someFunc2(true)
    someFunc2(false);
    someFunc3([{}, {}]);
    someFunc4();
    console.log('This is just to test code coverage...');
    return 0;
  } else {
    return 1;
  }
}


export function someFunc1() {
  console.log("Do stuff");
}

export function someFunc2(val) {
  console.log("Do more stuff");
  if (val) {
    console.log("Sometimes do even more stuff");
  }
}

export function someFunc3(arr) {
  return arr?.map((item) => {
    item.thing = "stuff"; 
  })
}

export function someFunc4() {
  return {some: 'thing'};
}

main();