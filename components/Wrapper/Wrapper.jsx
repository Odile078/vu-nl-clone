const Wrapper = ({ children, className }) => {
  return (
    <div className={`px-5 mx-auto max-w-5.5xl ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
