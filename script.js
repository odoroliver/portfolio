document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
    });
    document.getElementById("nav-links").classList.remove("active");
    document.getElementById("nav-toggle").classList.remove("active");
  });
});

document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
  this.classList.toggle("active");
});
