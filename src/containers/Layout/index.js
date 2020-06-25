import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'

const { Header, Content } = Layout
const { Title } = Typography
const CustomLayout = ({ children }) => (
  <Layout>
    <Header>
      <Row justify='center' align='middle'>
        <Col>
          <Title level={1} style={{ color: 'white' }}>
            List of Restaurant
          </Title>
        </Col>
      </Row>
    </Header>
    <Content>{children}</Content>
  </Layout>
)

export default CustomLayout
