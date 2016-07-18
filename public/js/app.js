
//load feathers and socket.io
var socket = io();
var app = feathers()
app.configure(feathers.socketio(socket));

  // var messageService = app.service('messages');

  //ON LOAD CONSOLE.LOG OPTION
  // messageService.on('created', function(message) {
  //   console.log('Someone created a message', message.text);
  // });

  //fires function to create message into restful api/db
  // messageService.create({
  //   text: 'Message from client'
  // });

  // var animeService = app.service('/Animes');

  // animeService.on('created', function(anime) {
  //   console.log('A new anime has been added to the list', anime.title);
  //   console.log('The new anime type is', anime.type);
  //   console.log('The new anime has a total number of seasons', anime.seasons );
  //   console.log('The new anime has a total number of dvds', anime.dvds);
  // });


//EXAMPLE ONE - hardcoding data into db hooking up RESTAPI  
function fire() {

  //stating the service 
  var animeService = app.service('/Animes');

  //console log once created
  animeService.on('created', function(anime) {
    console.log('A new anime has been added to the list', anime.title);
    console.log('The new anime type is', anime.type);
    console.log('The new anime has a total number of seasons', anime.seasons );
    console.log('The new anime has a total number of dvds', anime.dvds);
  });

  // button fires function to enter data into restful api.
  animeService.create(
    {title: 'SAO', type: 'fantasy', seasons: 'four', dvds: 5}
  );

  //button fires function to enter data into restful api.
  animeService.create(
    {title: 'One Peace', type: 'adventure', seasons: 'seven', dvds: 8}
  );

}

//EXAMPLE TWO - form input data into db and restapi
function firetwo() {

  //custom variables for the input form above.
  var animeName = document.getElementById('animeName').value;
  var animeType = document.getElementById('animeType').value;
  var animeSeasons = document.getElementById('animeSeasons').value;
  var animeDvds = document.getElementById('animeDvds').value;

  //clear submit form
  document.getElementById("myForm").reset();

  //stating the service again 
  var animeService = app.service('/Animes');

  //console login after created
  animeService.on('created', function(anime) {
    console.log('A new anime has been added to the list', anime.title);
    console.log('The new anime type is', anime.type);
    console.log('The new anime has a total number of seasons', anime.seasons );
    console.log('The new anime has a total number of dvds', anime.dvds);
  });

  // buttton firestwo function to enter data into restful api. one-liner option.
  animeService.create({title: animeName, type: animeType, seasons: animeSeasons, dvds: animeDvds});

}

//EXAMPLE THREE - grab specific titles example
function  fireagain() {
  // Important must supply serivce data 
  var animeService = app.service('/Animes');

  //CUSTOM TRY DID NOT WORK, BUT FOUND OBJECTS WITH FIND()
  // var itemstwo = animeService.find();
  // console.log(itemstwo)
  // console.log(itemstwo)
  // console.log()

  animeService.find({}).then(function(items){
    //get all items 
    console.log('Items!', items);

     //example of  getting specifc line item 
    console.log('Custom Line Items', items.data[2])

    //example of item being picked 
    console.log('Custom Title Items', items.data[2].title)

    document.getElementById('export').innerHTML = items.data[5].title + ' ' + items.data[4].title + ' ' + items.data[3].title + ' ' + items.data[2].title + ' ' +  items.data[1].title + ' ' + items.data[0].title;
  });



}