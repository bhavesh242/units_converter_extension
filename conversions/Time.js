class Time {
	constructor(unit, arr){
		this.unit = unit;
		this.arr = arr;
	}

	getStandardConversion(quantity) {
		switch(this.unit.toLowerCase()){
			case "seconds": return quantity;
			case "minutues": return quantity / 60;
			case "hours": return quantity / (60 * 60);
			case "days": return quantity / (24 * 60 * 60);
			default: return null;
		}
	}

}