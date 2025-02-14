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
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <input {...register("brand")}  type="text" placeholder="Marca"/>
            
            <input {...register("model")}  type="text" placeholder="Modelo"/>
            
            <input {...register("year")}  type="text" placeholder="Año"/>
            
            <input {...register("price")}  type="text" placeholder="Precio"/>
            
            <textarea {...register("description")}  placeholder="Descripción"/>

            <button>
                {
                    params.id ? 'Update vehicles' : 'Create vehicles'
                }
            </button>
        </form>
    );
}