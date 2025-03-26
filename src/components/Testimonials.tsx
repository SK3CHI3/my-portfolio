
import React from 'react';

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  position: string;
  avatar: string;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with Moskur was an incredible pleasure. Their expertise and attention to detail transformed our vision into a stunning website.",
      author: "Jane Smith",
      position: "CEO at TechStart",
      avatar: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png"
    },
    {
      id: 2,
      quote: "Not only did they deliver on time, but the quality of work exceeded our expectations. I highly recommend their services!",
      author: "Mark Johnson",
      position: "Marketing Director",
      avatar: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png"
    },
    {
      id: 3,
      quote: "Responsive, creative, and technically skilled. Exactly what we needed for our web project!",
      author: "Sarah Williams",
      position: "Product Manager",
      avatar: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="hero-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          DON'T JUST TAKE MY<br/><span className="text-neon">💬WORD</span> FOR IT.
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center text-lg text-gray-600">
            "Working with Moskur was an absolute pleasure. Their expertise and attention to detail transformed our vision into a stunning website. I highly recommend their services!"
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
