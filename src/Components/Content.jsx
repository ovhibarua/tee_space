function Content(pass) {
  const { title, subTitle } = pass;
  return (
    <div>
      <h4 className="mb-3.5">{title}</h4>
      <p className="max-w-[500px]">{subTitle}</p>
    </div>
  );
}

export default Content;
