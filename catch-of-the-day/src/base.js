import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyADbqzloYXs8C96znO0zRTU2ZL1qpMpp-A',
  authDomain: 'catch-of-the-day-gromov.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-gromov.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base; 



 

