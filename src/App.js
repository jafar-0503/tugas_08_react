import React, {Component} from 'react';
import { Modal, Form, Jumbotron, Button, ListGroup, Carousel, Container, Breadcrumb, Row, Col, DropdownButton, Dropdown, Image } from 'react-bootstrap'


class App extends Component {
  render() {
    return(
      <Container fluid>
        <Row pd={2} style={{backgroundColor: 'black'}}>
          <Col><br />
          <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
            <Dropdown.Item href="#">Indonesia</Dropdown.Item>
            <Dropdown.Item href="#">English</Dropdown.Item>
          </DropdownButton>
          </Col>
          <Col md="auto"></Col>
            <Col xs={2} md={2}><br />
            <center>
            <Image width={40} height={40} src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" roundedCircle />
            <p style={{color: 'white'}}>Mukhamat Jafar</p>
            </center>
          </Col>
        </Row>

        <Row>
          <Col md={8}></Col>
          <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Info</Breadcrumb.Item>
          </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col></Col>

          <Col xs={6}>
          <Carousel style={{ width: '50rem' }}>
            <Carousel.Item>
                <center>
                <img
                className='d-block w-100'
                src='https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600'
                alt='Media-1'
                />
                </center>
              <Carousel.Caption>
              <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt='Media-2'
              />
            <Carousel.Caption>
            <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className='d-block w-100'
              src='https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600'
              alt='Media-3'
              />
            <Carousel.Caption>
            <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          </Col>

          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col>
          <ListGroup>
            <ListGroup.Item variant='success' active>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Primier Inggris</ListGroup.Item>
            <ListGroup.Item>Serie A</ListGroup.Item>
            <ListGroup.Item>Ligue 1</ListGroup.Item>
            <ListGroup.Item>Bundes Liga</ListGroup.Item>
          </ListGroup>
          </Col>

          <Col>
            <Jumbotron>
            <h1>DIVISI PRIMERA</h1>
            <p>Main Untuk Catalunya Gerrad Pique Minta Dihormati</p>
            <Button variant='primary'>Read More</Button>
            </Jumbotron>
          </Col>

          <Col>
          <center>
          <Image width={60} height={60} src="https://images.all-free-download.com/images/graphiclarge/edit_male_user_98373.jpg" roundedCircle />
          <p><b>Silahkan Login</b></p>
          </center>
          <Form>
            <Form.Group>
              <Form.Control type='email' placeholder="Masukan Email" />
            </Form.Group>

            <Form.Group>
              <Form.Control type='password' placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Check type='checkbox' label="Term & Condition" />
            </Form.Group>

            <Button variant='primary' type='submit' data-toggle="modal" data-target="#myModal">Login</Button>

              <Modal.Dialog id='myModal' className='modal fade' role='dialog'>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Anda Berhasil Login</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary'>Close</Button>
                  <Button variant='success'>Save Username & Password</Button>
                </Modal.Footer>
              </Modal.Dialog>
          </Form>
          </Col>
        </Row>

    </Container>
    )
  }
}

export default App;
