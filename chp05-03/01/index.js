myRouter.add("1", $(".page1"), function ($el, action, prev, next) {
  alert("hello");
  return action();
}, function ($el, action, prev, next) {
  alert("bye");
  return action();
});

function createEnterFunc(path) {
  return function enter($el, action, prev, next) {
    return $.ajax({
      url: path,
      dataType: "html"
    }).then(function (d) {
      var content = $(d).find("[data-role=page].inner");
      $el.html(content);
      return action();
    });
  }
}

myRouter.add("2", $("<section class='page'/>"), createEnterFunc("./page2.html"));
myRouter.add("3", $("<section class='page'/>"), createEnterFunc("./page3.html"));
myRouter.add("4", $("<section class='page'/>"), createEnterFunc("./page4.html"));

$("[data-role='page']").detach();

myRouter.start();
