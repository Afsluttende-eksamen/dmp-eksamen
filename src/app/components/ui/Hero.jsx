import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="mb-12">
        <Image
          src="/svg/dmp-logo-white.svg"
          alt="DMP Logo"
          width={200}
          height={200}
          className="opacity-60"
        />
      </div>
      <div className="">
        <Button variant="primary">BOOK VIA UNITED STAGE</Button>
      </div>
    </div>
  );
}
