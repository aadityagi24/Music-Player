// import { useState } from "react"; 

// const Artist = () => {
//   const [state, setState] = useState([
//     { artist: "b praak.jpg", name: "B Praak" },
//     { artist: "honey.jpg", name: "Honey Singh" },
//     { artist: "jass.jpg", name: "Jass Manak" },
//     { artist: "sidhu.jpg", name: "Sidhu Moosewala" },
//     { artist: "Kulwinder.jpg", name: "Kulwinder Billa" },
//     { artist: "Sandeep.jpg", name: "Sandeep Brar" }
//   ]);

//   return (
//     <div className="flex flex-nowrap mt-4">
//       {state.map((item, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center justify-center w-[120px] bg-transparent"
//           style={{ height: 'auto' }} // Allow height to adjust based on content
//         >
//           {/* Image */}
//           <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src={item.artist}
//               alt={item.name}
//             />
//           </div>
//           {/* Artist Name */}
//           <p className="text-xs font-medium text-black mt-2 text-center w-full">
//             {item.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Artist;

import { useState } from "react"; 

const Artist = () => {
  const [state, setState] = useState([
    { artist: "b praak.jpg", name: "B Praak" },
    { artist: "honey.jpg", name: "Honey Singh" },
    { artist: "jass.jpg", name: "Jass Manak" },
    { artist: "sidhu.jpg", name: "Sidhu Moosewala" },
    { artist: "Kulwinder.jpg", name: "Kulwinder Billa" },
    { artist: "Sandeep.jpg", name: "Sandeep Brar" }
  ]);

  return (
    <div className="flex flex-nowrap mt-4 py-4 bg-gray-900"> {/* Adjust background color here */}
      {state.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-[120px] bg-transparent mx-2"
        >
          {/* Image */}
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={item.artist}
              alt={item.name}
            />
          </div>
          {/* Artist Name */}
          <p className="text-sm font-semibold text-gray-100 mt-2 text-center w-full">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Artist;

