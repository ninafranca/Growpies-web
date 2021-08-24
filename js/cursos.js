const videoFilters = document.getElementById("vid-filters-container");

const collapseFilters = () => videoFilters.classList.toggle("uncollapsed");

if (window.matchMedia("(min-width: 768px)").matches) {
  videoFilters.classList.remove("uncollapsed");
} else {
  videoFilters.classList.add("uncollapsed");
}

const applyFilter = () => {
  const coursesCards = document.querySelectorAll("div.vidCard");
  const vidCategoryFilter = document.getElementById("video-category");
  console.log("click", vidCategoryFilter.value);
  vidCategoryFilter.value === "Todos"
    ? coursesCards.forEach((item) =>
        item.classList.contains("noDisponible")
          ? item.classList.remove("unavailable")
          : ""
      )
    : coursesCards.forEach((item) =>
        item.classList.contains("noDisponible")
          ? item.classList.add("unavailable")
          : ""
      );
};

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
