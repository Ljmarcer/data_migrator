db = db.getSiblingDB("db")
var date_max = new Date();
date_max.setUTCHours(date_max.getHours())
date_max.setMonth(date_max.getMonth() - 2)
date_max.setMinutes(date_max.getMinutes() - 5)
date_max = date_max.toISOString().slice(0,-5);
try {
printjson( db.getCollection('collection').deleteMany({"time":{'\$lte': date_max}}));
} catch (e) {
    print (e);
}

