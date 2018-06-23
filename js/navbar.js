$(document).ready(function() {
  $("div.box").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("div.pimg2").offset().top
      },
      1000
    );
  }),
    $("div.pimg2").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("div.pimg3").offset().top
        },
        1000
      );
    }),
    $("div.pimg3").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("div.pimg4").offset().top
        },
        1000
      );
    });
  $("div.pimg4").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("div.pimg1").offset().top
      },
      1000
    );
  });
});

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
