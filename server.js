var http = require('http');

var istanbul = require('istanbul'),
    collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter(),
    sync = false;

http.createServer(function (req, res) {
  if (req.method === "POST") {
    req.on("data", function(chunk) {
      var obj1 = JSON.parse(chunk.toString());
      var token = obj1.token;
      var coverage = obj1.coverage;
      collector.add(coverage);
      reporter.add('text');
      reporter.addAll([ 'lcov', 'clover' ]);
      reporter.write(collector, sync, function () {
        console.log('All reports generated');
      });
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Posted!\n');
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Get Service!\n');
  }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
