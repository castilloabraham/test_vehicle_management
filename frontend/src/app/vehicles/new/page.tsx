import { getVehicle } from "../vehicles.api";
import { VehicleForm } from "./vehicle-form";

interface Props {
    params: {
      id: string;
    };
  }
  

async  function VehiclesNewPage({params}: Props) {
    const vehicle = await getVehicle(params.id);
    return (
        <div className="formulario">
            <h1>{params.id ? "Edit Product" : "Create Product"}</h1>
            
            <VehicleForm vehicle={vehicle} key={vehicle.id}/>
        </div>
    );
}

export default VehiclesNewPage;