
/*
    This a comprehensive array of all units that will be recognized by the chrome extension
    Each Unit will have 3 attributes : 
    1) unit : this the name of the unit that we plan to recongnize
    2) type : what type of attribute the unit represents : LENGTH, TIME, CURRENCY etc.
    3) aliases : what other representations the unit has 
*/

const UNITS = [
    {
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters"]
    },
    {
        unit: "kilograms",
        type: "mass",
        aliases: ["kilograms", "kilogram", "kgs", "kg"]
    },
    {
        unit: "celcius",
        type: "temperature",
        aliases: ["celcius", "c", "°c"]
    },
    {
        unit: "fahrenheit",
        type: "temperature",
        aliases: ["fahrenheit", "f", "°f"]
    },
    {
        unit: "kelvin",
        type: "temperature",
        aliases: ["kelvin", "k", "°k"]
    },
	{
        unit: "grams",
        type: "mass",
        aliases: ["grams", "gram", "gms", "gm"]
    },
	{
        unit: "pounds",
        type: "mass",
        aliases: ["pounds", "pound", "lbs", "lb"]
    },
	{
        unit: "tonne",
        type: "mass",
        aliases: ["metric tons", "metric ton", "tonnes", "tonne"]
    },
	{
        unit: "milligrams",
        type: "mass",
        aliases: ["milligrams", "milligram", "mgs", "mg"]
    },
	{
        unit: "micrograms",
        type: "mass",
        aliases: ["micrograms", "microgram"]
    },
	{
        unit: "ounces",
        type: "mass",
        aliases: ["ounces", "ounce", "ozs", "oz"]
    },
	{
        unit: "ton",
        type: "mass",
        aliases: ["tons", "ton"]
    },
    {
        unit: "USD",
        type: "currency",
        aliases: ["dollars", "dollar", "USD", "$"]
    },
    {
        unit: "EUR",
        type: "currency",
        aliases: ["euros", "euro", "EUR", "€"]
    },
    {
        unit: "GBP",
        type: "currency",
        aliases: ["pounds", "pound", "GBP", "£"]
    },
    {
        unit: "INR",
        type: "currency",
        aliases: ["rupees", "rupee", "INR", "₹"]
    },
    {
        unit: "CAD",
        type: "currency",
        aliases: ["Can$", "C$", "CA$","CAD"]
    },
    {
        unit: "JPY",
        type: "currency",
        aliases: ["¥","yen","yuan"]
    },
    {
        unit: "AUD",
        type: "currency",
        aliases: ["AU$","A$","AUD"]
    },
    {
        unit: "CHF",
        type: "currency",
        aliases: ["franc","francs","CHF"]
    },
    {
        unit: "meters",
        type: "length",
        aliases: ["meter", "meters", "m", "mts"]
    },
    {
        unit: "kilometers",
        type: "length",
        aliases: ["kilometer", "kilometers", "km", "kms"]
    },
    {
        unit: "miles",
        type: "length",
        aliases: ["miles", "mile", "mi"]
    },
    {
        unit: "centimeters",
        type: "length",
        aliases: ["centimeter", "centimeters", "cm", "cms"]
    },
    {
        unit: "millimeters",
        type: "length",
        aliases: ["millimeter", "millimeters", "mm", "mms"]
    },
    {
        unit: "yard",
        type: "length",
        aliases: ["yard", "yards", "yd", "yds"]
    },
    {
        unit: "feet",
        type: "length",
        aliases: ["foot", "feet", "ft", "fts"]
    },
    {
        unit: "inch",
        type: "length",
        aliases: ["inches", "inch", "\""]
    },
    {
        unit: "furlong",
        type: "length",
        aliases: ["furlong", "furlongs", "fur", "furss"]
    },
    {
        unit: "chain",
        type: "length",
        aliases: ["chain", "chains"]
    },
    {
        unit: "seconds",
        type: "time",
        aliases: ["sec", "s", "secs", "second", "seconds"]
    },
    {
        unit: "minutes",
        type: "time", 
        aliases: ["mins", "min", "minute", "minutes"]
    },
    {
        unit: "hours",
        type: "time",
        aliases: ["hrs", "h", "hour", "hours"]
    },
    {
        unit: "days",
        type: "time",
        aliases: ["day", "days"]
    },
    {
        unit: "weeks",
        type: "time",
        aliases: ["week", "wks", "weeks"]
    }
]


