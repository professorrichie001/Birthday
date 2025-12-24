import { Container, Row, Col } from 'react-bootstrap';

export default function WishesSection() {
  const wishes = [
    {
      emoji: '✨',
      title: 'Dreams Come True',
      desc: 'May all your dreams and wishes come true this year and beyond'
    },
    {
      emoji: '🎉',
      title: 'Endless Celebrations',
      desc: 'Every day filled with joy, laughter, and beautiful moments'
    },
    {
      emoji: '🌸',
      title: 'Health & Happiness',
      desc: 'A year of perfect health, happiness, and inner peace'
    },
    {
      emoji: '💎',
      title: 'Treasure Moments',
      desc: 'More precious moments with the people you love most'
    },
    {
      emoji: '🌍',
      title: 'Adventures',
      desc: 'Exciting new adventures and unforgettable experiences'
    },
    {
      emoji: '🌈',
      title: 'Bright Future',
      desc: 'A bright and beautiful future filled with love and success'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
            Our Birthday Wishes For You
          </h2>
        </div>

        <Row className="g-4">
          {wishes.map((wish, idx) => (
            <Col lg={4} md={6} sm={12} key={idx}>
              <div
                className="p-4 rounded-4 h-100 text-center"
                style={{
                  background: 'linear-gradient(135deg, #fecaca 0%, #fecdd3 100%)',
                  border: '2px solid #fda4af',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(236, 72, 153, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{wish.emoji}</div>
                <h5 style={{ color: '#be123c', fontWeight: '700', marginBottom: '0.75rem' }}>
                  {wish.title}
                </h5>
                <p style={{ color: '#7c2d12', fontSize: '0.95rem', marginBottom: 0 }}>
                  {wish.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <div
              className="p-5 rounded-4 text-center"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
                color: 'white'
              }}
            >
              <h3 className="display-6 fw-bold mb-3">
                We Love You More Than Words Can Say! 💕
              </h3>
              <p className="fs-5 mb-0">
                Thank you for being the incredible mother, friend, and inspiration you are every single day
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

