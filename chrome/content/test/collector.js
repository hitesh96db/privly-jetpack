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

  $.ajax({
    url: "http://127.0.0.1:1337/",
    type: 'POST',
    crossOrigin: true,
    data: JSON.stringify(window.__coverage__),
    success: function (json, textStatus, jqXHR) {
      console.log(json);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}
