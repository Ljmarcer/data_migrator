# data_migrator
semi-continuous data migration 
## files
this repository contains 4 files:
- _mongo_migrator.sh_: bash file that executes the different commands in order.
- _selector.js_: javascript files that contains a mongo query of docs before a selected datetime, store the output in docs.json.
- _docs.json_: json file that contains documents.
- _deleter.js_: javascript files that contains a mongo queryt that deletes the docs before a selected datetime.
## execution
with crontab we could select the time, in example imagine each 5 minutes from 0-23 excluding 3-4 because we could have a script in that time that stores data
on that time.
```bash
*/5 0-3,4-23 * * * /path/to/data_migrator.sh
```
