import Button from "../Button";
import Content from "../Content";

function PickUpBnnr(pass) {
  const { addId, pickTit, pickSub, pickbtn } = pass;
  return (
    <div
      id={addId}
      className="px-6 md:px-10 py-8 md:py-14 overflow-hidden rounded-xl h-fit md:h-[380px]"
    >
      <Content
        addClass={`max-w-[235px] mb-6`}
        title={pickTit}
        subTitle={pickSub}
        classList={`mb-3`}
      />
      <Button btnText={pickbtn} />
    </div>
  );
}

export default PickUpBnnr;
