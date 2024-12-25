const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-[#1A1A1D]">
      {children}
    </div>
  );
};

export default PageWrapper;
