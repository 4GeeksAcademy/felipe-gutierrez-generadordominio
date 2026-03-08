

window.onload = function () {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let dominio = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        dominio.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }

  let resultado = Math.floor(Math.random() * dominio.length);

  document.write(dominio[resultado]);
};
