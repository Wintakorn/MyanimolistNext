"use client";
const Description = ({ description }: { description: string }) => (
    <div className="py-3">
      <h3 className="text-xl font-semibold border-b py-1">Synopsis</h3>
      <p>{description}</p>
    </div>
  );
  
  export default Description;
  