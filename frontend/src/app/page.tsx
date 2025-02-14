import Image from "next/image";
import Link from "next/link";
import { ListVehicle } from "@/components/ListVehicle";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>home</h1>
        <Link
          href="/vehicles/new"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          New Vehicle
        </Link>
      </div>
      <ListVehicle />
    </div>
  );
}
