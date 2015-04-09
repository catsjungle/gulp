var http = require("http");

var httpObj = http.createServer(function (request, response) {
  console.log(request.url);
  var index = request.url.lastIndexOf('/'); 
  var pagename = request.url.substring(index+1);
  console.log('index:'+index+'pagename:'+ pagename);
  console.log('server:' + request.url);

  switch(pagename) {
    case 'index.html':
      response.write('index.html请求成功');
      break;
    default:
      response.write('不认识');
      break;
  } 
  response.end();
});

httpObj.listen(8080);
console.log('listen 8080');
