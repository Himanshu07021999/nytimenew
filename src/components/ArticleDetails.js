import React from 'react';
import { Card, Row, Col } from 'antd';
import './ArticleDetails.css';

const ArticleDetail = ({ article }) => {
  if (!article) {
    return <p>Loading...</p>;
  }

  const { title, abstract, byline, published_date, section, media, url } = article;
  const imageUrl = media.length > 0 ? media[0]['media-metadata'][2].url : 'https://via.placeholder.com/440x293';

  return (
    <Card hoverable style={{ margin: '20px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <img alt={title} src={imageUrl} className="article-image" />
        </Col>
        <Col xs={24} sm={16}>
          <div className="article-content">
            <h1>{title}</h1>
            <p>{abstract}</p>
            <p><strong>By:</strong> {byline}</p>
            <p><strong>Published on:</strong> {published_date}</p>
            <p><strong>Section:</strong> {section}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default ArticleDetail;
