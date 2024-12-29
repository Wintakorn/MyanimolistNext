// 'use client'
// import React, { useEffect, useState } from "react";
// import { fetchProfileDetail } from "@/actions/actions";




// const ProfilePage = ({ clerkId }: { clerkId: string }) => {
//   const [user, setUser] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getUserProfile = async () => {
//       try {
//         const profileData = await fetchProfileDetail(clerkId);
//         // console.log("Profile Data:", profileData);
//         setUser(profileData);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     getUserProfile();
//   }, [clerkId]);
//   console.log("User:", user);
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen py-10 px-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         {/* Profile Header */}
//         <div className="bg-indigo-600 text-white p-6">
//           <div className="flex items-center">
//             <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden border-4 border-white">
//               <img
//                 src={"/default-avatar.png"}
//                 alt="Profile Avatar"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="ml-4">
//               <h1 className="text-2xl font-bold">{user?.userName || "N/A"}</h1>
//             </div>
//           </div>
//         </div>

//         {/* Profile Content */}
//         <div className="p-6">
//           {/* Personal Info */}
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">First Name</p>
//                 <p className="font-medium">{user?.firstName || "N/A"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Last Name</p>
//                 <p className="font-medium">{user?.lastName || "N/A"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Email</p>
//                 <p className="font-medium">{user?.email || "N/A"}</p>
//               </div>
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex justify-between items-center mb-6">
//             <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700">
//               Edit Profile
//             </button>
//             <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page