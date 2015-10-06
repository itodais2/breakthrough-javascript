;(function(){
  var $pages;

  function urlChangeHandler(){
    var pageid = parseUrl(location.hash);
    $pages
      .fadeOut(400)
      .filter(":visible") 
      .promise()
      .then(function () {
        $pages
          .hide()
          .detach()
          .filter(".page"+pageid)
          .appendTo("article")
          .slideToggle(1500);
      });
  };

  function parseUrl(url) {
    return url.slice(1) || 1;
  }

  function init() {
    $pages = $("[data-role='page']").detach();
    $(window).on("hashchange", urlChangeHandler);
  }
  init();

  $(window).on("hashchange", urlChangeHandler).trigger("hashchange");
})();
