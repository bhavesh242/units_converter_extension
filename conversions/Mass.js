//Our mass class handles all mass related conversions
class Mass {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    //Our standard conversion is Kilograms, so we try to convert all selection to Kilograms
    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion
        switch (this.unit.toLowerCase()) {
            case "kilograms": return quantity;
            case "grams": return quantity / 1000;
            case "pound": return quantity / 2.20462262;
			case "tonne": return quantity * 1000;
			case "milligrams": return quantity / 1000000;
			case "micrograms": return quantity / 1000000000;
            default: return null;
        }
    }

    /*From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10*/
    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "kilograms": res += "," +getPreciseNumber(quantity,precision) + " Kgs"; break;
                case "grams": {
                    let conv = quantity * 1000;
                    res += "," + getPreciseNumber(conv, precision) + " gms";
                    break;
                }
                case "pound": {
                    let conv = quantity * 2.20462262;
                    res += ","+ getPreciseNumber(conv, precision) + " lbs";
                    break;
                }
				case "tonne": {
                    let conv = quantity / 1000;
                    res += "," + getPreciseNumber(conv, precision) + " tonnes";
                    break;
                }
				case "milligrams": {
                    let conv = quantity * 1000000;
                    res += "," + getPreciseNumber(conv, precision) + " milligrams";
                    break;
                }
				case "micrograms": {
                    let conv = quantity * 1000000000;
                    res += "," + getPreciseNumber(conv, precision) + " micrograms";
                    break;
                }
            }
        });

        return res;
    }


}