import Card from "./Card";

export default function ProjectCards() {
  return (
    <section className="col-span-3 p-5 bg-slate-200">
      <h1 className="my-5 font-black text-black text-xl">Your Projects</h1>
      <div className="grid grid-cols-2 grid-rows-3 gap-5">
        <Card
          title="Super Cool Project"
          content="Ipsa alias omnis iste magnam dicta dolorem incidunt itaque facilis nemo aperiam. Reprehenderit porro eos dignissimos beatae et voluptatem? Asperiores, sed praesentium!"
        />
        <Card
          title="Less Cool Project"
          content="Risus commodo viverra maecenas accumsan lacus vel. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec sagittis aliquam malesuada bibendum arcu vitae elementum."
        />
        <Card
          title="Impossible App"
          content="Amet purus gravida quis blandit turpis cursus. Enim facilisis gravida neque convallis a cras semper. Dapibus ultrices in iaculis nunc sed augue."
        />
        <Card
          title="Easy Peasy App"
          content="Turpis egestas integer eget aliquet nibh praesent tristique magna. Neque laoreet suspendisse interdum consectetur libero. Etiam erat velit scelerisque in dictum non consectetur a. Amet facilisis magna etiam tempor orci. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a."
        />
        <Card
          title="Ad Blocker"
          content="Turpis egestas integer eget aliquet nibh praesent tristique magna. Neque laoreet suspendisse interdum consectetur libero. Etiam erat velit scelerisque in dictum non consectetur a."
        />
        <Card
          title="Money Maker"
          content="Ullamcorper morbi tincidunt ornare massa eget egestas purus. Dis parturient montes nascetur ridiculus. Euismod quis viverra nibh cras pulvinar mattis. Mattis rhoncus urna neque viverra justo nec. Morbi leo urna molestie at elementum eu. Tincidunt praesent semper feugiat nibh sed pulvinar."
        />
      </div>
    </section>
  );
}
