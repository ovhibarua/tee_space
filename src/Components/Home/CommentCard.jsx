import Image from "../Image";

function CommentCard(pass) {
  const { avater, comTitle, comDes, comPara } = pass;
  return (
    <div className="p-6 lg:p-10 rounded-xl shadow-sm shadow-slate-300 bg-white">
      <div className="flex items-center gap-4 mb-4 lg:mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-[#2EBB77]">
          <Image addImg={avater} />
        </div>
        <p className="text-black font-bold flex flex-col">
          {comTitle}
          <span className="font-medium">{comDes}</span>
        </p>
      </div>
      <p className="text-stone-700 text-[16px]">{`“${comPara}”`}</p>
    </div>
  );
}

export default CommentCard;
