import User from "./User";

export default function Trending() {
  return (
    <section className="m-5">
      <h1 className="my-2 font-black text-black text-xl">Announcements</h1>
      <div className="shadow-xl rounded-xl p-4 flex flex-col justify-between mx-auto bg-white">
        <User title="@tegan" content="World Peace Builder" />
        <User title="@morgan" content="Super Cool Project" />
        <User title="@kendall" content="Life Changing App" />
        <User title="@alex" content="No Traffic Maker" />
      </div>
    </section>
  );
}
