import { Camera, Star } from 'lucide-react';

export default function MemoriesSection() {
  const memories = [
    {
      title: "Your Warmth",
      description: "The way you make everyone feel at home with your warm smile and caring heart",
      icon: "❤️"
    },
    {
      title: "Your Wisdom",
      description: "The guidance and life lessons you've shared that have shaped who we are",
      icon: "✨"
    },
    {
      title: "Your Laughter",
      description: "The joy and happiness you bring to every moment we spend together",
      icon: "😊"
    },
    {
      title: "Your Strength",
      description: "The courage and resilience you show that inspires us every day",
      icon: "💪"
    },
    {
      title: "Your Cooking",
      description: "Those incredible meals made with love that taste like home",
      icon: "🍳"
    },
    {
      title: "Your Support",
      description: "Always being there, no matter what, with open arms and an open heart",
      icon: "🤗"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Camera className="w-12 h-12 mx-auto mb-4 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Celebrating You
          </h2>
          <p className="text-xl text-gray-600">
            The beautiful moments and qualities that make you so special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {memory.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                {memory.title}
                <Star className="w-5 h-5 text-amber-400 fill-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {memory.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

