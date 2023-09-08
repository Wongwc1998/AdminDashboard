import Announcement from "./Announcement";

export default function Announcements() {
  return (
    <>
      <section className="m-5">
        <h1 className="my-5 font-black text-black text-xl">Announcements</h1>
        <div className="shadow-xl rounded-xl p-4 flex flex-col divide-y-2 justify-between mx-auto bg-white">
          <Announcement title="Site Maintenance" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptatum ipsa cupiditate unde minima odio sunt fugit distinctio labore sit accusantium voluptas voluptate aliquid rem adipisci harum, quasi modi eum quae veritatis amet iusto ratione ea fugiat." />
          <Announcement title="Community Share Day" content="Vel rem, ipsa officia commodi veniam excepturi, ex, molestias perspiciatis consequuntur sint error voluptatem cum facilis? Voluptas accusantium, nemo laboriosam quidem ipsum explicabo sed alias possimus reprehenderit libero? Quidem illo nisi fuga odio veritatis ipsa ex quae, aut saepe!" />
          <Announcement title="Updated Privacy Policy" content="Accusamus nihil dicta, quisquam, similique doloremque unde quidem quaerat a possimus eum deleniti libero, dolore asperiores nulla!Consectetur numquam ex, sit cupiditate cumque aut quas natus beatae nulla veritatis architecto maiores exercitationem debitis, adipisci delectus corporis iure optio." />
        </div>
      </section>
    </>
  );
}
