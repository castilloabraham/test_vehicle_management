"use client";

import Link from "next/link";
import { deleteVehicle} from "@/app/vehicles/vehicles.api";
import { useRouter } from "next/navigation";



export function ItemVehicle({ vehicle }: any) {
    const router = useRouter();
  
    async function handleRemoveVehicle(id: string) {
      await deleteVehicle(id);
      router.refresh();
    }
  
    return (
        <li key={vehicle.id} className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">{vehicle.brand} {vehicle.model}</p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">Año: {vehicle.year}</p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">Precio: {vehicle.price}$</p>
            <p className="mt-1 truncate text-xs/5 text-gray-500">Descripción: {vehicle.description}</p>
          </div>
        </div>
        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
        <Link
            className="mt-5"
            href={`/vehicles/${vehicle.id}/edit`}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push(`/vehicles/${vehicle.id}/edit`);
            }}
        >
          Editar
        </Link>

        <Link
            className="mt-5"
            href="#"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRemoveVehicle(vehicle.id);
            }}
        >
          Eliminar
        </Link>
        </div>
      </li>
    );
  }