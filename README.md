# Delete Tweets, Retweets, and Likes [Work 1/June/2024]

This project provides JavaScript snippets to delete tweets, retweets, and likes from your Twitter profile efficiently.

## Delete Tweets and Retweets Quickly

1. Go to your Twitter profile: `https://x.com/[YOUR_USERNAME]`
2. Open the browser console (F12)
3. Paste the following code and press Enter:

    ```javascript
    (function () {
      var delTweets = function () {
        var tweetsRemaining = document.querySelectorAll('[role="heading"]+div')[1].textContent;
        console.log("Remaining: ", tweetsRemaining);
        window.scrollBy(0, 10000);
        document.querySelectorAll('[aria-label="More"]').forEach(function (v, _, _) {
          v.click();
          document.querySelectorAll("span").forEach(function (v2, i2, a2) {
            if (v2.textContent === "Delete") {
              v2.click();
              document.querySelectorAll('[data-testid="confirmationSheetConfirm"]').forEach(function (v3, i3, a3) {
                v3.click();
              });
            } else {
              document.body.click();
            }
          });
        });
        document.querySelectorAll('[data-testid="unretweet"]').forEach(function (v, _, _) {
          v.click();
          document.querySelectorAll('[data-testid="unretweetConfirm"]').forEach(function (v2, _, _) {
            v2.click();
          });
        });
        setTimeout(delTweets, 0);
      };

      delTweets();
    })();
    ```

## Delete Tweets

1. Go to your Twitter profile: `https://x.com/[YOUR_USERNAME]`
2. Open the browser console (F12)
3. Paste the following code and press Enter:

    ```javascript
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
    ```

## Delete Retweets

1. Go to your Twitter profile: `https://x.com/[YOUR_USERNAME]`
2. Open the browser console (F12)
3. Paste the following code and press Enter:

    ```javascript
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
    ```

## Delete Likes

1. Go to your Twitter likes page: `https://x.com/[YOUR_USERNAME]/likes`
2. Open the browser console (F12)
3. Paste the following code and press Enter:

    ```javascript
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
    ```

