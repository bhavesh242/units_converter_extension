async function get_conversions(selection) {
    //Regular expression to match the numerical part and optional space
    const numSpace_RE = new RegExp(/((^[\-−]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?))\s*/);
    let result = "";
    UNITS.forEach((unitObject) => {
        let aliases = unitObject.aliases.sort(descending_length);
        for (let i = 0; i < aliases.length; i++) {
            var measure_RE
            //condition to handle PRE_SYMBOLS correctly in our generalized regex expression
            if (PRE_SYMBOLS.has(aliases[i])) {
                let s = '((^' + '\\' + aliases[i] + '\\s*[\\-−]?(?:\\d+|\\d{1,3}(?:,\\d{3})+)(?:(\\.|,)\\d+)?))\\s*'
                measure_RE = RegExp(s, "i");
            }
            else {
                measure_RE = RegExp(numSpace_RE.source + aliases[i] +"$", "i");
            }
            // console.log(measure_RE)
            var matches = selection.match(measure_RE);
            if (matches != null && matches[0] != null) {
                // let quantity = eval(matches[1].replaceAll(",", "").replace("−", "-"));
                matches = matches[1].toLowerCase();
                // let quantity=matches.replace(aliases[i],'')
                let quantity = eval(matches.replace(aliases[i], '').replaceAll(",", "").replace("−", "-"));
                // console.log(quantity)
                let precision = getPrecision(Number(quantity));
                // console.log(unitObject.type,unitObject.unit)
                let conversion_class = get_conversion_class(unitObject.type, unitObject.unit);
                // console.log(conversion_class)
                if (unitObject.type == "currency") {
                result= (async () => {
                    let std_converison = await conversion_class.getStandardConversion(quantity, precision)
                    return await conversion_class.getAllConversions(Number(std_converison), precision);
                })();
                // console.log(result)
                }
                else {
                    let std_converison = conversion_class.getStandardConversion(quantity, precision)
                    result = conversion_class.getAllConversions(Number(std_converison), precision);
                }
            }
        }
    });
    return result;
}