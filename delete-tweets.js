(function () {
  var delTweets = function () {
    console.log("Deleting tweets...");
    window.scrollBy(0, 10000);
    document.querySelectorAll('[aria-label="More"]').forEach(function (v, _, _) {
      v.click();
      document.querySelectorAll("span").forEach(function (v2, _, _) {
        if (v2.textContent === "Delete") {
          v2.click();
          document.querySelectorAll('[data-testid="confirmationSheetConfirm"]').forEach(function (v3, _, _) {
            v3.click();
          });
        } else {
          document.body.click();
        }
      });
    });
    setTimeout(delTweets, 1000);
  };

  delTweets();
})();
