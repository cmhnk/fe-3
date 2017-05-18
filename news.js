$(function() {
  var getNews = function(apiKey='REPLACE_WITH_SECRET_KEY') {
    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=' + apiKey,
      method: 'GET'
    }).then(function(data){
      num_articles = data.articles.length;
      console.log(num_articles);
      console.log(data.articles[0].title);
      $('.news').text(data.articles[0].title);
    }
  );
  }

  $('.load-news').on('click', function(event){
      getNews();
  });
});
