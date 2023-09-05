function main() {
  someFunc1();
  someFunc2(true)
  someFunc2(false);
  someFunc3([{}, {}]);
  someFunc4();
  console.log('This is just to test code coverage...');
}


function someFunc1() {
  console.log("Do stuff");
}

function someFunc2(val) {
  console.log("Do more stuff");
  if (val) {
    console.log("Sometimes do even more stuff");
  }
}

function someFunc3(arr) {
  return arr?.map((item) => {
    item.thing = "stuff"; 
  })
}

function someFunc4() {
  return {some: 'thing'};
}

main();