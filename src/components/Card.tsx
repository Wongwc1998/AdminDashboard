type CardProps = {
  title: string;
  content: string;
};

export default function Card(props: CardProps) {
  return (
    <article className="shadow-xl rounded-xl p-10 border-l-8 border-yellow-500 border-solid relative bg-white">
      <h1 className="font-black text-black">{props.title}</h1>
      <p className="text-slate-700 text-sm">{props.content}</p>
      <div className="flex flex-row gap-4 bottom-8 right-8 absolute">
        <svg
          className="text-slate-700 w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
        </svg>
        <svg
          className="text-slate-700 w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {" "}
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />{" "}
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <svg
          className="text-slate-700 w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />{" "}
          <polyline points="16 6 12 2 8 6" />{" "}
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      </div>
    </article>
  );
}
