import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <SidebarTrigger />
      <Button className="" size="lg" asChild>
        <Link href="/" className="text-3xl">
          My Anime List
        </Link>
      </Button>
    </div>
  );
};
export default Logo;
