const http = require("http");

// http.createServer(console.log("This Server is Running!")).listen(8080);

http
  .createServer(function (req, res) {
    if (req.url == "/test") {
      res.write("This is a Testing Path");
      res.end();
      return;
    }

    // res.json({
    //   msg: "This Server is Running!!!",
    // });
    res.write("This Server is Running!!");
    // console.log(req);
    // console.log("---------------");
    // console.log(res);
    res.end();
  })
  .listen(8080);
