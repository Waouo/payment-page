import { Container, Row, Col } from 'react-bootstrap'
import OrderInfo from '../components/OrderInfo'
import UserInfo from '../components/UserInfo'

const HomeScreen = () => {
  return (
    <>
      <Container style={{ margin: '0', maxWidth: '100%' }}>
        <Row>
          <Col sm={4} style={{ padding: '0' }}>
            <OrderInfo />
          </Col>
          <Col sm={8} style={{ padding: '0' }}>
            <UserInfo />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
