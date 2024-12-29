import { CircleUserRound } from "lucide-react";
import Image from "next/image";
// import { getProfileAction } from "@/actions/actions";

const UserIcon = async () => {
  // const profile = await getProfileAction();

  return (
    <>
      {/* {profile?.profileImage ? (
        <img
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "48px",
            height: "48px",
          }}
          src={profile.profileImage}
          alt="User Avatar"
        />
      ) : (
        <CircleUserRound
          size={48} // ขนาดไอคอนที่ต้องการ
          color="#888" // สีของไอคอน
        />
      )}
      <hr /> */}
       <CircleUserRound
          size={48} // ขนาดไอคอนที่ต้องการ
          color="#888" // สีของไอคอน
        />
    </>
  );
};

export default UserIcon;
