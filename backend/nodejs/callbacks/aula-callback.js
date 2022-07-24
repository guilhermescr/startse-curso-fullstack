function bark(callback) {
  setTimeout(() => {
    console.log('Au au!');
    callback(sneeze);
  }, 0);
}

function meow(noseSound) {
  noseSound();
  console.log('Meow meow!');
}

function sneeze() {
  console.log('Atchimmm!');
}

bark(meow);