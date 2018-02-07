const app = "I don't do much."

function destructivelyAppendKitten(array) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(array) {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
  return kittens;
}

function appendKitten(array, element) {
  return (...kittens, 'Kitten');
}
