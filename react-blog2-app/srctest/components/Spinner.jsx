

const Spinner = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-center">
      <div className="custom-loader"></div>
      <p className="font-bold text-3xl">Loading...</p>
    </div>
  )
};

export default Spinner
