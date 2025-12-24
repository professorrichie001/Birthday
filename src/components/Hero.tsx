import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from 'lucide-react';

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

      if (now > end) {
        end.setDate(end.getDate() + 1);
      }

      const diff = Math.max(0, end.getTime() - now.getTime());

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-gradient py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="text-center">
            <Heart className="float-animation mb-4" size={80} color="#dc2626" fill="#dc2626" />

            <h1 className="display-3 fw-bold mb-4" style={{ color: '#be123c' }}>
              Happy Birthday
            </h1>

            <h2 className="display-5 fw-semibold mb-5" style={{ color: '#7c2d12' }}>
              To the Most Amazing Mom
            </h2>

            <p className="fs-5 mb-5" style={{ color: '#5f2818', maxWidth: '700px', margin: '0 auto' }}>
              Today we celebrate the wonderful woman who has filled our lives with love, laughter, and countless beautiful memories. You are truly one of a kind!
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
              {[
                { label: 'Days', value: countdown.days },
                { label: 'Hours', value: countdown.hours },
                { label: 'Minutes', value: countdown.minutes },
                { label: 'Seconds', value: countdown.seconds }
              ].map((item) => (
                <div key={item.label} className="countdown-item">
                  <div className="countdown-number">{String(item.value).padStart(2, '0')}</div>
                  <div className="countdown-label">{item.label}</div>
                </div>
              ))}
            </div>

            <button
              className="btn btn-birthday btn-lg px-5 py-3"
              onClick={() => document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Leave Your Message 💌
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

