var resultHTML = '<section class="result"><img src=""/><div class="label"><p class="title"></p><p href="#" class="seller"></p><p class="price"></p></div></section>';
var $container = $('.container');

var settings = {
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=5j9tq3jewb2f9h9zlk988uzz&keywords=swant&includes=Images,Shop',
  type: 'GET',
  success: function renderResults(response) {

    response.results.forEach(function(result, i, responseArr){
      var $result = $(resultHTML);
      $result.children('img').attr('src', result.Images[0].url_170x135);
      $container.append($result);
    });
  },
  dataType: 'jsonp',
};

$.ajax(settings);
