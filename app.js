// window.onload = () => {
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 991px)": function () {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        // invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=3500",
      },
    });
    if ($(window).width() > 991) {
      $(".w-button").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("href");
        var left = $(id)[0].offsetLeft;
        gsap.to("html", { scrollTo: left, duration: 1.5 });
      });
    }

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };
    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to("#svg-one", {
      x: -500,
      duration: 5,
      scrollTrigger: {
        trigger: ".anm-one",
        scrub: 1,
        start: "center 48%",
        end: "bottom 0%",
        // markers: true
      },
    });
  },
});

// loader
var loader = document.querySelector(".loader-container");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
