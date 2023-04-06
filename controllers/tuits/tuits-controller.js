import * as tuitsDao from './tuits-dao.js'
const findTuits = async (req, res) => {
const tuits = await tuitsDao.findTuits()
   res.json(tuits);
}



const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate,
                                   updates);
  res.json(status);
}



const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params['tid'];
  const status = await tuitsDao.deleteTuit(tuitIdToDelete)
  res.json(status);
}
const createTuit = async (req, res) => {
const newTuit=req.body;
newTuit.userName="Tesla";
newTuit.handle="tesla";
newTuit.time="2h";
newTuit.likes=0;
newTuit.dislikes=0;
newTuit.liked= false;
newTuit.image="tesla.png";
const insertedTuit = await tuitsDao.createTuit(newTuit);
res.json(insertedTuit);

console.log(tuits);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
