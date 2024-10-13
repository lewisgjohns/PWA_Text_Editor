// import { openDB } from 'idb';

// const initdb = async () =>
//   openDB('jate', 1, {
//     upgrade(db) {
//       if (db.objectStoreNames.contains('jate')) {
//         console.log('jate database already exists');
//         return;
//       }
//       db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
//       console.log('jate database created');
//     },
//   });

// // TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => {
//   console.timeLog('PUT to the database');
//    // Open the database
//    const jateDb = await openDB('jate', 1);

//    // Start a new transaction with readwrite access
//    const tx = jateDb.transaction('jate', 'readwrite');
 
//    // Open the object store
//    const store = tx.objectStore('jate');
 
//    // Put the content into the store (auto-incrementing 'id' will be used)
//    const request = store.put({ value: content });
 
//    // Wait for the transaction to complete
//    const result = await request;
//    console.log('Data saved to the database', result);
//  };
  



// // TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => {
//   console.timeLog('GET from the database');
//   // Open the database
//   const jateDb = await openDB('jate', 1);

//   // Start a new transaction with read access
//   const tx = jateDb.transaction('jate', 'readonly');

//   // Open the object store
//   const store = tx.objectStore('jate');

//   // Get all the content from the store
//   const request = store.getAll();

//   // Wait for the transaction to complete
//   const result = await request;
//   console.log('Data retrieved from the database', result);
  
//   return result;
// }

// initdb();

// import { openDB } from 'idb';

// // Initialize the database
// const initdb = async () => {
//   return openDB('jate', 1, {
//     upgrade(db) {
//       if (db.objectStoreNames.contains('jate')) {
//         console.log('jate database already exists');
//         return;
//       }
//       db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
//       console.log('jate database created');
//     },
//   });
// };

// // Add content to the database
// export const putDb = async (content) => {
//   console.log('PUT to the database');
//   try {
//     // Initialize the database and ensure it's ready
//     const jateDb = await initdb();

//     // Start a new transaction with readwrite access
//     const tx = jateDb.transaction('jate', 'readwrite');

//     // Open the object store
//     const store = tx.objectStore('jate');

//     // Put the content into the store (auto-incrementing 'id' will be used)
//     const request = store.put({ value: content });

//     // Wait for the transaction to complete
//     const result = await request;
//     console.log('Data saved to the database', result);
//   } catch (error) {
//     console.error('Error putting data into the database:', error);
//   }
// };

// // Get all content from the database
// export const getDb = async () => {
//   console.log('GET from the database');
//   try {
//     // Initialize the database and ensure it's ready
//     const jateDb = await initdb();

//     // Start a new transaction with readonly access
//     const tx = jateDb.transaction('jate', 'readonly');

//     // Open the object store
//     const store = tx.objectStore('jate');

//     // Get all the content from the store
//     const request = store.getAll();

//     // Wait for the transaction to complete
//     const result = await request;
//     console.log('Data retrieved from the database', result);

//     return result;
//   } catch (error) {
//     console.error('Error getting data from the database:', error);
//   }
// };

// // Call the initdb function to initialize the database
// initdb();

import { openDB } from 'idb';

// Initialize the database
const initdb = async () => {
  try {
    const db = await openDB('jate', 1, {
      upgrade(db, oldVersion, newVersion, transaction) {
        console.log(`Database upgrade: old version ${oldVersion}, new version ${newVersion}`);
        
        if (!db.objectStoreNames.contains('jate')) {
          db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
          console.log('jate object store created');
        } else {
          console.log('jate object store already exists');
        }
      },
    });
  

    console.log('Database initialized');
    return db;
  } catch (error) {
    console.error('Error during database initialization:', error);
  }
};

// Add content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  try {
    // Initialize the database and ensure it's ready
    const jateDb = await initdb();

    // Start a new transaction with readwrite access
    const tx = jateDb.transaction('jate', 'readwrite');

    // Open the object store
    const store = tx.objectStore('jate');

    // Put the content into the store (auto-incrementing 'id' will be used)
    const request = store.put({ value: content });

    // Wait for the transaction to complete
    const result = await request;
    console.log('Data saved to the database', result);
  } catch (error) {
    console.error('Error putting data into the database:', error);
  }
};

// Get all content from the database
export const getDb = async () => {
  console.log('GET from the database');
  try {
    // Initialize the database and ensure it's ready
    const jateDb = await initdb();

    // Start a new transaction with readonly access
    const tx = jateDb.transaction('jate', 'readonly');

    // Open the object store
    const store = tx.objectStore('jate');

    // Get all the content from the store
    const request = store.getAll();

    // Wait for the transaction to complete
    const result = await request;
    console.log('Data retrieved from the database', result);

    return result;
  } catch (error) {
    console.error('Error getting data from the database:', error);
  }
};

// Call the initdb function to initialize the database
initdb();
