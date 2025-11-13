let container = document.getElementById("articles");

fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
.then(response=> response.json())
.then(data=>{
    let ul =document.createElement("ul");
    data.forEach(element => {
    let li =document.createElement("li");
    li.textContent=element.title;
    ul.appendChild(li);
     
    });
    container.appendChild(ul);
})



