$(".fa-chevron-circle-right").on("click", function (e) {
  $(".contenedor-cards").animate(
    {
      scrollLeft: 700,
    },
    700
  );
  e.preventDefault();
});

$(".fa-chevron-circle-left").on("click", function (e) {
  $(".contenedor-cards").animate(
    {
      scrollLeft: -700,
    },
    700
  );
  e.preventDefault();
});
