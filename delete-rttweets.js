(function () {
  var delRetweets = function () {
    console.log("Deleting retweets...");
    window.scrollBy(0, 10000);
    document.querySelectorAll('[data-testid="unretweet"]').forEach(function (v, _, _) {
      v.click();
      document.querySelectorAll('[data-testid="unretweetConfirm"]').forEach(function (v2, _, _) {
        v2.click();
      });
    });
    setTimeout(delRetweets, 1000);
  };

  delRetweets();
})();
