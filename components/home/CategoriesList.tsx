import { categories } from "@/utils/categories";
import Link from "next/link";
const CategoriesList = ({
  search,
  genre,
}: {
  search?: string;
  genre?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div>
      <div className="flex my-4 font-bold gap-x-4">
        {categories.map((item) => {
          const isActive = item.label === genre; 
          return (
            <Link
              href={`/?genre=${item.label}${searchTerm}`}
              key={item.label}
            >
              <article
                className={`p-3 flex flex-col justify-center hover:text-primary hover:scale-110 hover:duration-300 items-center ${
                  isActive ? "text-primary" : ""
                }`}
              >
                <item.icon />
                <p>{item.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
