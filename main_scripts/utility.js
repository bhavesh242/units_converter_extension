function descending_length(a,b){
    return b.length - a.length;
}

function matches_filter(currentUnit){
    return function(element){
        return element.toLowerCase()!=currentUnit.toLowerCase();
    } 
}

function get_possible_conversions_list(type, currentUnit){
    return POPULAR_UNITS[type].filter(matches_filter(currentUnit))
}
