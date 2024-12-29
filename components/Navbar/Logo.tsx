import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button className="" size="lg" asChild>
      <Link href="/" className="text-3xl">
        My Anime List
      </Link>
    </Button>
  );
};
export default Logo;
