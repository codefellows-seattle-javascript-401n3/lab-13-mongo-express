#Song Single Resource API using express and mongoDB
###Code Fellows Lab 13


##About:
This is a simple REST API which stores and tracks song entries. Each song added will generate a unique ID, and will require the song's title and artist. The user can create new entries, as well as retrieve and delete old entries.         
    * After lab 11, users can now update entries!
    *  Always wondered in which movies you can hear your favorite song? After lab 14, you can now include in which movies you can hear a specific song!


##User Instructions:
* To start the server type into the terminal:
```
node server.js
```

###Adding Songs:
* To add a new song, type the following into the terminal:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '{"title": "input song title here", "artist": "artist name goes here"}' localhost:3000/api/song
```

    - This will generate a unique ID for this song entry.


* To retrieve information associated with a unique ID, type the following into the terminal:
```
curl localhost:3000/api/song/<unique ID>
```

* To updated an existing song entry, type the following into the terminal:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X PUT -d '{"title": "Update Title", "artist": "Update Artist"}' localhost:3000/api/song/<unique ID>
```


* To delete a song entry, type the following into the terminal:
```
curl -X DELETE localhost:3000/api/song/<unique ID>
```

###Adding Movies:

* To add a movie to a specific song, type the following into the terminal:
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '{"title": "movie title goes here", "genre": "movie genre goes here"}' localhost:3000/api/song/<ID of song you wish to add the movie to>/movie
```

* To retrieve information associated with a specific movie, type the following into the terminal:
```
curl localhost:3000/api/movie/<unique ID>
```
    - This will also give you the unique ID for the song which this particular movie ID is stored under

* To delete a movie associated with a song, type the following into the terminal:
```
  curl -X DELETE localhost:3000/api/movie/<unique movie ID>
```

##Author:
Carolina Ceja
