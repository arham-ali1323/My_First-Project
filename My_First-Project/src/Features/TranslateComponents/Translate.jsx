import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Form,
  Card,
  InputGroup,
  Offcanvas
} from 'react-bootstrap';
import logo from "../../images/Navimg.png";
import { BsArrowUpRight, BsClipboard, BsGear } from 'react-icons/bs';

const Translate = () => {
  const [maxLength, setMaxLength] = useState(512);
  const [input, setInput] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      <section className="Translate">
        {/* Add this style block */}
        <style>{`
          .Translate .navbar a,
          .Translate .navbar .nav-link,
          .Translate .navbar .navbar-nav a {
            color: #000 !important;
          }
          .Translate .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          }
          .Translate .navbar-toggler {
            border-color: #000 !important;
          }
        `}</style>

  <Button 
          variant="light" 
          onClick={handleShow}
          style={{
            position: 'fixed',
            right: '20px',
            top: '20px',
            zIndex: 1000,
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          <img 
            src={logo} 
            alt="App Logo" 
            style={{
              height: '24px',
              width: 'auto'
            }}
          />
        </Button>
        <Container fluid className="p-4" style={{ backgroundColor: '#f8f9fa', marginBottom:'3rem'}}>
          <Row className="mb-3 align-items-center">
            <Col md="auto">
              <Dropdown>
                <Dropdown.Toggle variant="light">All</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Option 1</Dropdown.Item>
                  <Dropdown.Item>Option 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md>
              <InputGroup>
                <Form.Control
                  placeholder="Enter What You Need"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="primary">Submit</Button>
              </InputGroup>
            </Col>
            <Col md="auto">
              <Card className="p-3 bg-white rounded shadow-sm text-center" style={{ minWidth: 220 }}>
                <div className="fw-bold">Max. length</div>
                <Form.Range
                  min={256}
                  max={1500}
                  value={maxLength}
                  onChange={(e) => setMaxLength(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-muted small">
                  <span>256</span><span>512</span><span>1500</span>
                </div>
              </Card>
            </Col>
          </Row>

          <Card className="border-0 shadow-sm" style={{ minHeight: '60vh' }}>
            <Card.Body>
              <div style={{ color: '#ccc' }}>&#9660;</div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end gap-2 bg-white border-top-0">
              <Button variant="light"><BsArrowUpRight /></Button>
              <Button variant="light"><BsClipboard /></Button>
            </Card.Footer>
          </Card>
        </Container>

        {/* Offcanvas Sidebar */}
      <Offcanvas 
  show={showOffcanvas} 
  onHide={handleClose} 
  placement="end"
  style={{ width: '350px' }}
>
  <Offcanvas.Header closeButton className="border-bottom">
    <div className="d-flex align-items-center">
      {/* Add your logo here - replace with your actual logo path */}
      <img 
        src={logo}
        alt="Company Logo" 
        style={{ 
          height: '30px', 
          marginRight: '10px' 
        }}
      />
      <Offcanvas.Title>Settings</Offcanvas.Title>
    </div>
  </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mb-4">
              <h6>Translation Options</h6>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Output Language</Form.Label>
                  <Form.Select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Formality</Form.Label>
                  <Form.Select>
                    <option>Default</option>
                    <option>More formal</option>
                    <option>Less formal</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label="Auto-detect language"
                  defaultChecked
                />
              </Form>
            </div>
            
            <div className="mb-4">
              <h6>Appearance</h6>
              <Form>
                <Form.Check 
                  type="switch"
                  id="dark-mode-switch"
                  label="Dark mode"
                />
                <Form.Check 
                  type="switch"
                  id="compact-view"
                  label="Compact view"
                />
              </Form>
            </div>
            
            <Button variant="primary" className="w-100 mt-3">
              Save Settings
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </>
  );
};

export default Translate;