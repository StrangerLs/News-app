// containers for API get info

const DOMAIN = 'https://newsapi.org/';
const apiKey = '590e2f3ad3a7403499ccbcd8a5986d5f';
const standardUrl = `${DOMAIN}v2/top-headlines?apiKey=${apiKey}`


// use of async function to get API and access info

async function newsWorks(value) {
  let drop = document.querySelector('#drop').value
  let news = `${standardUrl}&q=${value}&category=${drop}`;


  try {
    
    let response = await axios.get(news);


    for (let i = 0; i < response.data.articles.length; i++) {

      showNews(response.data.articles[i]);

    }

    return response;
  } catch (err) {
    console.error(err);
  }
};

// create data to append to page
function showNews(data) {
  let articles = document.querySelector('.urls')
  // resource https://www.youtube.com/watch?v=v2tJ3nzXh8I&t=41s
  const newData = `
    <h3><a href="${data.url ?? ""}" target="_blank" id="webpage">${data.title ?? "No Title"}</a></h3>
    <p id="author">${data.author ?? "No author"}</p>
    <img id="image" src="${data.urlToImage ?? "./no_image.jpeg"}"/>
    <h4 id="desc">${data.description ?? "No Description Found"}</h4>
    <hr/>
  `
  articles.insertAdjacentHTML('beforeend', newData);
};

// event listener for submit and input value
let btn = document.querySelector('#push')
btn.addEventListener('submit', (e) => {
  e.preventDefault();
  removeNews()
  let input = document.querySelector('#input').value
  newsWorks(input)
})

// removing old info from site 
function removeNews() {
  const remove = document.querySelector('.urls');
  while (remove.lastChild) {
    remove.removeChild(remove.lastChild)
  }
};

// removes the footer from page past a certain scroll point
// let footer = document.querySelector('footer')
// // resource https://javascriptinfo.com/view/4856994/how-to-make-a-div-appear-and-disappear-on-scroll
// $(window).scroll(function () {
//   let currentHeight = $(window).scrollTop();
//   if (currentHeight > 200) {
//     footer.style.visibility = 'hidden';
//   }
//   else {
//     footer.style.visibility = 'visible';
//   }
// });
