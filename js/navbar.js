$(document).ready(function() {
  $("a.about-btn").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("section.section-light").offset().top
      },
      1000
    );
  }),
    $("a.experience-btn").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("div.pimg2").offset().top
        },
        1000
      );
    }),
    $("a.projects-btn").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("div.pimg3").offset().top
        },
        1000
      );
    }),
    $("a.passion-btn").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("div.pimg4").offset().top
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
