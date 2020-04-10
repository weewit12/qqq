function search(){
let URL = 'https://newsapi.org/v2/top-headlines?'+
            'apiKey=150ce9c6b84c49629e2ed81cc2da2e43'+
            '&country='+document.getElementById("country").value+
            '&category='+document.getElementById("category").value+
            '&q='+document.getElementById("keyword").value+
            '&page=1&pageSize=50'
const news = document.querySelector('.news') 
fetch(URL)
   .then(data => data.json())
   .then(response => {
       //handle response here ...
       console.log(response)
       const articles = response.articles
       let newsItem=''
       let newscount=0     
       articles.forEach(article => {
           newsItem+=`
        <div class="news-item">
           <div class="image">         
               <div class="bookmark">
                    <div class="mark"></div>
               </div>  
               <img src="${article.urlToImage}" alt="No Image Available">                   
           </div>
           <div class="description">
               <h2> ${article.title} </h2>
               <div class="publish">
                 <h4>${article.source.name}</h4>
                 <h5>Published: ${(article.publishedAt).substr(0,10)}</h5>
               </div>
               <p> ${article.description} </p>
           </div>
           <div class="linkpage">
               <a class="linkbutton" href="${article.url}">Go to page</a>
           </div>
       </div>
           `
        newscount++;
       });
       if(newscount>0){
       news.innerHTML = newsItem
       console.log(URL)
       document.getElementById("result-count").innerHTML = "You have "+newscount+" results"
       }
       if(newscount==0){
        news.innerHTML=`<div>No Result Found</div>`
       }
   })
   .catch(error => {
       // handle failed requests here ...
       news.innerHTML=`<div>No Result Found</div>`
   })
}
search();


function mode(){
var element = document.body;
element.classList.toggle("dark-mode");

var element = document.getElementById("upper");

if (element.classList) { 
  element.classList.toggle("dark-mode");
} else {
  var classes = element.className.split(" ");
  var i = classes.indexOf("dark-mode");

  if (i >= 0) 
    classes.splice(i, 1);
  else 
    classes.push("dark-mode");
    element.className = classes.join(" "); 
}


var element = document.getElementById("lower");

if (element.classList) { 
    element.classList.toggle("dark-mode");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("dark-mode");
  
    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("dark-mode");
      element.className = classes.join(" "); 
  }
 
}
   
