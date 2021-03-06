<b>Timestamp-Microservice</b><br>
freeCodeCamp Timestamp Microservice Basejump

<b>Objective:</b> Build a full stack JavaScript app that is functionally similar to this: https://timestamp-ms.herokuapp.com/ and deploy it to Glitch.

Note that for each project, you should create a new GitHub repository and a new Glitch project. If you can't remember how to do this, revisit https://freecodecamp.org/challenges/get-set-for-our-api-development-projects.

Here are the specific user stories you should implement for this project:

<b>User Story:</b> I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

<b>User Story:</b> If it does, it returns both the Unix timestamp and the natural language form of that date.

<b>User Story:</b> If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage: <code>https://timestamp-ms.herokuapp.com/December%2015,%202015</code><br>
Example usage: <code>https://timestamp-ms.herokuapp.com/December 15, 2015</code><br>
Example usage: <code>https://timestamp-ms.herokuapp.com/1450137600</code><br>

Example output: <code>{ "unix": 1450137600, "natural": "December 15, 2015" }</code>