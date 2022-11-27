export default function FaqSection(props) {
  return (
    <div className="pb-6">
      <p className="text-center text-xl font-bold pb-4 md:text-3xl">
        {props.q}
      </p>
      <div className="items-center justify-center flex">
        <p className="text-center text-xl pb-4 max-w-lg md:text-xl">
          {props.a}
        </p>
      </div>
    </div>
  );
}
