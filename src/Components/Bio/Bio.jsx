import Avatar from "./Avatar.png";
<Avatar className="png"></Avatar>;
export const Bio = () => {
  return (
    <div className="flex">
      <img src={Avatar} alt="me" className="w-20 rounded-full" />
      <div>
        <h3 className="text-black text-3xl">Israel MacDonald</h3>
        <p className="text-black text-2xl">Guy</p>
      </div>
    </div>
  );
};
