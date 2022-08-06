#!/bin/bash

# Extracting data from working database

mongo "mongouri" --quiet scripts/selector.js > scripts/geopos.json


# appending data to historic  database
mongoimport  "mongouri" --jsonArray -d db_hist -c db_collection < scripts/geopos.json

# Remove those documents from the working database
mongo "mongouri" --quiet scripts/deleter.js

