"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HiOutlineFolder } from "react-icons/hi"

const Breadcrumbs = () => {
  const pathArray = usePathname().split('/').filter((x) => x !== '');

  return (
    <div aria-label="breadcrumb" className='ml-16 text-sm breadcrumbs flex-shrink-0'>
      <ul className="flex flex-wrap list-none rounded overflow-hidden text-slate-700">
        {pathArray.map((path, index) => {
          const href = `/${pathArray.slice(0, index + 1).join('/')}`;
          const isLast = index === pathArray.length - 1;
          return (
            <li
              key={path}
              className={`flex items-center text-sm ${isLast ? 'text-gray-600' : 'text-gray-400'
                }`}
            >
              {isLast ? (
                <span
                  className='text-slate-500 py-2'
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </span>
              ) : (
                <>
                  <Link
                    href={href}
                    className="
                      text-gray-400 
                      hover:text-gray-600 
                      py-2
                      ">
                    <HiOutlineFolder className="mr-1" />
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;