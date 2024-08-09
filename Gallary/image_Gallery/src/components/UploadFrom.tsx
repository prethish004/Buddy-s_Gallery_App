// import { useState } from "react";
// import useStorage from "../hooks/useStorage";

// const UploadFrom = () => {
//   const [selectedFile,setSelectedFile]=useState<File|null>(null);
//   const { startUpload ,progress}=useStorage();
//   const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//     if(e.target.files && e.target.files[0]){
//       setSelectedFile(e.target.files[0]);
//     }
//   };
//   const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
//     e.preventDefault();
//     if(selectedFile){
//       startUpload(selectedFile);
//       console.log(selectedFile);
//     }
//     setSelectedFile(null);
//   };
//   return (
//     <div className='text-center mt-10'>
//     <form onSubmit={handleSubmit} className="flex items-center flex-col gap-8">
//       <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-info w-full max-w-xs" />
//     <button type='submit' className={`btn gap-3 ${Boolean(progress)&& 'loading'}`}  style={Boolean(progress) ? { backgroundColor: 'red' } : {}}
//     disabled={!selectedFile}>Upload🐉</button>
//     </form>
//     </div>
//   )
// }
// export default UploadFrom;
// import { useState } from "react";
// import useStorage from "../hooks/useStorage";

// const UploadFrom = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const { startUpload, progress } = useStorage();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setError(null); // Reset error
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
//       if (allowedTypes.includes(file.type)) {
//         setSelectedFile(file);
//       } else {
//         setError('Unsupported file format. Please select an image file.');
//         setSelectedFile(null);
//       }
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (selectedFile) {
//       startUpload(selectedFile);
//       console.log(selectedFile);
//     }
//     setSelectedFile(null);
//   };

//   return (
//     <div className="text-center mt-10">
//       <form onSubmit={handleSubmit} className="flex items-center flex-col gap-8">
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="file-input file-input-bordered file-input-info w-full max-w-xs"
//         />
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           type="submit"
//           className={`btn gap-3 ${Boolean(progress) && 'loading'}`}
//           style={Boolean(progress) ? { backgroundColor: 'red' } : {}}
//           disabled={!selectedFile}
//         >
//           Upload🐉
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadFrom;

import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadFrom = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null); // Reset error
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        setError('Unsupported file format. Please select an image file.');
        setSelectedFile(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
      console.log(selectedFile);
    }
    setSelectedFile(null);
  };

  return (
    <div className="text-center mt-10">
      <form onSubmit={handleSubmit} className="flex items-center flex-col gap-8">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`btn gap-3 ${selectedFile ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-400 hover:bg-gray-600'} ${Boolean(progress) && 'loading'}`}
          style={Boolean(progress) ? { backgroundColor: 'red' } : {}}
          disabled={!selectedFile}
        >
          Upload🐉
        </button>
      </form>
    </div>
  );
};

export default UploadFrom;






