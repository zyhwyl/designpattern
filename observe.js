function ObserveList(){
	this.obeserveList=[];
}

ObserveList.prototype.Add=function(obj){
	return this.obeserveList.push(obj);
}

ObserveList.prototype.Empty=function(){
	this.obeserveList=[];
}
