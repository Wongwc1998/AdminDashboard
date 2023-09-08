type UserProps = {
  title: string;
  content: string;
};

export default function User(props: UserProps) {
  return (
    <article className="flex flex-row">
      <img src="../../public/unsplash.jpg" alt="User Avatar" width={50} className="aspect-square rounded-full m-2" />
      <div className="flex flex-col justify-center">
        <h1 className="font-black text-black text-sm">{props.title}</h1>
        <p className="text-slate-700 text-sm">{props.content}</p>
      </div>
    </article>
  );
}
