export default function Frame2w({ frameUrl }) {
  return (
    <div
      className="bg-black w-[32rem] h-[23rem] flex bg-contain"
      style={{ backgroundImage: `url(${frameUrl})` }}
    >
      <div className="m-3 bg-white w-[12rem] h-[21.5rem]" />
      <div className="m-3 bg-white w-[12rem] h-[21.5rem]" />
      <div className="mr-3" />
      <div className="flex flex-col text-sm font-thin text-center text-white mt-7 justify-">
        <p>Doodle</p>
        <p>Film</p>
      </div>
    </div>
  );
}
