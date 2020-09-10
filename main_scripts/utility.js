/*
    The following file has all the utility funcitons that perform trivial yet important tasks
*/

//This is a sort function used to sort an array of string in descending order of string lengths
function descending_length(a,b){
    return b.length - a.length;
}


//This is a filtering function used by  get_possible_conversions_list to filter out the current unit itself
function matches_filter(currentUnit){
    return function(element){
        return element.toLowerCase()!=currentUnit.toLowerCase();
    } 
}

//For a given unit, this function returns all the popular units that it can be converted into except itself
function get_possible_conversions_list(type, currentUnit){
    return POPULAR_UNITS[type].filter(matches_filter(currentUnit))
}
