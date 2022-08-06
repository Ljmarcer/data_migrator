db = db.GetSiblingDB('db')
var date_max = new Date();
date_max.setUTCHours(date_max.getHours())
date_max.setMonth(date_max.getMonth() - 2)
date_max = date_max.toISOString().slice(0, -5)
console.log(date_max)
printjson( db.getCollection('geopos').find({"currentTimestamp":{'\$lte': date_max}}).toArray());
