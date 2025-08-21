import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and industry standards.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Focused',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver results efficiently.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passionate',
      description: 'Loving what I do and continuously learning new technologies and techniques.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience creating 
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About me"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl transform rotate-3 -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With a background in both computer science and design, I bring a unique perspective 
                to every project. I specialize in creating full-stack applications that are not only 
                functional but also beautiful and user-friendly.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm always excited to take on new challenges and collaborate with teams who share 
                my passion for creating exceptional digital products.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;