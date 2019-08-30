import $ from "jquery";
import { callbackify } from "util";

export const loadAll = () => {
  var ammount = 0;
  var counter = 0;
  $.ajax({
    type: "GET",
    url: "https://learn-sports-api.herokuapp.com/api/1.0/length",
    dataType: "json",
    success: function(response) {
      ammount = response.length;
      for (var i = 0; i < ammount; i++) {
        $.ajax({
          type: "POST",
          url: "https://learn-sports-api.herokuapp.com/api/1.0/get",
          dataType: "json",
          async: false,
          data: {
            itteration: i
          },
          success: function(response) {
            console.log(response);
            if (i == 0) {
              $("#me-and-ball").attr(
                "src",
                "data:image/png;base64," + response.thumbnail
              );
              $("#me-and-ball")
                .parent()
                .find(".group-title")
                .text(response.title);
            } else {
              if (counter == 2) {
                counter = 0;
              }
              if (counter == 0) {
                $(".grid-container").append(
                  $('<div class="row">').append(
                    $(
                      '<div class="level-two col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">'
                    ).append(
                      $('<figure class="img-container">').append(
                        $(
                          '<img class="group-thumb" src="data:image/png;base64,' +
                            response.thumbnail +
                            '">'
                        ),
                        $('<figcaption class="title-container">').append(
                          $('<h5 class="group-title">').text(response.title)
                        )
                      )
                    )
                  )
                );
              } else if (counter == 1) {
                $(".row:last").append(
                  $(
                    '<div class="level-two col-xs-12 col-sm-12 col-md-12 col-lg-6 img-grid">'
                  ).append(
                    $('<figure class="img-container">').append(
                      $(
                        '<img class="group-thumb" src="data:image/png;base64,' +
                          response.thumbnail +
                          '">'
                      ),
                      $('<figcaption class="title-container">').append(
                        $('<h5 class="group-title">').text(response.title)
                      )
                    )
                  )
                );
              }
              counter++;
            }
          },
          error: function() {},
          complete: function(){
            $('.loader').css("display", "none")
          }
        });
      }
    },
    error: function() {}
  });
};
