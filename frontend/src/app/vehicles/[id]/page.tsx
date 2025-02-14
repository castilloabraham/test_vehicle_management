import { getVehicle } from "../vehicles.api";
import Link from "next/link";

interface Props {
    params: {
        id: string;
    };
}

async function VehicleDetailPage({ params }: Props) {
  const vehicle = await getVehicle(params.id);

  return (
  
    <div
        className="flex justify-center items-center h-screen"
    >
        <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">{vehicle.brand} {vehicle.model}</p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">Año: {vehicle.year}</p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">Precio: {vehicle.price}$</p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">Descripción: {vehicle.description}</p>
            </div>
            </div>
    </div>
    );
}

export default VehicleDetailPage;