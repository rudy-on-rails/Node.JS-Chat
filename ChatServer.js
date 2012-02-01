var HOST = "127.0.0.1";
var PORT = 1999;
var http = require('http');
var sessionService = require('./ChatSessionService.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
	var cSessionService = new sessionService.chatSessionService();
	cSessionService.startNewChatSession("Rudy");
	res.end("hihihi");

}).listen(PORT, HOST);