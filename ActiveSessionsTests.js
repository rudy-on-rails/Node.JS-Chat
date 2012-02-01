var assert = require('assert');
var activeSessions = require('./ActiveSessions.js');
var chatSession = require('./chatSession.js')

// Adição de novo sessão de usuário em sessões ativas deve adicionar a sessão em 'sessões ativas'
function register_ActiveSessions_ShouldStoreTheSession() {
	cSession = new chatSession("Me","1234");
	activeSessions.register(cSession);
	assert.equal(1,activeSessions.numberOfActiveSessions());
}

function getSession_ActiveSessions_ShouldReturnStoredSession() {
	cSession = new chatSession("Me","1234");
	activeSessions.register(cSession);	
	assert.equal("Me",activeSessions.getSession("1234").getNickName());
}

function CallTests(){
	register_ActiveSessions_ShouldStoreTheSession();
	getSession_ActiveSessions_ShouldReturnStoredSession();
	console.log("All tests ran without problems!")
}

CallTests();

