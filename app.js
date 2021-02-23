// Endpoint Data
const DOMAIN = 'http://cors-anywhere.herokuapp.com/http://newsapi.org/';
const apiKey = '590e2f3ad3a7403499ccbcd8a5986d5f';
const standardUrl = `${DOMAIN}v2/top-headlines?apiKey=${apiKey}`



// Async function/axios 
async function newsWorks(value) {
  let news = `${standardUrl}&q=${value}`;
  

  try {
    let response = await axios.get(news);
    console.log(response.data.articles);

    for (let i = 0; i < response.data.articles.length; i++) {
      console.log(response.data.articles[i]);
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
newsWorks('tesla')


// get user input from input box
// function showNews(data) {

// };



// event handler function



// removing info
// removeNews() {

// };



