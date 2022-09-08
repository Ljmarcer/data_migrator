
db = db.getSiblingDB("db");
var date_max = new Date();
date_max.setUTCHours(date_max.getHours())
date_max.setMonth(date_max.getMonth() - 2)
date_max = date_max.toISOString().slice(0, -5)
printjson( db.getCollection('collection').find({"time":{'\$lte': date_max}}).toArray())
