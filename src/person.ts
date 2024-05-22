interface IPersona {
  nombre: string;
  edad: number;
  genero: string;
  ocupacion: string;
  nacionalidad: string;

  presentarse(): string;
  esMayorDeEdad(): boolean;
}

class Persona implements IPersona {
  nombre: string;
  edad: number;
  genero: string;
  ocupacion: string;
  nacionalidad: string;

  constructor(
    nombre: string,
    edad: number,
    genero: string,
    ocupacion: string,
    nacionalidad: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.ocupacion = ocupacion;
    this.nacionalidad = nacionalidad;
  }

  presentarse(): string {
    return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años, soy de genero ${this.genero}, trabajo como ${this.ocupacion} y soy ${this.nacionalidad}.`;
  }

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }
}

// Instanciando tres personas
const persona1 = new Persona(
  'Juan Pérez',
  30,
  'masculino',
  'ingeniero',
  'mexicano'
);
const persona2 = new Persona(
  'Ana Gómez',
  25,
  'femenino',
  'doctora',
  'española'
);
const persona3 = new Persona(
  'Luis Rodríguez',
  17,
  'masculino',
  'estudiante',
  'argentino'
);

// Usando los métodos
console.log(persona1.edad);
console.log(persona1.presentarse());
