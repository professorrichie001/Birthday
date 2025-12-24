import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import MessagesSection from './components/MessagesSection';
import WishesSection from './components/WishesSection';

function App() {
  return (
    <div>
      <Hero />
      <GallerySection />
      <MessagesSection />
      <WishesSection />

      <footer
        className="py-4 text-center text-white"
        style={{ background: 'linear-gradient(90deg, #ec4899 0%, #f97316 100%)' }}
      >
        <div className="container">
          <p className="mb-1 fs-5 fw-semibold">Happy Birthday, Mom! 🎉</p>
          <p className="mb-0" style={{ fontSize: '0.95rem' }}>With endless love and gratitude from your family 💕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

