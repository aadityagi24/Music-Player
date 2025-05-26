import React from 'react';
import { useState } from 'react';

const CategoryCard = () => {
  const [state] = useState([
    { category: "hiphopp.jpg" },
    { category: "rap.jpg" },
    { category: "rock.jpg" }
  ]);

  return (
    <div className="flex flex-wrap gap-4 justify-around p-5 bg-gray-900">
      {state.map((item, index) => (
        <div key={index} className="w-[200px] h-[200px] flex justify-center items-center bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
          <img 
            className="w-full h-full object-cover" 
            src={item.category} 
            alt={`category-${index}`} 
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
