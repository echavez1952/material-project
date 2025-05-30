import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { differenceInYears, parseISO, isValid } from "date-fns";

type FormValues = {
  birthdate: string;
};

export default function BirthdateForm() {
  const [age, setAge] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const birthdate = watch("birthdate");

  const onSubmit = (data: FormValues) => {
    const birth = parseISO(data.birthdate);
    if (isValid(birth)) {
      const calculatedAge = differenceInYears(new Date(), birth);
      setAge(calculatedAge);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
      <label className="block">
        Fecha de nacimiento:
        <input
          type="date"
          {...register("birthdate", {
            required: "Este campo es obligatorio",
            validate: (value) => {
              const birth = parseISO(value);
              if (!isValid(birth)) return "Fecha inválida";
              const age = differenceInYears(new Date(), birth);
              if (age < 18) return "Debe tener al menos 18 años";
              if (age > 120) return "No puede tener más de 120 años";
              return true;
            },
          })}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </label>

      {errors.birthdate && (
        <p className="text-red-500">{errors.birthdate.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calcular edad
      </button>

      {age !== null && !errors.birthdate && (
        <p className="text-green-600 text-lg font-semibold">
          Edad: {age} años
        </p>
      )}
    </form>
  );
}
