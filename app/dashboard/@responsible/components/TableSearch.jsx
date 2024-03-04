"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const TableSearch = ({terms}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // create a handler function for the input change
  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);
    // get the input value
    const term = e.target.value;

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <form className="relative flex w-full max-w-2xl items-center">
      <svg
        className="absolute left-2 block h-5 w-5 text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" className=""></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
      </svg>
      {/* add the onChange handler and the value to the input */}
      <input
        type="name"
        name="search"
        className="h-12 placeholder:text-slate-500 text-slate-500 w-full border-b-base-300 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2"
        placeholder={`Chercher par ${terms.join(', ')}...`}
        onChange={handleChange}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </form>
  )
}

export default TableSearch