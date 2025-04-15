import { modelosPorMarca } from "./modelosDeAuto";

export const configFormularios = {
    auto: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "documento", type: "number", placeholder: "DNI", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "cp", type: "number", placeholder: "Código Postal", required: true },
        { name: "marca", type: "select", placeholder: "Marca", options:["Toyota", "Ford", "Chevrolet", "Renault", "Volkswagen", "Peugeot", "Fiat", "Honda", "Nissan", "Jeep", "Citroën", "MercedesBenz", "BMW", "Audi", "Hyundai" ] },
        { name: "anio", type: "number", placeholder: "Año del vehículo" },
        { name: "modelo", type: "select", placeholder: "Modelo" },
        { name: "version", type: "text", placeholder: "Versión (completar según aparece en la cédula verde)" },
        { name: "optional", type: "text", placeholder: "¿No aparece el modelo/marca de tu auto? Completalo acá" }

    ],
    hogar: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "metros", type: "number", placeholder: "Metros cuadrados"},
        { name: "vivienda", type: "select", placeholder: "Tipo de vivienda", options: ["Casa", "Departamento", "PH", "Otro"], required: true},
        { name: "cp", type: "number", placeholder: "Código Postal", required: true },
        { name: "localidad", type: "text", placeholder: "Localidad", required: true},
        { name: "adicionales", type: "number", placeholder: "Metros adicionales"}
    ],
    moto: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "documento", type: "number", placeholder: "DNI", required: true},
        { name: "cp", type: "number", placeholder: "Código Postal", required: true },
        { name: "marca", type: "text", placeholder: "Marca", required: true },
        { name: "anio", type: "number", placeholder: "Año del vehículo", required: true },
        { name: "modelo", type: "text", placeholder: "Modelo", required: true }
       
    ],

    ap:[
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "fechaDeNacimiento", type: "date", placeholder: "Fecha de Nacimiento", required: true},
        { name: "actividad", type: "text", placeholder: "Actividad", required: true},
        { name: "localidad", type: "text", placeholder: "Localidad", required: true}
    ],

    mascotas: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "especie", type: "text", placeholder: "Especie", required: true},
        { name: "edadMascota", type: "number", placeholder: "Edad de mascota", required: true},
        { name: "raza", type: "text", placeholder: "Raza"}, 
    ],

    viajes: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "cantidadDePersonas", type: "number", placeholder: "¿Cuantas personas viajan?", required: true},
    ],

    salud: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular",required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "fechaDeNacimiento", type: "date", placeholder: "Fecha de Nacimiento", required: true},
        { name: "localidad", type: "text", placeholder: "Localidad", required: true}

    ],

    bicicletas: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
    ],
    
    comercios: [
        { name: "cuil", type: "number", placeholder: "Nro de CUIT", required: true},
        { name: "razonSocial", type: "text", placeholder: "Razón Social", required: true},
        { name: "actividad", type: "text", placeholder: "Actividad", required: true},
        { name: "cp", type: "number", placeholder: "Código Postal", required: true },
        { name: "localidad", type: "text", placeholder: "Localidad"},
        { name: "provincia", type: "text", placeholder: "Provincia", required: true}

    ],

    caucion: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true},
        { name: "alquilerMensual", type: "number", placeholder: "Alquiler Mensual", required: true},
        { name: "contrato", type: "text", placeholder: "Duración del contrato (en meses)", required: true}
    ],

    embarcaciones: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true }, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico",  required: true},
        { name: "tipoEmbarcacion", type: "text", placeholder: "Tipo de embarcación",  required: true},
        { name: "sumaAsegurada", type: "number", placeholder: "Suma Asegurada", required: true},
        { name: "nombreGuarderia", type: "text", placeholder: "Nombre Guardería"}
    ],
     
    vida: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true}
    ],

    sepelio: [
        { name: "nombreapellido", type: "text", placeholder: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", placeholder: "Teléfono celular", required: true},
        { name: "email", type: "email", placeholder: "Correo electrónico", required: true}
    ]

  

    
}