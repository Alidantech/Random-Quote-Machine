import React, { useState, useEffect } from 'react';
import './App.css';
import { changeColors } from './QuoteColor';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleClick = () => {
    fetchQuote();
    changeColors();
  };

  return (
    <div id="quote-box" className="text-center">
      <h1 id="text" className="text-center">"{quote}"</h1>
      <p id="author">- {author}</p>
      <div className="bottom-0 start-0">
        <button className="btn btn-primary me-3 m-1" id="new-quote" onClick={handleClick}>
          New Quote
        </button>
        <a
          className="btn btn-danger m-1"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `${quote} - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default QuoteMachine;
