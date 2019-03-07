![](https://cdn.docsie.io/boo_PFvw8YhwIwx2RtSiK/6fbfb9d6-2be9-7261-365a-0b20fe81f2a9jezer_banner_(1).jpg)

# Live Map Project Development process
Based in the instructions these are the key points to work on:

### Key points: 
* Show the user a live map of locations that are fetched from a data store.
* It should live updates if data is modified elsewhere
* Location(marks) should show the name of the lication and status(open or close)
* Locations shoul be able to edit its information
* Any change should be reflected without refresh the browser

### Tools to be used:
* **Back-End**: Node/Express, MongoDB, Mongoose
* **Front-End**: React, Redux, redux-saga, reactstrap
* Mapbox wrapper named _**react-map-gl**_

2. Create a Map component using Mapbox
3. Center the map at Barcelona zone and display some locations(marks) with fake data
4. Create popup components to show location info and a button to edit the location
5. When click on the edit iconn, show a editable popup
6. When click on "save" button store the info in memory(this will be gonne if browser is refresed)

## Development
* Usually what I do before start a project and after reading the requirements is to think the big picture of the project. Below is the big picture of this live map project:

![](https://cdn.docsie.io/boo_iIt2CDMjk7ApnwJCU/aad8a316-6a18-d7bb-aeb9-fa2737d5c486Untitled_Diagram.jpg)

* I decided to have the back-end and front-end code in the same project folder istead of having them separated each in their own folder just for the simplicity of this challenge. 
So after of thinking about this design I created the project folder(you can see the structure in the main README). 
* Then I played with Mapbox library to know how it is used. I created a map with harcoded data. Displaying several markers with its own information in a popup
* After of having this map working with harcoded data I designed the schema model that reflects the requirements of the application and to create a database to work with this model.
* Then i needed to create the API, and came up with this design: 
![](https://cdn.docsie.io/boo_iIt2CDMjk7ApnwJCU/76b711aa-29fc-3966-3fd3-53de6456c4f1Untitled_Diagram_Page_2.jpg)
* I created each method to add the CRUD functionality (GET, POST, PUT, DELETE).
* After having this API working with the real database i connected with the client code. So i removed all harcoded data and replaced with the data coming from the API.
* With the application working fine, with real data coming from the database, I refactored some code, separated components, added unit testing to test components and the API.

This is an overall of the process i took to develop this live map project:
1. Build a static site
2. Design data model and create database
3. Build API
4. Hook the DB into the application
5. Refactore code and embellishing the application

😘
