import ImageGallery  from "../components/ImageGallery";
import  Navbar  from "../components/Navbar";
import UploadFrom from "../components/UploadFrom";

const Home=()=>{
   
    return(
        <div className='max-w-4xl mx-auto' style={{ 
                backgroundImage: "url('https://wallpapers.com/images/featured/colorful-abstract-background-rra8u4adw1ubypzl.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: '100vh' 
            }}>
            <Navbar/>
            <UploadFrom/>
            <ImageGallery/>
        </div>
    )
}
export default Home;
