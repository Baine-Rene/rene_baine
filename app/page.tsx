import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl tracking-light text-primary">Rene Baine</h1>
          <p className="max-w-lg text-secondary">

          </p>
        </div>
      </div>
    </div>
  );
}
