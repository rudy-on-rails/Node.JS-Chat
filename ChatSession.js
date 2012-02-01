module.exports = function(nickName, Id){
	this.Id = Id;
	this.nickName = nickName;	
	this.getId = function(){return this.Id}
	this.getNickName = function(){return this.nickName}
}