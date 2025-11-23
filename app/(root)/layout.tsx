import LeftSideBar from "@/components/ui/navigation/LeftSideBar";
import Navbar from "@/components/ui/navigation/navbar";
import RightSideBar from "@/components/ui/navigation/RightSideBar";



const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar/>
      </div>
    </main>
  );
};

export default Rootlayout;
