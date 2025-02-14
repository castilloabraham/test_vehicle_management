"use client";

import { useForm } from "react-hook-form";
import { createVehicle, updateVehicle } from "../vehicles.api";
import { useParams, useRouter } from "next/navigation";

export function VehicleForm({vehicle}: any) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            brand: vehicle?.brand,
            model: vehicle?.model,
            year: vehicle?.year,
            price: vehicle?.price,
            description: vehicle?.description,
        }
      });
      const router = useRouter();
      const params = useParams<{id: string}>();
      console.log(params)
    
      const onSubmit = handleSubmit(async (data) => {
        if (params?.id) {
          const res = await updateVehicle(params.id, {
            ...data,
            price: parseFloat(data.price),
          })
          console.log(res)
        } else {
        await createVehicle({
          ...data,
          price: parseFloat(data.price),
        });
        }
    
        router.push("/");
        router.refresh();
      });

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-6">
            <input {...register("brand")}  type="text" placeholder="Marca" className="rounded-md h-12 p-2"/>
            
            <input {...register("model")}  type="text" placeholder="Modelo" className="rounded-md h-12 p-2"/>
            
            <input {...register("year")}  type="text" placeholder="Año" className="rounded-md h-12 p-2"/>
            
            <input {...register("price")}  type="text" placeholder="Precio" className="rounded-md h-12 p-2"/>
            
            <textarea {...register("description")}  placeholder="Descripción" className="rounded-md h-12 p-2"/>

            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                {
                    params.id ? 'Update vehicles' : 'Create vehicles'
                }
            </button>
        </form>
    );
}