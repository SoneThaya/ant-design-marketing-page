import React from 'react';
import { Row, Col, Card } from 'antd';

import image1 from '../../../assets/images/modern-design.jpg';
import image2 from '../../../assets/images/clean-design.jpg';
import image3 from '../../../assets/images/great-support.jpg';
import image4 from '../../../assets/images/easy-customise.jpg';
import image5 from '../../../assets/images/unlimited-features.jpg';
import image6 from '../../../assets/images/advanced-option.jpg';

const { Meta } = Card;

const AppFeature = () => {
  return (
    <div className="block featureBlock bg-gray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="modern design" src={image1} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="clean and elegant" src={image2} />}
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Advanced Options" src={image3} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Great Support" src={image4} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="Easy to customize" src={image5} />}
            >
              <Meta title="Easy to Customize" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="unlimited features" src={image6} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AppFeature
