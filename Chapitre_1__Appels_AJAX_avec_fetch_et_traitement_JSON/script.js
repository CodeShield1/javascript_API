// script.js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  
.then(reponse => reponse.json())
.then(data => {console.log(data);})
.catch(error => {console.error('Erreur:', error);})