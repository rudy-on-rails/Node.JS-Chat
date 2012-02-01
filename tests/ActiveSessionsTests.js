var assert = require('assert');
var activeSessions = require('../ActiveSessions.js');
var chatSession = require('../chatSession.js')

function beforeEach(){
	cSession = new chatSession("Me","1234");
	activeSessions.register(cSession);
}

function register_ActiveSessions_ShouldStoreTheSession(beforeEachfn) {	
	beforeEachfn();
	assert.equal(1,activeSessions.numberOfActiveSessions());
}

function getSession_ActiveSessions_ShouldReturnStoredSession(beforeEachfn) {	
	beforeEachfn();
	assert.equal("Me",activeSessions.getSession("1234").getNickName());
}

function CallTests(){	
	register_ActiveSessions_ShouldStoreTheSession(beforeEach);
	getSession_ActiveSessions_ShouldReturnStoredSession(beforeEach);	
	console.log("All tests ran without problems!")
}

CallTests();

