var count = 0;

$(function() {
  var getNews = function(apiKey='SECRET_API_KEY') {
    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=' + apiKey,
      method: 'GET'
    }).then(function(data){
      num_articles = data.articles.length;
      console.log(num_articles);
      console.log(data.articles[0].title);
      if (count <= num_articles) {
        // show different headline til we run out of new headlines
        index = count - 1
      } else {
        //  continue to display last headline
        index = num_articles - 1
      }
      $('.news').text(data.articles[index].title);
    });
  }

  $('.load-news').on('click', function(event){
      getNews();
      count++;
      console.log(count)
  });
});
