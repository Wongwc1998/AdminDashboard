export default function Navbar() {
  return (
    <section className="shadow-xl">
      <div className="flex gap-5 flex-row justify-between items-center mx-10">
        <div className="flex flex-row gap-5 min-h-full items-center">
          {" "}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="bg-slate-300 rounded-full px-4 w-96 h-10"
          />
        </div>
        <div className="flex flex-row items-center gap-5">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>{" "}
          <img
            src="assets/images/unsplash.jpg"
            alt="User Avatar"
            width={60}
            className="aspect-square rounded-full m-4 inline-block"
          />
          <h2 className="font-black text-lg">Morgan Oakley</h2>
        </div>
      </div>
      <div className="flex gap-5 flex-row justify-between items-center mx-10">
        <div className="flex flex-row gap-10">
          {" "}
          <img
            src="assets/images/unsplash.jpg"
            alt="User Avatar"
            width={80}
            className="aspect-square rounded-full my-4"
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-black text-sm">Hi there,</h2>
            <h1 className="font-black text-2xl">Morgan Oakley (@morgan)</h1>
          </div>
        </div>
        <div>
          <button className="bg-sky-500 rounded-full mx-5 px-8 py-2 text-white font-bold">
            New
          </button>
          <button className="bg-sky-500 rounded-full mx-5 px-8 py-2 text-white font-bold">
            Upload
          </button>
          <button className="bg-sky-500 rounded-full mx-5 px-8 py-2 text-white font-bold">
            Share
          </button>
        </div>
      </div>
    </section>
  );
}
