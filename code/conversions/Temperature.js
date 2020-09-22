//Our temperature class handles all temperature related conversions
class Temperature {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    //Our standard conversion is celcius, so we try to convert all selection to celcius
    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion
        switch (this.unit.toLowerCase()) {
            case "celcius": return quantity;
            case "kelvin": return quantity - 273.15;
            case "fahrenheit": return ((quantity - 32) / 9) * 5;
            default: return null;
        }
    }

    /*From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10*/
    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "celcius": res += "," +getPreciseNumber(quantity,precision) + " °C"; break;
                case "kelvin": {
                    let conv = quantity + 273.15;
                    res += "," + getPreciseNumber(conv, precision) + " °K";
                    break;
                }
                case "fahrenheit": {
                    let conv = (quantity / 5) * 9 + 32;
                    res += ","+ getPreciseNumber(conv, precision) + " °F";
                    break;
                }
            }
        });

        return res;
    }


}