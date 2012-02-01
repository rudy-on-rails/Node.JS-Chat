module.exports = function(nickName, Id, onMessageReceived){
	this.Id = Id;
	this.nickName = nickName;	
	this.getId = function(){return this.Id}
	this.getNickName = function(){return this.nickName}
	this.receiveMessage = function(message){
		if (!onMessageReceived)
			onMessageReceived(message);					
	}
}