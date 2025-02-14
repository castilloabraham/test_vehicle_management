import { getVehicles } from "../app/vehicles/vehicles.api";
import { ItemVehicle } from "./ItemVehicle";


export async function ListVehicle() {
    const vehicles = await getVehicles();

    return (
        <ul role="list" className="divide-y divide-gray-300">
        {vehicles.map((vehicle: any) => (
            <ItemVehicle vehicle={vehicle} key={vehicle.id} />
        ))}
    </ul>
    );
  }