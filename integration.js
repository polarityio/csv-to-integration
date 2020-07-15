'use strict';

const Papa = require('papaparse');
const fs = require('fs');

let Logger;
const eventLookup = new Map();

function startup(logger) {
  Logger = logger;
  const csvAsString = fs.readFileSync('./data/csvDataNeeded.csv', 'utf8');
  let csvData = Papa.parse(csvAsString, {
    header: true,
    skipEmptyLines: true,
    delimiter: ',',
    quoteChar: '"'
  });
  if (csvData.errors.length > 0) {
    Logger.error({ errors: csvData.errors }, 'Encountered Errors Parsing File');
  }
  Logger.debug(`Loaded ${csvData.data.length} rows`);
  csvData.data.forEach((event) => {
    eventLookup.set(event.name_of_key_column, event);
  });
  
}


function doLookup(entities, options, cb) {
  Logger.debug({ entities: entities, options: options }, 'doLookup');

  let entityResults = [];

  entities.forEach((entity) => {
    if (eventLookup.has(entity.value)) {
      let event = eventLookup.get(entity.value);
      
      entityResults.push({
        entity: entity,
        displayValue: entity.value,
        data: {
          summary: [`${event.columnNameToBeDisplayedAsSummaryTag}`],
          details: event
        }
      });
    }
  });

  Logger.debug({ entityResults }, 'Results');
  cb(null, entityResults);
}

module.exports = {
  doLookup: doLookup,
  startup: startup
};