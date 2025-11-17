import Navbar from "@/components/ui/navigation/navbar";

const Rootlayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Rootlayout;
