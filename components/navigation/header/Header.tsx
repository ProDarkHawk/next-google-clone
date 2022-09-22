import Link from "next/link";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className, ...otherHeaderProps }) => {
  return (
    <header
      {...otherHeaderProps}
      className={`flex flex-row p-3 px-8 items-center justify-between w-full ${className}`}
    >
      <Link href={"/"}>
        <a className="hover:underline hidden sm:inline">Home</a>
      </Link>
      <div className="space-x-5">
        <Link href={"/"}>
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href={"/images"}>
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Signin
        </button>
      </div>
    </header>
  );
};

export default Header;
