function get_conversions(selection) {

    //Regular expression to match the numerical part and optional space
    const numSpace_RE = new RegExp(/((^[\-−]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?))\s*/);
    let result = "";
    UNITS.forEach((unitObject) => {
        let aliases = unitObject.aliases.sort(descending_length);
        for (let i = 0; i < aliases.length; i++) {
            let measure_RE = RegExp(numSpace_RE.source + aliases[i], "i");
            let matches = selection.match(measure_RE);
            if (matches != null && matches[i] != null) {
                let quantity = eval(matches[1].replaceAll(",", "").replace("−", "-"));
                let precision = getPrecision(quantity);
                let conversion_class = get_conversion_class(unitObject.type, unitObject.unit);
                let std_converison = conversion_class.getStandardConversion(quantity, precision);
                result+= conversion_class.getAllConversions(std_converison, precision);
            }
        }
    });
    return result;
}
