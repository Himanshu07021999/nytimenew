import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchArticles } from './services/api';
import ArticlesList from './components/ArticleList';
import ArticleDetailWrapper from './components/ArticleDetailWrapper';


const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchArticles();
      setArticles(articles);
    };
    getArticles();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ArticlesList articles={articles} />} />
        <Route path="/article/:id" element={<ArticleDetailWrapper articles={articles} />} />
      </Routes>
    </Router>
  );
};

export default App;
