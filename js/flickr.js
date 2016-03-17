$(document).ready(function(){
    $('button').click(function(){
      $('button').removeClass('selected');
      $(this).addClass('selected');
      // AJAX part
      var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
      var animal = $('this').text();
      var flickrOptions = {
        tags: animal,
        format: "json"
      };
      $.getJSON(flickrAPI, flickrOptions,
                function displayPhotos(data){
                  var photoHTML = '<ul>';
                  $.each(data.items, function(i, photo){
                      photoHTML += '<li class="grid-25 tablet-grid-50">';
                      photoHTML += '<a href="' + photo.link + '" class="image">';
                      photoHTML += '<img src="' + photo.media.m + '">';
                  }); // end loop
                  photoHTML += '</ul>';
                  $('#photos').html(photoHTML)
                }); // end getJSON
    }); // end click button
}); // end ready
