import { Injectable } from '@angular/core';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {
	empresas:any;
  constructor() {
    

  	this.empresas = [
      { Nombre:"Ibermática",
        imagen:"../../assets/imgs/1.jpg",
        descripccion:"Tecnico de sistemas informaticos",
        descripccion2:"Ibermática es una compañía de servicios en tecnologías de la información y la comunicación del mercado español. Creada en 1973 y con sede en San Sebastián, su actividad se centra en las siguientes áreas: Consultoría TIC Equipamientos e infraestructuras Integración de sistemas de información Outsourcing",
        descripccion3:"Dentro del Área de Organización, el puesto se enmarca en el equipo de Servicios TICs con las funciones siguientes: especificación, análisis, diseño, desarrollo, implantación, integración y mantenimiento de las aplicaciones, herramientas informáticas e inteligencia de negocio (BI), principalmente en el ámbito de la intranet/extranet y de sistemas de gestión del centro."
      },
      { Nombre:"Eroski",
        imagen:"../../assets/imgs/2.png",
        descripccion:"Descripción (Cajero)",
        descripccion2:"Grupo Eroski es una empresa cooperativa de distribución perteneciente a la Corporación Mondragón. Tiene su sede en la localidad vizcaína de Elorrio en el País Vasco, España",
        descripccion3:"Efectúa actividades de recepción, entrega y custodia de dinero en efectivo, cheques, giros ydemás documentos de valor, a fin de logra recaudación de ingresos a la institución y lacancelación de los pagos que correspondan a través de caja"
      },
      { Nombre:"Arratek",
        imagen:"../../assets/imgs/3.png",
        descripccion:"Tecnico de sistemas informaticos",
        descripccion2:"Arratek es tu tienda informática de confianza. Aquí encontrarás la mejor solución a los problemas que te surjan. Ofrecemos todo tipo de servicios informáticos dirigidos tanto a empresas como particulares. Por un lado contamos con el Mantenimiento a Empresas y desarrollo de Páginas Web y por otro lado ofrecemos Servicio Técnico a particulares, Venta de consumibles y Montaje de Ordenadores a Medida. Además contamos con un Aula de Informática tanto para adultos como para jóvenes.",
        descripccion3:"Efectúa actividades de recepción, entrega y custodia de dinero en efectivo, cheques, giros ydemás documentos de valor, a fin de logra recaudación de ingresos a la institución y lacancelación de los pagos que correspondan a través de caja"
      },
      { Nombre:"Decathlon",
        imagen:"../../assets/imgs/4.png",
        descripccion:"Mantenimiento",
        descripccion2:"Decathlon es una cadena de establecimientos de grandes superficies, dedicada a la venta y distribución de material deportivo, filial del grupo francés Mulliez. Presente en veintidós países, Decathlon destaca por un fuerte desarrollo de sus marcas de distribuidor",
        descripccion3:"-Llevar a cabo el mantenimiento preventivo y correctivo de las instalaciones. Para ello debe tener conocimientos de electricidad, electrónica y mecánica básica. -Nociones de neumática e hidráulica.  -Conocimiento sobre cómo soldar una pieza, usar el torno y la fresadora. No a nivel avanzado pero si iniciado ya en estos trabajos. <br> El perfil es más el de una persona con formación práctica en taller. <br> Sería muy interesante que tenga experiencia como mantenedor o montador en algún ámbito de máquinas."
      },
      { Nombre:"Allianz",
        imagen:"../../assets/imgs/5.jpg",
        descripccion:"Tecnico de sistemas informaticos",
        descripccion2:"Grupo Allianz es una multinacional alemana de servicios financieros con sede en Múnich. Es uno de los grupos aseguradores y proveedores de servicios financieros más importantes del mundo. Sus ingresos ascendieron a más de 106.400 millones de euros en 2012. Creado en 1890, el grupo está presente en más de 70 países en los cinco continentes, donde 144.000 empleados de diferente nacionalidad, idioma, religión, formación y experiencia dan servicio a más de 78 millones de clientes.",
        descripccion3:"Efectúa actividades de recepción, entrega y custodia de dinero en efectivo, cheques, giros ydemás documentos de valor, a fin de logra recaudación de ingresos a la institución y lacancelación de los pagos que correspondan a través de caja"
      }
    ]




  }

}
