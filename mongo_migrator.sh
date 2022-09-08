#!/bin/bash

# Extracting data from working database

mongo "URI" --quiet scripts/selector.js > scripts/geopos.json


# Appending data to historic  database

mongoimport  "URI_hist" --authenticationDatabase "admin" --jsonArray -d db -c collection  --legacy scripts/documents.json

# Remove those documents from the working database

mongo "URI" --quiet scripts/deleter.js
