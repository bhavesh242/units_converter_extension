
/*
    This a comprehensive array of all units that will be recognized by the chrome extenison
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
        units: "seconds",
        type: "time",
        aliases: ["seconds", "sec", "s"]
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
        aliases: ["grams", "gms"]
    },
	{
        unit: "pounds",
        type: "mass",
        aliases: ["pounds", "lbs"]
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
    }
]


