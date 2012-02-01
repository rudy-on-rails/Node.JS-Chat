var activeSessions = require('./ActiveSessions.js');
var chatSession = require('./chatSession.js')

exports.chatSessionService = function(){	
	this.startNewChatSession = function(nickName){
		cSession = new chatSession(nickName, generateChatUniqueId());		
		console.log("new connection " + cSession.getId());		
		activeSessions.register(cSession);
	},
	this.sendMessage = function(message, sessionId){
		var session = activeSessions.getSession(sessionId);
		if (session)
			throw "Session could not be found!";
		session.receiveMessage(message);
	}
};

var generateChatUniqueId = function(){
	var newDate = new Date;
	return newDate.getTime().toString()
}
