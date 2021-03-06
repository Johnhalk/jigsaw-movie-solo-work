
## Welcome to Movie Night

### “Roads?  Where we're going we don't need roads.” - Dr. Emmet Brown Ph.D. 
So what do we want you to do? Here are some User Stories to get you started:

```
As a Film Enthusiast
So I can find a good movie to watch
I want to Search through a list of movies
```

```
As a Film Enthusiast
So I can get a sense for what to watch
I want to See the movie title, poster and an overview
```

```
As a Film Enthusiast
So I can remember what I've been browsing
I want to pick my favourite films from a list
```

```
As a Film Enthusiast
So I know which films a re good and which are bad
I want to rank movies in order
```

```
As a Film Enthusiast who can only count up to 5
So that I can remember my favourite films ever
I want to persist only my top 5 to a database
```

```
As a Film Enthusiast
So I can change my mind
I want to be able to re-order my ranking list
```

```
As a Film Enthusiast who can only count up to 5
So I can understand what is a good film or not,
I want to change a pre-determined ranking to be out of 5
```

```
As a Film Enthusiast
So I can add new films to my Top 5
Dynamically update my rankings
```


### "That’ll do, pig, that’ll do" - Arthur Hoggett, Farmer
Our stack in this repo is React, Express and MongoDb. The repo is split into 2 folders, front_end for the client side app and BackEnd for the server side.  

Clone it, have a look around, run ```npm i``` in both folders and get building safe in the knowledge that the config is done.  

Feel free to explore your Javascript imagination but don't get bogged down trying to implement a package... we wanna see your code.


### "Help me, Obi-Wan Kenobi. You're my only hope." - Leia Organa, Princess.
[This Mystical API](https://www.themoviedb.org/documentation/api) will help you with finding all the info you could ever need about movies. It's not actually mystical.. thanks to themoviedb.org for building it! The config for the API is [here](./front-end/src/config.json)


### “I’m having an old friend for dinner” - Dr. Hannibal Lectre Ph.D. 
So let's talk persistence... the database table will follow a particular schema so that it can be integrated into a further set out 'Top 5' style lists.  

The schema that you will need to follow for persisting the data is:

```
{
    "_id": 396371,
    "overview": "Naval Aviator, Pete 'Maverick' Mitchell (Tom Cruise), takes a whirlwind adventure with partner Nick 'Goose' Bradshaw. Sexy, misunderstood, full-throttle machismo. Tremendous.",
    "posterPath": "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    "releaseDate": "2017-12-21",
    "title": "Top Gun",
    "ownScore": 5.0
    "communityScore": 9.9
}
```


