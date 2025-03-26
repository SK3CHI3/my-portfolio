
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  link: string;
}

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Importance of Responsive Design in 2023",
      excerpt: "Learn why responsive design is more important than ever for websites and applications.",
      date: "June 15, 2023",
      readTime: "5 min read",
      category: "Web Design",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/blog/responsive-design"
    },
    {
      id: 2,
      title: "Getting Started with React and TypeScript",
      excerpt: "A comprehensive guide to setting up your first React project with TypeScript.",
      date: "May 28, 2023",
      readTime: "8 min read",
      category: "Development",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/blog/react-typescript"
    },
    {
      id: 3,
      title: "The Power of Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can transform your workflow and boost productivity.",
      date: "April 12, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/blog/tailwind-css"
    },
    {
      id: 4,
      title: "Improving Website Performance: Best Practices",
      excerpt: "Essential tips and techniques to optimize your website's loading speed and performance.",
      date: "March 5, 2023",
      readTime: "7 min read",
      category: "Performance",
      image: "/lovable-uploads/bcf4dfa9-3315-4514-a56b-463982860756.png",
      link: "/blog/website-performance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-dark text-white">
          <div className="hero-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
            <p className="text-gray-300 max-w-3xl mb-6">
              Sharing insights, tutorials, and thoughts on web development, design trends, 
              and the latest technologies in the industry.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="hero-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-neon">{post.category}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <Link 
                        to={post.link}
                        className="inline-flex items-center text-neon hover:underline"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="btn-primary px-8">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="hero-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Subscribe to My Newsletter</h2>
              <p className="text-gray-600 mb-8">
                Stay updated with the latest articles, tutorials, and insights on web development and design.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon focus:border-neon transition-colors"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap px-6">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
