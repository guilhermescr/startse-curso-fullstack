function bark() {
  const promiseBark = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Au au!');
      resolve();
    }, 0);
  });
  return promiseBark;
}

function meow() {
  console.log('Meow meow!');
}

bark().then(meow);