const db = require('../config/connection');
const { ToDoList } = require('../models');
const toDoListSeeds = require('./toDoList.json');

db.once('open', async () => {
  await ToDoList.deleteMany({});
  await ToDoList.create(toDoListSeeds);

  console.log('all done!');
  process.exit(0);
});
