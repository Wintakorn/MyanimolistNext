"use client";
const ImageContainer = ({ mainImage, name }: { mainImage: string; name: string }) => (
    <div className="relative w-full h-[400px]">
      <img
        src={mainImage}
        alt={name}
        className="w-full h-full object-cover "
      />
    </div>
  );
  
  export default ImageContainer;
  