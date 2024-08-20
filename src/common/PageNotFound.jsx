import { TbError404Off } from "react-icons/tb";

function PageNotFound() {
  return (
    <>
      <section className="flex justify-center items-center h-screen bg-gray-200">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold md:text-2xl">Page Not Found</h1>
          <TbError404Off size={35} />
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
