let mongoose = require('mongoose');
let Photo = require('./photoMDB')

mongoose.connect("mongodb+srv://jaalga:dnfISz8EU5bZiJB9@cluster0.sv2p0ua.mongodb.net/photos",
  { useNewUrlParser: false, useUnifiedTopology: false });

const uploadPhoto = (current_user, current_url, current_title, current_description) => {
  const photoDocument = new Photo({
    user: current_user,
    url: current_url,
    title: current_title,
    description: current_description,
  })
  photoDocument.save()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const getUserPhotos = username => {
  Photo.find({ user: username })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const uploadDescription = (photoTitle, newDescription) => {
  Photo.findOneAndUpdate({ title: photoTitle }, { description: newDescription })
    .then(data => {
      console.log({ previous: data, updated: Photo.find({ title: photoTitle }) })
    })
    .catch(err => console.log(err))
}
// uploadPhoto('Jose3214', 'newFakeUrl', 'beach', 'Doing something on the beach')

uploadDescription('Something in the rain', 'Its not raining at all!')