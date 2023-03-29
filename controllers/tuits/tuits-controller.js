import posts from "./tuits.js";
let tuits = posts;
const findTuits = (req, res) => {
   res.json(tuits);
}


const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex(
    (t) => t._id === tuitdIdToUpdate)
  tuits[tuitIndex] =
    {...tuits[tuitIndex], ...updates};
  res.sendStatus(200);
}



const deleteTuit = (req, res) => {
  const tuitIdToDelete = req.params['tid'];
  tuits = tuits.filter(tui =>
    tui._id !== tuitIdToDelete);
  res.sendStatus(200);
}
const createTuit = (req, res) => {
const newTuit=req.body;
newTuit.userName="Tesla";
newTuit.handle="tesla";
newTuit.time="2h";
newTuit._id= (new Date()).getTime() +'';
newTuit.likes=0;
newTuit.dislikes=0;
newTuit.liked= false;
newTuit.image="tesla.png";
console.log(newTuit);
tuits.push(newTuit);
res.json(newTuit);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
