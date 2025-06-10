# TrackX - Your Currencies Exchange and Trip Expenses Tracker

## Project Brief

MVP - Minimum Viable Product

- Built with React using components, props, states and routes
- Call a public API using fetch
- At least 1 Create, 1 Update or 1 Delete functionallity using Airtable

## Timeframe

1 week

## Technologies used

- React<br>
- Bruno <br>
- Airtable <br>

## Description

TrackX is an app that allows users to track global currency exchange rates and record their travel expenses based on trip dates. This helps users understand the actual expenses incurred, converted to a base currency — by default, Singapore Dollar (SGD). Users can also change the base currency and the amount to be converted as needed.<br>
<img src="src/assets/TrackX_Snapshot.png" alt="TrackX Homepage"  width="60%" height=auto><br>

## Wireframe

Based on the planned features at the early stage, I have drafted a wireframe and outlined the following user interactions:

1. User will see the popular currency exchange rates on the main page.
2. User can check out more currency exchange rates for different countries.
3. User can input the amount to check the converted rate.
4. User can change the base currency.
5. User can check the historical rates.
6. User can record their total expenses of the trip based on the trip's date and currency rates.
7. User can add, edit and delete their previous trip's records.

Figure 1: Main page of TrackX<br>
<img src="src/assets/TrackX_Homepage.png" alt="Wireframe Homepage" width="60%" height=auto><br>

Figure 2: Global Currency Exchange Rates page of TrackX<br>
<img src="src/assets/TrackX_CurrencyExchangeRate.png" alt="Wireframe Currency Exchange Rate page"  width="60%" height=auto><br>

Figure 3: Trip Expenses Tracker page of TrackX<br>
<img src="src/assets/TrackX_ExpensesTracker.png" alt="Wireframe Expenses Tracker page"  width="60%" height=auto><br>

## Future Enhancement

Due to time constrain and first attempt on using React and libraries, some of the features are not developed at the moment. If there would be a future development on this game, I would like to improve and implement the following:

1. The country flag and country name can be displayed side by side with the currency code.
2. User can check the historical rates.
3. User can edit the previous input trip's records.
4. Implement more functions in the data grid table , e.g. using the checkbox function in data grid to carry out action like delete and edit.
5. User can change the base currency rate for the trip Expenses Tracker based on their preference.

## References

1. https://www.reddit.com/r/learnreactjs/comments/sgim34/fetch_api_works_then_suddenly_stops_working_after/#lightbox

2. https://www.google.com/search?q=can+i+have+thousand+indicator+in+react&rlz=1C1CHBF_en-GBSG1158SG1158&oq=can+i+have+thousand+indicator+in+react&gs_lcrp=EgZjaHJvbWUyCwgAEEUYChg5GKABMgkIARAhGAoYoAEyCQgCECEYChigAdIBCTExMzc2ajBqN6gCCLACAfEFekINyyaWzAk&sourceid=chrome&ie=UTF-8

## Attributions

1. API source: CurrencyBeacon - https://currencybeacon.com/
2. Component library: Material UI - https://bestofjs.org/projects/material-ui
