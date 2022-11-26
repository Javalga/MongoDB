let mongoose = require('mongoose');
let Photo = require('./photoMDB')

mongoose.connect("mongodb+srv://jaalga:dnfISz8EU5bZiJB9@cluster0.sv2p0ua.mongodb.net/photos",
  { useNewUrlParser: false, useUnifiedTopology: false });

const uploadPhoto = (current_user, current_url, current_title, current_description) => {
  const data = new Photo({
    user: current_user,
    url: current_url,
    title: current_title,
    description: current_description,
  })
  Photo.create(data)
    .then(data => {
      console.log('Documento creado.');
      console.log(data)
    })
    .catch(err => console.log(err))
}

const getUserPhotos = username => {
  Photo.find({ user: username })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const updateDescription = (photoTitle, newDescription) => {
  Photo.findOneAndUpdate({ title: photoTitle }, { description: newDescription })
    .then(data => { console.log('Description updated'); console.log(data) })
    .catch(err => console.log(err))
}


const deletePhoto = (username, photoTitle) => {
  Photo.deleteOne({ user: username, title: photoTitle })
    .then(data => { console.log('Document deleted'); console.log(data) })
    .catch(err => console.log(err))
}

const deleteAllPhotos = (username) => {
  Photo.deleteMany({ user: username })
    .then(data => { console.log(`All photos from ${username} got deleted`); console.log(data) })
    .catch(err => console.log(err))
}

// uploadPhoto('Jose3214', 'fakeUrlDASasd', 'Something else again and again again', 'Doing something on the street123124 avenue again and again again')

// updateDescription('Something in the rain', 'Its not raining at all!')

// deletePhoto('Jose3214', 'Something in the rain')

// deleteAllPhotos('Jose3214')