
var compactList = function(list) {
	var compactedList = [];
	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		if (item != undefined && item != null) {
			compactedList.push(item);
		}
	}
	return compactedList;
}

Buffer.smarterConcat = function(list, totalLength) {
	return this.concat(compactList(list), totalLength);
}
