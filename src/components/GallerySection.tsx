import { Container, Row, Col } from 'react-bootstrap';

export default function GallerySection() {
  const memories = [
    { emoji: '❤️', title: 'Unconditional Love', desc: 'Always there with open arms' },
    { emoji: '👨‍👩‍👧‍👦', title: 'Family First', desc: 'The heart of our family' },
    { emoji: '🍳', title: 'Amazing Cook', desc: 'Your delicious meals taste like love' },
    { emoji: '💪', title: 'Strong Spirit', desc: 'Your strength inspires us all' },
    { emoji: '🌟', title: 'Shining Bright', desc: 'You light up every room' },
    { emoji: '🤗', title: 'Warm Hugs', desc: 'The best medicine in the world' }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
            What Makes You Special
          </h2>
        </div>

        <Row className="g-4">
          {memories.map((memory, idx) => (
            <Col lg={4} md={6} sm={12} key={idx}>
              <div className="gallery-img p-4 rounded-4 text-center h-100" style={{ backgroundColor: '#fef3c7' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{memory.emoji}</div>
                <h4 style={{ color: '#be123c', fontWeight: '600' }}>{memory.title}</h4>
                <p style={{ color: '#7c2d12', fontSize: '1rem' }}>{memory.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

