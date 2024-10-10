import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.timeLog('PUT to the database');
   // Open the database
   const jateDb = await openDB('jate', 1);

   // Start a new transaction with readwrite access
   const tx = jateDb.transaction('jate', 'readwrite');
 
   // Open the object store
   const store = tx.objectStore('jate');
 
   // Put the content into the store (auto-incrementing 'id' will be used)
   const request = store.put({ value: content });
 
   // Wait for the transaction to complete
   const result = await request;
   console.log('Data saved to the database', result);
 };
  



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.timeLog('GET from the database');
  // Open the database
  const jateDb = await openDB('jate', 1);

  // Start a new transaction with read access
  const tx = jateDb.transaction('jate', 'readonly');

  // Open the object store
  const store = tx.objectStore('jate');

  // Get all the content from the store
  const request = store.getAll();

  // Wait for the transaction to complete
  const result = await request;
  console.log('Data retrieved from the database', result);
  
  return result;
}

initdb();
