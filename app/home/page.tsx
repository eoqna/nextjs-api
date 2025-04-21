import { Home, Navigation } from "../../components";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full h-full bg-amber-300">
      <Navigation />
      <Home />
    </div>
  );
};