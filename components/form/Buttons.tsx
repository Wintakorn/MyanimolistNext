"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, RotateCw } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import Favoritebtn from "../card/Favoritebtn";
import FavoriteHeroBtn from "../hero/FavoriteHeroBtn";
import { icon } from "leaflet";

type btnSize = "default" | "lg" | "sm";
// const roitai:string = 'tam'
type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  // code
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${className} capitalize`}
    >
      {pending ? (
        <>
          <RotateCw className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" variant="outline">
        <Heart />
      </Button>
    </SignInButton>
  );
};
export const SignInCardButton1 = () => {
  return (
    <SignInButton mode="modal">
      <Button
        className='w-full my-2' style={{
          backgroundColor: '#414141',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px',
          borderRadius: '5px',
        }}
      >
        <Favoritebtn />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  // console.log('is',isFavorite)
  const { pending } = useFormStatus()
  return <Button
    className='w-full my-2' style={{
      backgroundColor: '#414141',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      borderRadius: '5px',
    }}
  >
    {
      pending
        ? <RotateCw className="animate-spin" />
        : isFavorite
          ? <p>You have liked it.</p>
          : <Favoritebtn />
    }
  </Button>;
};

export const HeroSubmitBtn = ({ isFavorite }: { isFavorite: boolean }) => {
  // console.log('is',isFavorite)
  const { pending } = useFormStatus()
  return <Button
    type="submit"
    size='icon'
    variant='outline'
    className="rounded"
  >
    {
      pending
        ? <RotateCw className="animate-spin" />
        : isFavorite
          ? <Heart fill="red" />
          : <Heart />
    }
  </Button>;
};


{/* <button className="bg-white text-black px-4 py-2 rounded-md">
<Link href={`/manga/${id}`}>
  Favorite
</Link>
</button> */}