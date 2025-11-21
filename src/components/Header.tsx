import { Navigation } from "./Navigation";
import { ModeToggle } from "./ui/modle-toggle";

export const Header = () => {
  return (
    <header className="max-w-6xl mx-auto text-center flex items-center justify-between p-4">
      <h1 className="text-4xl font-bold">
        LS
      </h1>
      <Navigation />
      <ModeToggle/>
    </header>
  );
};
