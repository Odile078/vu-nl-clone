const Wrapper = ({ children, className }) => {
  return (
    <div className={`px-5 mx-auto max-w-5.5xl shadow-4xl ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
