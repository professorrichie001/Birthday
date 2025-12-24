import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

interface Message {
  name: string;
  message: string;
  timestamp: Date;
}

export default function MessagesSection() {
  const [messages, setMessages] = useState<Message[]>([
    { name: 'From Your Loving Family', message: 'Thank you for everything you do. You are the heart of our home and the inspiration for our dreams.', timestamp: new Date() }
  ]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      setMessages([
        { name: formData.name, message: formData.message, timestamp: new Date() },
        ...messages
      ]);
      setFormData({ name: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="messages" className="py-5" style={{ backgroundColor: '#fff7ed' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
            Share Your Love & Wishes
          </h2>
        </div>

        <Row className="g-4">
          <Col lg={6}>
            <div className="p-4 rounded-4" style={{ backgroundColor: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h4 className="mb-4" style={{ color: '#be123c' }}>Leave Your Message</h4>

              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Your message has been added! Thank you for your love and wishes!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#7c2d12', fontWeight: '600' }}>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={{ borderColor: '#ec4899' }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ color: '#7c2d12', fontWeight: '600' }}>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your heartfelt message..."
                    style={{ borderColor: '#ec4899' }}
                  />
                </Form.Group>

                <Button className="btn-birthday w-100 py-2" size="lg">
                  Send Message 💕
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={6}>
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <h4 className="mb-4" style={{ color: '#be123c' }}>Messages from Everyone</h4>
              <div className="d-flex flex-column gap-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="wish-card p-4 rounded-3"
                  >
                    <h5 style={{ color: '#be123c', marginBottom: '0.5rem' }}>
                      {msg.name}
                    </h5>
                    <p style={{ color: '#5f2818', marginBottom: '0.5rem' }}>
                      {msg.message}
                    </p>
                    <small style={{ color: '#b45309' }}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

