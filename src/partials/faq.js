export default function FaqSection(props) {
  return (
    <div className="pb-6">
      <p className="text-xl font-bold pb-4 md:text-3xl">{props.q}</p>
      <div className="flex">
        <p className="text-xl pb-4 max-w-3xl md:text-xl">{props.a}</p>
      </div>
    </div>
  );
}
