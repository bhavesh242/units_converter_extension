class Currency {
    constructor(unit, arr) {
        this.unit = unit;
        this.arr = arr;
    }

    getData(q) {
        return fetch('https://free.currconv.com/api/v7/convert?apiKey=dd3d6c25f66defad1e04&q=' + q)
            .then(response => response.json())
            .then(data => data.results)
    }

    async getStandardConversion(quantity) {
        let rate;
        switch (this.unit.toLowerCase()) {
            case "usd":
                return quantity;
            case "eur":
                rate = await this.getData('EUR_USD').then(function (d) {
                    return d['EUR_USD'].val
                })
                return rate * quantity
            case "gbp":
                rate = await this.getData('GBP_USD').then(function (d) {
                    return d['GBP_USD'].val
                })
                return rate * quantity
            case "inr":
                rate = await this.getData('INR_USD').then(function (d) {
                    return d['INR_USD'].val
                })
                return rate * quantity
            default:
                return null

        }
    }

    async getAllConversions(quantity, precision) {
        let res = ""
        let factor=1
        for (let i=0;i<this.arr.length;i++) {
            // console.log(this.arr[i])
            switch (this.arr[i].toLowerCase()) {
                case "usd":
                    res+=",$ "+getPreciseNumber(quantity, precision);
                    break
                case "eur":
                    factor = await this.getData('USD_EUR').then(function (d) {
                        return d['USD_EUR'].val
                    })
                    res+=",€ "+getPreciseNumber(factor * quantity, precision)
                    break
                case "gbp":
                    factor = await this.getData('USD_GBP').then(function (d) {
                        return d['USD_GBP'].val
                    })
                    res+=",£ "+getPreciseNumber(factor * quantity, precision)
                    break
                case "inr":
                    factor = await this.getData('USD_INR').then(function (d) {
                        return d['USD_INR'].val
                    })
                    res+=",₹ "+getPreciseNumber(factor * quantity, precision)
            }
        }
        console.log(res)
        return res
    }


}