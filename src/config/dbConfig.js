/*
    MongoDB configurations
*/

const mongoose = require('mongoose');

async function main() {
  try {
    const databaseString = process.env.DATABASE
    await mongoose.connect(databaseString);
    console.log('Successful connection to the database')
  } catch (err) {
    console.log(err);
  } 
}

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

module.exports = mongoose;