
/*export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;*/
export const BACKEND_URL = 'http://localhost:4000';
export async function getVehicles() {
  const data = await fetch(`${BACKEND_URL}/api/vehicles`, {
      cache: "no-store",
  });
  return await data.json();
}

export async function getVehicle(id: string) {
  const data = await fetch(`${BACKEND_URL}/api/vehicles/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createVehicle(vehicleData: any) {
  const res = await fetch(`${BACKEND_URL}/api/vehicles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicleData),
  });
  const data = await res.json();
  console.log(data);
}

export async function deleteVehicle(id: string) {
    const res = await fetch(`${BACKEND_URL}/api/vehicles/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      throw new Error("Error al eliminar el vehículo");
    }
  
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  }
  

export async function updateVehicle(id: string, newVehicle: any) {
  const res = await fetch(`${BACKEND_URL}/api/vehicles/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newVehicle),
    cache: 'no-store'
  });
  return await res.json();
}