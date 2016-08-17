I choose full stack to focus on.

Minimally shippable code: A service where I can see:
a. which states in USA produces soybean
b. I can choose a state to look into its counties which produce the soybean
c. How much is it raining today in those particular counties.

Thought process behind solving:
a. get the API data from the given API link
b. filter it for required state names and soybean production value
c. choose a state name from above data and make another API call for counties in the state I choose
d. once I get the counties, I will use a for loop to call on a weather api with county name as place name one by one 

Technical choices:
a. NodeJS with AngularJS, because they are really powerful
b. USDA API(given) and Openweather API

Challenges/tradeoffs/compromises:
chalenge: timeperiod, started on monday morning and wanted to pass over by tuesday evening
tradeoffs: beautiful code vs beautiful front-end
compromise: sticking to the least number of features fullfilling the requirements

Learning along the way:
This is a good one. Using API in backend was new and an interesting thing to learn. In the past, I always used it in frontend.

If I had more time:
1. I will sort the data, state names according to production value
2. I will sort the counties data in the same way, wrt rain volume
3. Will make a correlation between rain and production
4. use data visulization tools 
5. make frontend more pretty and easy to read

Scalability:
I chose not to use database, this version of project is as scalable as network will allow it to be

Robustness:
In general, angular has better syntax error handling, considering that I will say the project is angular robust.
