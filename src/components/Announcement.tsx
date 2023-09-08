type AnnouncementProps = {
  title: string;
  content: string;
};

export default function Announcement(props: AnnouncementProps) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <h2 className="font-black text-black">{props.title}</h2>
      <p className="text-slate-700 text-sm truncate">{props.content}</p>
    </div>
  );
}
