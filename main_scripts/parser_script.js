function get_conversions(selection){

    //Regular expression to match the numerical part and optional space
    const numSpace_RE = new RegExp(/((^[\-−]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?))\s*/);
    let result="";
    let measure_RE;
    let quantity;
    UNITS.forEach((unitObject) =>{
        let aliases = unitObject.aliases.sort(descending_length);
        for(let i=0;i<aliases.length;i++){
            measure_RE = RegExp(numSpace_RE.source + aliases[i], "i");
            let matches = selection.match(measure_RE);
            if(matches != null && matches[i]!=null){
                quantity = eval(matches[1].replaceAll(",","").replace("−", "-"));
                let possible_conversions =  get_possible_conversions_list(unitObject.type, unitObject.unit);
                console.log(possible_conversions)
            }
        }
    });
}
