// import useFriestore from "../hooks/useFriestore";

// const ImageGallery = () => {
//   const {docs:images,isLoading}=useFriestore('images');
//   if(isLoading){
//     return(
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }
//   return (
//     <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
//     {images.map((image)=>(
//         <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
//         <figure className="max-h-[15rem]">
//           <img src={image.imageUrl} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <p>Upload by:{image.userEmail}</p>
//           <span>Created on:{image.createdAt.toLocaleString()}</span>
//           </div>
//         </div>
//     ))}
// </div>
//   )
// }
// export default ImageGallery;

// import useFriestore from "../hooks/useFriestore";
// import { FaCircleDown } from "react-icons/fa6";

// const ImageGallery = () => {
//   const { docs: images, isLoading } = useFriestore('images');
  
//   if (isLoading) {
//     return (
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }
  
//   return (
//     <div className="grid md:grid-cols-4 justify-center gap-4 mt-10" >
//       {images.map((image) => (
//         <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
//           <figure className="h-[15rem] overflow-hidden flex items-center ">
//             <img 
//               src={image.imageUrl} 
//               alt="Uploaded image" 
//               className="object-cover " 
//             />
//           </figure>
//           <div className="card-body">
//             <p>Upload by: {image.userEmail}</p>
//             <span>Created on: {image.createdAt.toLocaleString()}</span>
//             <div className="flex justify-end">
//             <a href={image.imageUrl} download={`image-${image.createdAt.toLocaleString()}.jpeg`} className="text-xl">
//   <FaCircleDown />
// </a>

//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageGallery;

// import { useState } from 'react';
// import useFriestore from "../hooks/useFriestore";
// import { FaCircleDown } from "react-icons/fa6";

// const ImageGallery = () => {
//   const { docs: images, isLoading } = useFriestore('images');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };
//   const handleDownload = async (image, imageUrl) => {
//     try {
//       // Fetch the image data
//       const response = await fetch(imageUrl);
//       if (!response.ok) throw new Error('Network response was not ok');

//       // Convert the response to a Blob
//       const blob = await response.blob();

//       // Create a temporary URL for the Blob
//       const blobUrl = URL.createObjectURL(blob);

//       // Create a temporary link element and trigger the download
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.download = filename;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       // Revoke the Blob URL to free up memory
//       URL.revokeObjectURL(blobUrl);
//     } catch (error) {
//       console.error('Failed to download image:', error);
//     }
//   };
//   const filteredImages = images.filter((image) =>
//     image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (isLoading) {
//     return (
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="text-center mt-5">
//         <input
//           type="text"
//           placeholder="🔍Search Uploader"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="input input-bordered w-60 h-7"
//         />
//       </div>
//       <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
//         {filteredImages.map((image) => (
//           <div key={image.imageUrl} className="card card-compact bg-transparent	 w-full shadow-xl">
//             <figure className="h-[15rem] overflow-hidden flex items-center ">
//               <img
//                 src={image.imageUrl}
//                 alt="Uploaded image"
//                 className="object-cover "
//               />
//             </figure>
//             <div className="card-body">
//               <p>Uploaded by: {image.userEmail}</p>
//               <span>Created on: {image.createdAt.toLocaleString()}</span>
//               <div className="flex justify-end mt-2">
//               <button 
//                 onClick={() => handleDownload(image.imageUrl, `image-${image.imageUrl}.jpeg`)} 
//                 className="text-xl">
//                 <FaCircleDown />
//               </button>
//             </div>
//             </div>

              



//           </div>
//         ))}
//         -
//       </div>
//     </div>
//   );
// }

// export default ImageGallery;


// import React, { useState } from 'react';
// import useFriestore from "../hooks/useFriestore";
// import { FaCircleDown } from "react-icons/fa6";

// const ImageGallery: React.FC = () => {
//   const { docs: images, isLoading } = useFriestore('images');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredImages = images.filter((image) =>
//     image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (isLoading) {
//     return (
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex justify-center mt-8">
//         <input
//           type="text"
//           placeholder="🔍Search by uploader..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="input input-bordered  w-70 h-6"
//         />
//       </div>
//       <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
//         {filteredImages.map((image) => (
//           <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
//             <figure className="h-[15rem] overflow-hidden flex items-center ">
//               <img
//                 src={image.imageUrl}
//                 alt="Uploaded image"
//                 className="object-cover "
//               />
//             </figure>
//             <div className="card-body">
//               <p>Uploaded by: {image.userEmail}</p>
//               <span>Created on: {image.createdAt.toLocaleString()}</span>
//               <div className="flex justify-end">
//                 <a href={image.imageUrl} download >
//                   <FaCircleDown />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageGallery;

// import React, { useState } from 'react';
// import useFriestore from "../hooks/useFriestore";
// import { FaCircleDown } from "react-icons/fa6";

// const ImageGallery: React.FC = () => {
//   const { docs: images, isLoading } = useFriestore('images');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredImages = images.filter((image) =>
//     image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const downloadImage = async (imageUrl, imageName) => {
//     const response = await fetch(imageUrl);
//     const blob = await response.blob();
//     const fileType = response.headers.get('Content-Type');
//     let fileExtension;

//     if (fileType.includes('image/gif')) {
//       fileExtension = '.gif';
//     } else if (fileType.includes('image/jpeg') || fileType.includes('image/png')) {
//       fileExtension = '.jpg'; // or '.png' depending on the type
//     } else {
//       console.error('Unsupported file type');
//       return;
//     }

//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `${imageName}${fileExtension}`;
//     link.click();

//     URL.revokeObjectURL(link.href);
//   };

//   if (isLoading) {
//     return (
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex justify-center mt-8">
//         <input
//           type="text"
//           placeholder="🔍Search by uploader..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="input input-bordered w-70 h-6"
//         />
//       </div>
//       <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
//         {filteredImages.map((image) => (
//           <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
//             <figure className="h-[15rem] overflow-hidden flex items-center">
//               <img
//                 src={image.imageUrl}
//                 alt="Uploaded image"
//                 className="object-cover"
//               />
//             </figure>
//             <div className="card-body">
//               <p>Uploaded by: {image.userEmail}</p>
//               <span>Created on: {image.createdAt.toLocaleString()}</span>
//               <div className="flex justify-end">
//                 <button onClick={() => downloadImage(image.imageUrl, `downloaded_image_${image.userEmail}`)}  className="text-xl">
//                   <FaCircleDown />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageGallery;

// import React, { useState, useEffect } from 'react';
// import useFriestore from "../hooks/useFriestore";
// import { FaCircleDown } from "react-icons/fa6";

// const ImageGallery: React.FC = () => {
//   const { docs: images, isLoading } = useFriestore('images');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [validImages, setValidImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const checkImages = async () => {
//       const validImageList = [];

//       for (const image of images) {
//         try {
//           const response = await fetch(image.imageUrl);
//           if (response.ok) {
//             validImageList.push(image);
//           }
//         } catch (error) {
//           console.error(`Image ${image.imageUrl} is not valid:`, error);
//         }
//       }

//       setValidImages(validImageList);
//     };

//     if (images.length > 0) {
//       checkImages();
//     }
//   }, [images]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredImages = validImages.filter((image) =>
//     image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const downloadImage = async (imageUrl, imageName) => {
//     const response = await fetch(imageUrl);
//     const blob = await response.blob();
//     const fileType = response.headers.get('Content-Type');
//     let fileExtension;

//     if (fileType.includes('image/gif')) {
//       fileExtension = '.gif';
//     } else if (fileType.includes('image/jpeg') || fileType.includes('image/png')) {
//       fileExtension = '.jpg'; // or '.png' depending on the type
//     } else {
//       console.error('Unsupported file type');
//       return;
//     }

//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `${imageName}${fileExtension}`;
//     link.click();

//     URL.revokeObjectURL(link.href);
//   };

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setIsModalOpen(false);
//   };

//   if (isLoading) {
//     return (
//       <div className="text-center mt-10">
//         <progress className="progress w-56"></progress>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="flex justify-center mt-8">
//         <input
//           type="text"
//           placeholder="🔍Search by uploader..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="input input-bordered w-70 h-6"
//         />
//       </div>
//       <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
//         {filteredImages.map((image) => (
//           <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
//             <figure className="h-[15rem] overflow-hidden flex items-center" onClick={() => openModal(image)}>
//               <img
//                 src={image.imageUrl}
//                 alt="Uploaded image"
//                 className="object-cover cursor-pointer"
//               />
//             </figure>
//             <div className="card-body">
//               <p>Uploaded by: {image.userEmail}</p>
//               <span>Created on: {image.createdAt.toLocaleString()}</span>
//               <div className="flex justify-end">
//                 <button onClick={() => downloadImage(image.imageUrl, `downloaded_image_${image.userEmail}`)} className="text-xl">
//                   <FaCircleDown />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && selectedImage && (
//         <div className="modal modal-open">
//           <div className="modal-box relative">
//             <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</button>
//             <img src={selectedImage.imageUrl} alt="Selected image" className="w-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ImageGallery;

import { useState, useEffect } from 'react';
import useFriestore from "../hooks/useFriestore";
import { FaCircleDown } from "react-icons/fa6";

interface Image {
  imageUrl: string;
  userEmail: string;
  createdAt: {
    toLocaleString: () => string;
  };
}

const ImageGallery: React.FC = () => {
  const { docs: images, isLoading } = useFriestore<Image>('images');
  const [searchQuery, setSearchQuery] = useState('');
  const [validImages, setValidImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkImages = async () => {
      const validImageList: Image[] = [];

      for (const image of images) {
        try {
          const response = await fetch(image.imageUrl);
          if (response.ok) {
            validImageList.push(image);
          }
        } catch (error) {
          console.error(`Image ${image.imageUrl} is not valid:`, error);
        }
      }

      setValidImages(validImageList);
    };

    if (images.length > 0) {
      checkImages();
    }
  }, [images]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredImages = validImages.filter((image) =>
    image.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadImage = async (imageUrl: string, imageName: string) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const fileType = response.headers.get('Content-Type');

    if (!fileType) {
      console.error('File type is null');
      return;
    }

    let fileExtension;

    if (fileType.includes('image/gif')) {
      fileExtension = '.gif';
    } else if (fileType.includes('image/jpeg') || fileType.includes('image/png')) {
      fileExtension = '.jpg'; // or '.png' depending on the type
    } else {
      console.error('Unsupported file type');
      return;
    }

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${imageName}${fileExtension}`;
    link.click();

    URL.revokeObjectURL(link.href);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="🔍Search by uploader..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="input input-bordered w-70 h-6"
        />
      </div>
      <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
        {filteredImages.map((image) => (
          <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
            <figure className="h-[15rem] overflow-hidden flex items-center" onClick={() => openModal(image)}>
              <img
                src={image.imageUrl}
                alt="Uploaded image"
                className="object-cover cursor-pointer"
              />
            </figure>
            <div className="card-body">
              <p>Uploaded by: {image.userEmail}</p>
              <span>Created on: {image.createdAt.toLocaleString()}</span>
              <div className="flex justify-end">
                <button onClick={() => downloadImage(image.imageUrl, `downloaded_image_${image.userEmail}`)} className="text-xl">
                  <FaCircleDown />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</button>
            <img src={selectedImage.imageUrl} alt="Selected image" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
