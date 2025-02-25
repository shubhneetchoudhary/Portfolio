import { Container } from './styles';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import validator from 'validator';

// Firebase configuration (ensure it's correct) //monarch credentials
// const firebaseConfig = {
//   apiKey: "AIzaSyBMUlx5ayskp9KXuabheKGMbTKuQDmCMq8",
//   authDomain: "loginapplication-dbe72.firebaseapp.com",
//   projectId: "loginapplication-dbe72",
//   storageBucket: "loginapplication-dbe72.appspot.com",
//   messagingSenderId: "734584554367",
//   appId: "1:734584554367:android:be449fc4a95a01c0e5d04a",
// };

const firebaseConfig = {  //shubh credentials
  apiKey: "AIzaSyCQzFuNc-akpLtYiKzHzZ6b8mRc2lvFk0k",
  authDomain: "personalportfolio-3026a.firebaseapp.com",
  projectId: "personalportfolio-3026a",
  storageBucket: "personalportfolio-3026a.firebasestorage.app",
  messagingSenderId: "302506052683",
  appId: "1:302506052683:web:ca3afa55a94066d7c991ce",
  measurementId: "G-MFVDN971E9"
};

// Firebase Initialization (Ensure it's initialized only once)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const db = getFirestore(app);

export function Form() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const verifyEmail = (email: string) => {
    setValidEmail(validator.isEmail(email));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Save message to Firestore
      await addDoc(collection(db, 'Portfolio'), { email, message });
      toast.success('Message successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
      });

      // Clear form
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send the message.');
      console.error('Error saving message: ', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            verifyEmail(e.target.value);
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={submitting || !validEmail || !message}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
