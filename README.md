# Live Map Project 
Live map show to the user a map of locations that are fetched from a data store. The map will update if a location is added without refreshing the browser. Each Locations shows its information *(name, latitude, lonngitude, status)*. The user can edit, delete locations.

## Getting Started 
### Prerequisites
* Nodejs (v8.10.0+)
* MongoDB (v3.6.5+)

### Installing
* Clone repo:
```sh
  git clone https://github.com/jzrchilel/live-map-project.git
```
* Go to project folder:
```sh
  cd live-map-project/
```
* Install dependencies running this command. This will install client and backend modules
```sh
  npm run install:all
```
### Before runnning
 **The mongo server must be running before run the project**, to do that you can execute in a new terminal window
```sh
 mongod
```
* **Also you need to put dabase name in `.env` file with your mongoDB credentials(*if you have user and password*)**
* `MONGO_DB_NAME=yourdatabasename` 
* *(Usually we should not upload .env files but i did just for this project purpuses)*

### Running
* Now run the project:
```sh
  npm run dev
```
* The command shown above will start both client and backend thanks to `concurrently` module.
* You can execute this command in another terminal window to add some locations but you can create new locations manually.
```sh
  mongo 127.0.0.1:27017/yourdatabasename insertScript.js
```

**LiveMap** was written with ❤️😘 by <a href="http://jzrchilel.github.io"><img src="https://avatars2.githubusercontent.com/u/6947082?s=460&v=4" width="50"/></a>
