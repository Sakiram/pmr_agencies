import React from 'react';

// const Card = ({ image, pdf, title }) => {
//   return (
//     <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//       <div>
//         <a href={pdf} target="_blank">
//           <img src={image} alt={title} />
//           <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View {title}</h1>
//         </a>
//       </div>
//     </div>
//   );
// };

const About = () => {
  // const cardsData = [
  //   { title: 'AView Aisan Paint – Apcolite emulsion', image: require('../assest/1.jpg'), pdf: require('../assest/1.pdf') },
  //   { title: 'View Asian Paint – Apcolite Enamel', image: require('../assest/2.jpg'), pdf: require('../assest/2.pdf') },
  //   { title: 'View Asian Paint Apex And Tile Guard', image: require('../assest/3.jpg'), pdf: require('../assest/3.pdf') },
  //   { title: 'View Apex floor guard shade card', image: require('../assest/4.jpg'), pdf: require('../assest/4.pdf') },
  //   { title: 'View Asian Paints book of colours', image: require('../assest/5.jpg'), pdf: require('../assest/5.pdf') },
  //   { title: 'View Asian Paints WOODTECH DIGITAL SHADE CARD', image: require('../assest/6.jpg'), pdf: require('../assest/6.pdf') },
  //   { title: 'View Asian Paints Royale Aspira Shade Book', image: require('../assest/7.jpg'), pdf: require('../assest/7.pdf') },
  //   { title: 'View ACE APEX Shade Card', image: require('../assest/8.jpg'), pdf: require('../assest/8.pdf') },
    
  // ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
        {/* {cardsData.map((card, index) => (
          <Card key={index} image={card.image} pdf={card.pdf} title={card.title} />
        ))} */}
        About
      </div>
    </div>
  );
};

export default About;






// import React from 'react'
// import myImage from '../assest/Aisan-Paint-Apcolite-emulsion.jpg'; // Import the image
// import myPdf from '../assest/Aisan Paint - Apcolite emulsion.pdf'; // Import the PDF file

// const About = () => {
//   return (
//     <div>
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
//       {/* <div className="bg-slate-700 ml-8 mt-8 w-64 h-72 border-slate-400 rounded-lg shadow-md hover:-translate-y-2 delay-75">
//         <div>
//           <i className="fa-solid fa-cart-shopping text-slate-50 text-4xl relative top-12 ml-6"></i>
//           <p className="leading-7 text-slate-100 tracking-wide mt-16 ml-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quos excepturi consectetur, dolores provident voluptate vero temporibus eum, corporis dicta eius itaque </p>
//         </div>
//       </div>
//       <div className="bg-slate-700 ml-8 mt-8 w-64 h-72 border-slate-400 rounded-lg shadow-md hover:-translate-y-2 delay-75">
//         <div>
//           <i className="fa-solid fa-truck-fast text-slate-50 text-4xl relative top-12 ml-6"></i>
//           <p className="leading-7 text-slate-100 tracking-wide mt-16 ml-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quos excepturi consectetur, dolores provident voluptate vero temporibus eum, corporis dicta eius itaque </p>
//         </div>
//       </div>
//       <div className="bg-slate-700 ml-8 mt-8 w-64 h-72 border-slate-400 rounded-lg shadow-md hover:-translate-y-2 delay-75">
//         <div>
//           <i className="fa-solid fa-bookmark text-slate-50 text-4xl relative top-12 ml-6"></i>
//           <p className="leading-7 text-slate-100 tracking-wide mt-16 ml-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quos excepturi consectetur, dolores provident voluptate vero temporibus eum, corporis dicta eius itaque </p>
//         </div>
//       </div> */}
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
//       <div className="bg-white ml-8 mt-8 w-64 h-72 border-slate-400 rounded-sm shadow-md hover:border -translate-y-2 delay-75 overflow-hidden">
//         <div>
//           <a href={myPdf} target="_blank">
//             <img src={myImage} alt="Asian Paint - Apcolite emulsion" />
//             <h1 className="text-slate-800 text-center mt-6 font-medium text-xl">View Aisan Paint – Apcolite emulsion</h1>
//           </a>
//         </div>
//       </div>
      
//     </div>
//     </div>
//   )
// }

// export default About