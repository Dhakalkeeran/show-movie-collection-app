# Show Movie Collection App

**React frontend for the [Movie Collection API](https://github.com/Dhakalkeeran/movie-collection-api.git).**
<ul>
<li>A personal movie collection app to maintain the watchlist.</li>
<li>Once the backend API server is started, this app fetches the information from the database and populates the feed.</li> 
<li>Adding movie to and deleting movie from the database can be done easily through the app.</li>
</ul>

# How to start the App

### Install node
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install <version>
```

### Clone the App
```
git clone <this-app-url>
```

### Install react and required packages
```
# in <project-root>

npm install
```

### Start the backend API server

Instructions for starting the backend API server is written [here](https://github.com/Dhakalkeeran/movie-collection-api.git/#how-to-start-the-api-server).

### Add backend API url to the app
Create a Url.js file in the src/ directory and initialize the "url" variable with the backend API url.

### Run App server
```
npm run dev
```


