import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const ArticlesList = ({ articles }) => (
  <>
  <h1 className='times' style={{textAlign:'center'}}>New York time </h1>
  <Row gutter={[16, 16]}>
    {articles.map(article => (
      <Col key={article.id} xs={24} sm={12} md={8} lg={6}>
        <Link to={`/article/${article.id}`}>
          <Card
            hoverable
            cover={<img alt={article.title} src={article.media[0]?.['media-metadata'][2]?.url || 'https://via.placeholder.com/150'} />}
          >
            <Meta title={article.title} description={article.byline} />
          </Card>
        </Link>
      </Col>
    ))}
  </Row>
  </>
);

export default ArticlesList;
