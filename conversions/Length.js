/*Our Length class handles all length related conversions. Currently implemented conversions are 
[meters, miles, kilometers, centimeters, millimeters, yard, feet, inch, furlong, chain]*/
class Length {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    //Our standard conversion is meters, so we try to convert all selection to meters
    getStandardConversion(quantity) {
        //We use a switch case to make appropriate conversion
        switch (this.unit.toLowerCase()) {
            case "meters": return quantity;
            case "miles": return quantity * 1609.34;
            case "kilometers": return quantity * 1000;
            case "centimeters": return quantity / 100;
            case "millimeter": return quantity / 1000;
            case "yard": return quantity / 1.094;
            case "feet": return quantity / 3.281;
            case "inch": return quantity / 39.3701;
            case "furlong": quantity * 201 ;
            case "chain": return quantity * 20.1168;
            default: return null;
        }
    }

    /*From our standard conversion we try to convert into all the other units specified in arr property of this class
    with a precision no more than 10*/
    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "meters": {
                    res += "," +getPreciseNumber(quantity,precision) + " m"; 
                    break;
                }
                case "miles": {
                    let conv = quantity / 1609;
                    res += "," + getPreciseNumber(conv, precision) + " mi";
                    break;
                }
                case "kilometers": {
                    let conv = quantity / 1000;
                    res += ","+ getPreciseNumber(conv, precision) + " km";
                    break;
                }
                case "centimeters": {
                    let conv = quantity * 100;
                    res += ","+ getPreciseNumber(conv, precision) + " cm";
                    break;
                }
                case "millimeters": {
                    let conv = quantity * 1000;
                    res += ","+ getPreciseNumber(conv, precision) + " mm";
                    break;
                }
                case "yard": {
                    let conv = quantity * 1.09361;
                    res += ","+ getPreciseNumber(conv, precision) + " yd";
                    break;
                }
                case "feet": {
                    let conv = quantity * 3.28084;
                    res += ","+ getPreciseNumber(conv, precision) + " ft";
                    break;
                }
                case "inch": {
                    let conv = quantity * 39.3701;
                    res += ","+ getPreciseNumber(conv, precision) + " inch";
                    break;
                }
                case "furlong": {
                    let conv = quantity / 201;
                    res += ","+ getPreciseNumber(conv, precision) + " fur";
                    break;
                }
                case "chain": {
                    let conv = quantity / 20.117;
                    res += ","+ getPreciseNumber(conv, precision) + " chain";
                    break;
                }
            }
        });

        return res;
    }


}
