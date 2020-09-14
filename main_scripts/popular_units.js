
/*
    POPULAR UNITS is a map that stores all the popular units for each unit type
    Example : The some popular units for length type are : meters, kilometers, miles
*/

const POPULAR_UNITS = {
    "length": ["meters", "miles", "kilometers", "centimeters", "millimeters", "yard", "feet", "inch", "furlong", "chain"],
    "mass": ["grams", "kilograms", "pounds"],
    "temperature": ["celcius", "fahrenheit", "kelvin"],
    "currency": ["usd", "eur", "gbp", "inr", "jpy", "cad","aud","chf"],
    "time": ["seconds", "minutes", "hours", "days"],
}

const PRE_SYMBOLS = new Set(["$", "₹", "€", "£", "¥", "Can$", "C$", "CA$", "A$", "AU$"])
