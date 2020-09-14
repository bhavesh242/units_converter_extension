class Time {
	constructor(unit, arr){
		this.unit = unit;
		this.arr = arr;
	}

	getStandardConversion(quantity) {
		switch(this.unit.toLowerCase()){
			case "seconds": return quantity;
			case "minutes": return quantity * 60;
			case "hours": return quantity * (60 * 60);
			case "days": return quantity * (24 * 60 * 60);
			default: return null;
		}
	}

	getAllConversions(quantity, precision){
		let res = "";
		this.arr.forEach((u) => {
			switch(u.toLowerCase()){
				case "seconds": {
					res += "," + getPreciseNumber(quantity, precision) + " sec";
					break;
				}
				case "minutes": {
					let conv = quantity / 60;
					res += ',' + getPreciseNumber(conv, precision) + " mins";
					break;
				}
				case "hours": {
					let conv = quantity / (60 * 60);
					res += ',' + getPreciseNumber(conv, precision) + " hours";
					break;
				}
				case "days": {
					let conv = quantity / (24 * 60 * 60);
					res += ',' + getPreciseNumber(conv, precision) + " days";	
					break;
				}
			}

		});
		return res;
	}
}
