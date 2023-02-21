const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`mx-auto max-w-5.5xl 3xl:max-w-[1252px] 4xl:max-w-[1600px]  ${
        className ? className : "shadow-4xl"
      }`}
    >
      <div className={`px-5 mx-auto max-w-5.5xl 4xl:max-w-[1290px] `}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
