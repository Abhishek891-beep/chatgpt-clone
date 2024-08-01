import React from 'react';
import { useParams } from 'react-router-dom';
const Chatpage = () => {
    const { id } = useParams(); // Retrieve the chat ID from the URL
    return <div>Chatpage: {id}</div>;
  };
  
  export default Chatpage;


  