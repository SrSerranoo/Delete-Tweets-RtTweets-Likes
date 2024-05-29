(function () {
var delLikes = function () {
  console.log("Deleting likes...");
  window.scrollBy(0, 10000);
  document.querySelectorAll('[data-testid="unlike"]').forEach(function (v, _, _) {
    v.click();
  });
  setTimeout(delLikes, 1000);
};

delLikes();
})();
