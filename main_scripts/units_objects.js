
/*
    This a comprehensive array of all units that will be recognized by the chrome extenison
    Each Unit will have 3 attributes : 
    1) unit : this the name of the unit that we plan to recongnize
    2) type : what type of attribute the unit represents : LENGTH, TIME, CURRENCY etc.
    3) aliases : what other representations the unit has 
*/ 

const UNITS = [
    {
        unit : "meters",
        type : "length",
        aliases:["meter", "meters"]
    },
    {
        unit : "kilograms",
        type : "mass",
        aliases:["kilograms", "kgs"]
    },
    {
        units : "seconds",
        type : "time",
        aliases : ["seconds", "sec", "s"]
    }
]


