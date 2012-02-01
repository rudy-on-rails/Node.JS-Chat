var activeSessions = require('./ActiveSessions.js');
var chatSession = require('./chatSession.js')

exports.chatSessionService = function(){	
	this.startNewChatSession = function(nickName){
		cSession = new chatSession(nickName, generateChatUniqueId());		
		activeSessions.register(cSession);
	}
};

var generateChatUniqueId = function(){
	 return Math.floor(Math.random()*99999999999).toString()
}
