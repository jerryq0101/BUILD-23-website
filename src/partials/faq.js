export default function FaqSection(props) {
  return (
    <div className="pb-6">
      <p className="text-center text-3xl font-bold pb-4">{props.q}</p>
      <div className="items-center justify-center flex">
        <p className="text-center text-2xl pb-4 max-w-lg ">{props.a}</p>
      </div>
    </div>
  );
}
