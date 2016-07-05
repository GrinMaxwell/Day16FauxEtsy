var resultHTML = '<a class="result" href=""><img src=""/><div class="label"><p class="title"></p><p class="seller"></p><p class="price"></p></div></a>';

var $container = $('.container');
var $header = $('header');
var $searchBar = $('input');

var url1 = 'https://api.etsy.com/v2/listings/active.js?api_key=5j9tq3jewb2f9h9zlk988uzz&keywords=';
var searchTerm = 'swant';
var url2 = '&includes=Images,Shop';

// function search() {
// if (searchTerm) {

var settings = {
  url: (url1+searchTerm+url2),
  type: 'GET',
  success: function renderResults(response) {

    // var urlSplit = settings.url.split('=');
    // var searchTermArray = urlSplit[2].split('&');
    // var searchTerm = searchTermArray[0];
    $searchBar.attr('value', searchTerm);

    $('.num-results').text('"'+searchTerm+'" ('+response.count+' results)');

    response.results.forEach(function(result, i, responseArr){

      var $result = $(resultHTML);

      $result.attr('href', result.url);

      $result.children('img').attr('src', result.Images[0].url_170x135);

      $result.find('.title').text(result.title);
      $result.find('.seller').text(result.Shop.shop_name);

      $container.append($result);

    });
  },
  dataType: 'jsonp',
};



$.ajax(settings);

// }
// }

// $searchBar.keyup(function (evt) {
//   if(evt.keyCode == 13){
//     searchTerm = $searchBar.attr('value');
//     search();
//   }
// });
