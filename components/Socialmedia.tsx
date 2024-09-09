import React from 'react';
import { Button } from './ui/MovingBorders';
import { SocialMedia } from '@/data';

// Assuming Socialmedia is an array of objects with 'thumbnail' property
const Socialmedia = () => {
  const Socialmedia = [
    { thumbnail: '/path/to/image1.jpg' },
    { thumbnail: '/path/to/image2.jpg' },
    { thumbnail: '/path/to/image3.jpg' },
    // Add more objects as needed
  ];

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My {' '}
        <span>
          <span className="text-purple">Social Media</span> and
          <span className="text-purple"> Educational</span> Accounts
        </span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {SocialMedia.map((card) => (
          <Button key={card.id} duration={Math.floor(Math.random() * 10000)+10000} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
            <div className="flex lg:flex-row flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-start text-white-100 mt-3 font-semibold">{card.desc}</p>
                </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Socialmedia;
