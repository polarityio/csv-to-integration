# Polarity CSV to Polarity Integration Template

This is an example integration that walks through how to take a CSV and make it a Polarity Integration. 


## Tailoring CSV Integegration 
This integration is set up as an example for Polarity users to quickly add a CSV that Polarity will query in on-demand only mode. 

There are a few files that you will need to edit in order to tailor the integration to your CSV file. 

### Adding in the CSV file 
To add the csv file to be looked up simply just replace the csvDataneeded.csv file under the data directory. You can replace the file or simply just add the data to the existing file. 

### Config.js File 
The config.js file for a Polarity integration is the file that is used to setup the configurations for the integration. 

Here you will need to edit the data that Polarity reckognizes, the acronym and the Integration Name.

*Name* 
The name is set to a generic name to start but you can change it to let other users know what the CSV data contains. 

*Acronym* 
To notify users on where the data comes from for a Polarity Tag. Acronyms are typicall all uppercase an less than five letters or numbers. 

*Default Polarity Entity Types* 
By default Polarity recognizes the below entity types: 

'IPv4', 'IPv4CIDR', 'IPv6', 'MD5', 'SHA1', 'SHA256', 'string', 'email', 'domain', 'url', 'IPv4CIDR', 'CVE'

To change the entity types to one of the default ones navigate to the below line in the file and replace the '*' with the above entity types to be reckognized. 
    Example:   entityTypes: ['IPv4']

*Custom Entity Type:* 
The Polarity framework allows for you to add a custom regex to be used to reckognize the entity that you want to query. To add a custom regex, add in the regex in the line below:

    Example: regex: /\d{1,6}/

If you plan on using a custom entity type please delete the entityTypes line from above. 

> Please note that for the CSV lookup you should specify one entity type to be lookedup.


## Integration.JS File 
Now that you have the entity types and the name of the integration and what data the integration will query on. You will need to edit some parts of the integration.js file. This file is the core to a Polarity integration which process the data and does the lookup. 

In this file you will need to edit the following lines to tailor the integration to the csv file you are adding. 

* Line 11 - change the name of the CSV file that was added to the data folder. 

* Line 27 - change the name of the column that acts as the key. This column will match the data that is to be looked up by Polarity.

* Line 42 - Summary Tags - here you will need to change the summary tags to match the column that is to be looked up. These are the tags that will show up when the integration is queried. You can add more simply by copy and pasting the lines then adding a comma between them. 

> Please note if the file is not comma delimited you will need to edit line 15 to change the delimiter. 

## CSV Integration Options

### On-Demand Only 
By default all of the CSV to Polarity Integrations will be On-Demand Only. 


## Installation Instructions

Installation instructions for integrations are provided on the [PolarityIO GitHub Page](https://polarityio.github.io/).

## Polarity

Polarity is a memory-augmentation platform that improves and accelerates analyst decision making.  For more information about the Polarity platform please see:

https://polarity.io/