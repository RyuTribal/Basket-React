import $ from "jquery";

$(document).ready(function() {
  loadAll();
  $(".Home").click(function() {
    loadAll();
  });
});

export const loadAll = () => {
  var ammount = 0;
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
            $(
              '<img class="thumbnail" src="data:image/png;base64,' +
                response.thumbnail +
                '">'
            );
          },
          error: function() {}
        });
      }
    },
    error: function() {}
  });
};
