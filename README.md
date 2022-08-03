# data_migrator
semi-continuous data migration, this repository contains 4 files:
- _mongo_migrator.sh_: bash file that executes the different commands in order.
- _selector.js_: javascript files that contains a mongo query of docs before a selected datetime, store the output in docs.json.
- _docs.json_: json file that contains documents.
- _deleter.js_: javascript files that contains a mongo queryt that deletes the docs before a selected datetime.
