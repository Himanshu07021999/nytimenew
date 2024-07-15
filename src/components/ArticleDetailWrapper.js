import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleDetail from './ArticleDetails';


const ArticleDetailWrapper = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id, 10));

  if (!article) {
    return <p>Article not found</p>;
  }

  return <ArticleDetail article={article} />;
};

export default ArticleDetailWrapper;
