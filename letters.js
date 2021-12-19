// Runs through a string and outputs only characters [a-zA-Z]

function letters(string) {
  return string.match(/[a-zA-Z]/g).join('');
}

console.log(letters("Madam, I'm Adam"));
// .match(/[a-zA-Z]/)
// .push
