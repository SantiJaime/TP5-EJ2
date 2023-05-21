class Persona {
  constructor(nombre, edad, sexo, peso, altura, anio, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anio = anio;
    this.dni = dni;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.anio >= 1930 && this.anio <= 1948:
        Swal.fire({
          icon: "info",
          title: "Silent Gen (Niños de la posguerra) | Rasgo: Austeridad",
        });
        break;
      case this.anio >= 1949 && this.anio <= 1968:
        Swal.fire({
          icon: "info",
          title: "Baby boom | Rasgo: Ambición",
        });
        break;
      case this.anio >= 1969 && this.anio <= 1980:
        Swal.fire({
          icon: "info",
          title: "Gen X | Rasgo: Obsesión por el éxito",
        });
        break;
      case this.anio >= 1981 && this.anio <= 1993:
        Swal.fire({
          icon: "info",
          title: "Gen Y (Millenials) | Rasgo: Frustración",
        });
        break;
      case this.anio >= 1994 && this.anio <= 2010:
        Swal.fire({
          icon: "info",
          title: "Gen Z | Rasgo: Irreverencia",
        });
        break;
      default:
        Swal.fire({
          icon: "error",
          title: "El año ingresado está fuera de los límites",
        });
    }
  }
  mostrarDatos() {
    Swal.fire({
      icon: "info",
      title: "Datos de la persona",
      text: `Nombre: ${this.nombre} | Edad: ${this.edad} | DNI: ${this.dni} | Sexo: ${this.sexo} | Peso: ${this.peso}Kg | Altura: ${this.altura}cm | Año de nacimiento: ${this.anio}`,
    });
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      Swal.fire({
        icon: "success",
        title: "La persona es mayor de edad",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "La persona es menor de edad",
      });
    }
  }
}

const formId = document.getElementById("formId");

formId.addEventListener("submit", enviarForm);

let nuevaPersona = "";

function enviarForm(event) {
  event.preventDefault();
  const nameId = document.getElementById("nameId").value;
  const ageId = document.getElementById("ageId").value;
  const dniId = document.getElementById("dniId").value;
  const sexId = document.getElementById("sexId").value;
  const wId = document.getElementById("wId").value;
  const hId = document.getElementById("hId").value;
  const dateId = document.getElementById("dateId").value;
  const divMostrar = document.getElementById("divMostrar");

  nuevaPersona = new Persona(nameId, ageId, sexId, wId, hId, dateId, dniId);
    divMostrar.innerHTML = `<hr>
    <h3>Persona ingresada: ${nuevaPersona.nombre}</h3>
    <div class="mt-3">
    <button class="btn btn-primary" onclick="botonMostrarDatos()">Mostrar datos</button>
    <button class="btn btn-success" onclick="botonMostrarGen()">Mostrar generación</button>
    <button class="btn btn-danger" onclick="botonMayorEdad()">¿Es mayor de edad?</button>
    </div>`;
  }

const botonMostrarDatos = () => {
  nuevaPersona.mostrarDatos();
};

const botonMostrarGen = () => {
  nuevaPersona.mostrarGeneracion();
};
const botonMayorEdad = () => {
  nuevaPersona.esMayorDeEdad();
};
