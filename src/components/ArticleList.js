import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Select, Spin } from 'antd';
import { fetchArticles } from '../services/api';

const { Meta } = Card;
const { Option } = Select;

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState(7); // Default to 7 days

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const fetchedArticles = await fetchArticles(period);
      setArticles(fetchedArticles);
      setLoading(false);
    };

    getArticles();
  }, [period]);

  const handlePeriodChange = (value) => {
    setPeriod(value);
  };

  return (
    <>
      <h1 className='times' style={{textAlign:'center'}}>New York Times</h1>
      <Select defaultValue={1} onChange={handlePeriodChange} style={{ marginBottom: '20px' }}>
        <Option value={1}>1 Day</Option>
        <Option value={7}>7 Days</Option>
        <Option value={30}>30 Days</Option>
      </Select>
      {loading ? (
        <Spin size="large" />
      ) : (
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
      )}
    </>
  );
};

export default ArticlesList;
