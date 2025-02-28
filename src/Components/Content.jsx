function Content(pass) {
  const { title, subTitle, addClass } = pass;
  return (
    <div className={addClass}>
      <h4 className="mb-2.5 lg:mb-3.5">{title}</h4>
      <p className={`max-w-[500px]`}>{subTitle}</p>
    </div>
  );
}

export default Content;
