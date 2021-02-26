
const DOMAIN = 'http://newsapi.org/';
const apiKey = '590e2f3ad3a7403499ccbcd8a5986d5f';
const standardUrl = `${DOMAIN}v2/top-headlines?apiKey=${apiKey}`




async function newsWorks(value) {
  let drop = document.querySelector('#drop').value
  let news = `${standardUrl}&q=${value}&category=${drop}`;
  console.log(drop);

  try {
    let response = await axios.get(news);
    
    for (let i = 0; i < response.data.articles.length; i++) {
      
      showNews(response.data.articles[i]);
      // noData(response.data.articles[i]);
      console.log(response.data.articles[i]);
    }
    
    return response;
  } catch (err) {
    console.error(err);
  }
};






function showNews(data) {
  let articles = document.querySelector('.urls')
  


  const newData = `
    <h3><a href="${data.url}" target="_blank" id="webpage">${data.title}</a></h3>
    <p id="author">${data.author}</p>
    <img id="image" src="${data.urlToImage}"/>
    <h4 id="desc">${data.description}</h4>
    <hr/>
  `
  
  articles.insertAdjacentHTML('beforeend', newData);
};



// function noData(cukes) {
//   let image = document.querySelector('#image')
//   let author = document.querySelector('#author')
//   if (cukes.urlToImage === null) {
//     image.outerHTML = '<h4>No IMG Found</h4>';
//   } 
//   if (cukes.author === null) {
//     author.innerHTML = 'No Author Found';
//   }
//   console.log(cukes.urlToImage);
// }



let btn = document.querySelector('#push')
btn.addEventListener('submit', (e)=> {
  e.preventDefault();
  removeNews()
  let input = document.querySelector('#input').value
  newsWorks(input)
})




function removeNews() {
  const remove = document.querySelector('.urls');
  while (remove.lastChild) {
    remove.removeChild(remove.lastChild)
  }

};


let footer = document.querySelector('footer')
// resource https://javascriptinfo.com/view/4856994/how-to-make-a-div-appear-and-disappear-on-scroll
$(window).scroll(function() {
  let currentHeight = $(window).scrollTop();
  if (currentHeight > 200) {
    footer.style.visibility = 'hidden';
  }
  else {
    footer.style.visibility = 'visible';
  }
});
