
import { modelosPorMarca } from "./modelosDeAuto";

export const configFormularios = {
    auto: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "documento", type: "number", label: "Documento", placeholder: "Ej: 41515415", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "telefono", type: "number", label: "Teléfono celular", label:"Completar con el código de área sin 0", required: true},
        { name: "cp", type: "number", label: "Código Postal", required: true },
        { name: "marca", type: "select", label: "Marca",  placeholder: "Seleccioná la marca de tu vehículo", options:["Toyota", "Ford", "Chevrolet", "Renault", "Volkswagen", "Peugeot", "Fiat", "Honda", "Nissan", "Jeep", "Citroën", "MercedesBenz", "BMW", "Audi", "Hyundai" ] },
        { name: "anio", type: "number", label: "Año del vehículo" },
        { name: "modelo", type: "select", label: "Modelo"},
        { name: "version", type: "text", label: "Versión", placeholder: "Completar versión según la que aparece en la cédula verde" },
        { name: "optional", type: "text", label: "Otro", placeholder: "¿No aparece el modelo/marca de tu auto? Completalo acá" }

    ],
    hogar: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "vivienda", type: "select", label: "Tipo de vivienda", placeholder: "Seleccioná el tipo de vivienda que querés asegurar", options: ["Casa", "Departamento", "PH", "Otro"], required: true},
        { name: "metros", type: "number", label: "Metros cuadrados"},
        { name: "cp", type: "number", label: "Código Postal", required: true },
        { name: "localidad", type: "text", label: "Localidad", required: true},
        { name: "adicionales", type: "number", label: "Metros adicionales"}
    ],
    moto: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "documento", type: "number", label: "Documento", placeholder: "Ej: 41515415", required: true},
        { name: "cp", type: "number", label: "Código Postal", required: true },
        { name: "marca", type: "text", label: "Marca", placeholder: "Seleccioná la marca de tu moto", required: true },
        { name: "anio", type: "number", label: "Año del vehículo", required: true },
        { name: "modelo", type: "text", label: "Modelo", required: true }
       
    ],

    ap:[
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "fechaDeNacimiento", type: "date", label: "Fecha de Nacimiento", required: true},
        { name: "actividad", type: "text", label: "Actividad", required: true},
        { name: "localidad", type: "text", label: "Localidad", required: true}
    ],

    mascotas: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", placeholder: "Ingrese su nombre y apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "especie", type: "text", label: "Especie", placeholder: "Ej: Perro, Gato, etc", required: true},
        { name: "edadMascota", type: "number", label: "Edad de mascota", required: true},
        { name: "raza", type: "text", label: "Raza", placeholder: "Ej: Golden, Caniche, Siamés, etc"}, 
    ],

    viajes: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "cantidadDePersonas", type: "number", label: "Cantidad de personas en el viaje", placeholder: "¿Cuantas personas viajan?", required: true},
    ],

    salud: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0",required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder:"Ej: hola@gmail.com", required: true},
        { name: "fechaDeNacimiento", type: "date", label:"Fecha de Nacimiento", required: true},
        { name: "localidad", type: "text", label: "Localidad", required: true}

    ],

    bicicletas: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular",placeholder:"Completar con el código de área sin 0" , required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
    ],
    
    comercios: [
        { name: "cuil", type: "number", label: "Nro de CUIT", placeholder: "Ejemplo: 20145144545", required: true},
        { name: "razonSocial", type: "text", label:"Razón Social", placeholder: "Ejemplo: Nueva Generación s.a", required: true},
        { name: "actividad", type: "text", label: "Actividad", required: true},
        { name: "cp", type: "number", label: "Código Postal", required: true },
        { name: "provincia", type: "select", label: "Provincia", placeholder: "Seleccione una provincia", options: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán" ] , required: true},
        { name: "localidad", type: "text", label: "Localidad"},

    ],

    caucion: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true},
        { name: "alquilerMensual", type: "number", label: "Alquiler Mensual", required: true},
        { name: "contrato", type: "text", label: "Duración del contrato (en meses)", required: true}
    ],

    embarcaciones: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true }, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com",  required: true},
        { name: "tipoEmbarcacion", type: "text", label: "Tipo de embarcación",  required: true},
        { name: "sumaAsegurada", type: "number", label: "Suma Asegurada", required: true},
        { name: "nombreGuarderia", type: "text", label: "Nombre Guardería"}
    ],
     
    vida: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true}
    ],

    sepelio: [
        { name: "nombreapellido", type: "text", label: "Nombre y Apellido", required: true}, 
        { name: "telefono", type: "number", label: "Teléfono celular", placeholder:"Completar con el código de área sin 0", required: true},
        { name: "email", type: "email", label: "Correo electrónico", placeholder: "Ej: hola@gmail.com", required: true}
    ]

  

    
}