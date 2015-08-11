function sendMe() {

  window.__coverage__ = {};

  // Collect coverage info from every file
  for (var property in g) {
    if (g.hasOwnProperty(property)) {
      try {
        var info = g[property].coverage();
      } catch (ignore) {}
      if (typeof info !== "undefined") {
        window.__coverage__[info["path"]] = info;
      }
    }
  }

  var data = {
    coverage: window.__coverage__,
    token: g.ls.getItem("REPO_TOKEN"),
  };
  $.ajax({
    //url: "http://128.199.130.166/",
    url: "http://127.0.0.1:1337/",
    type: 'POST',
    crossOrigin: true,
    data: JSON.stringify(data),
    success: function (json, textStatus, jqXHR) {
      console.log(json);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}
