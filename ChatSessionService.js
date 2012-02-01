var activeSessions = require('./ActiveSessions.js');
var chatSession = require('./chatSession.js')

exports.chatSessionService = function(){	
	this.startNewChatSession = function(nickName){
		cSession = new chatSession(nickName, generateChatUniqueId());		
		console.log(generateChatUniqueId());
		activeSessions.register(cSession);
	}
};

var generateChatUniqueId = function(){
	var newDate = new Date;
	return newDate.getTime().toString()
}
