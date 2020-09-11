class Temperature {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    getStandardConversion(quantity) {
        switch (this.unit.toLowerCase()) {
            case "celcius": return quantity;
            case "kelvin": return quantity - 273.15;
            case "fahrenheit": return ((quantity - 32) / 9) * 5;
            default: return null;
        }
    }

    getAllConversions(quantity, precision) {

        let res = "";
        this.arr.forEach((u) => {
            switch (u.toLowerCase()) {
                case "celcius": res += "," +quantity + " °C"; break;
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