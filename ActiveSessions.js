module.exports = {
	activeSessionsList: {},
	register: function(session){
		this.activeSessionsList[session.getId()] = session;		
	},
	numberOfActiveSessions: function(){
		return Object.keys(this.activeSessionsList).length
	},
	getSession: function(sessionId){
		return this.activeSessionsList[sessionId];
	},
	removeSession: function(sessionId){
		delete this.activeSessionsList.sessionId;
	}
}