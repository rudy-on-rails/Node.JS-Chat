var assert = require('assert');
var activeSessions = require('../ActiveSessions.js');
var chatSession = require('../chatSession.js')

function receiveMessage_ShouldCallCallbackArgumentFunctionWithMessageAndId(){	
	var a = function(messageReceived, Id){
		assert.equal("Hi", messageReceived);
		assert.equal("1234",Id);
	}
	cSession = new chatSession("Me","1234",a);
	cSession.receiveMessage("Hi");	
}

function CallTests(){	
	receiveMessage_ShouldCallCallbackArgumentFunctionWithMessageAndId();	
	console.log("All tests ran without problems!")
}

CallTests();

