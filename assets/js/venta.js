const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
      nombre: "Apartamento moderno en el distrito financiero",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de diseño moderno está ubicado en el centro del distrito financiero",
      ubicacion: "890 Financial Avenue, Downtown City, CA 78901",
      habitaciones: 2,
      banios: 2,
      costo: 2800,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Loft industrial con estilo urbano",
      src: "https://images.unsplash.com/photo-1628611225249-6c3c7c689552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Este loft industrial ofrece un estilo urbano único",
      ubicacion: "101 Urban Street, Urbanville, CA 34567",
      habitaciones: 1,
      banios: 1,
      costo: 1600,
      smoke: true,
      pets: false,
    },
]

const mostrarpropiedades_venta = () => {
    const container = document.getElementById("soloPropiedadesVenta");
  
    propiedades_venta.forEach((propiedad) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
      <div class="card">
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen de la propiedad"
      />
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banios} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
              <i class="fas ${
                propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"
              }"></i>
              ${
                propiedad.smoke ? "Está permitido fumar" : "No se permite fumar"
              }
            </p>
            <p class="${propiedad.pets ? "text-success" : "text-danger"}">
              <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
              ${
                propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
              }
            </p>
      </div>
    </div>
  </div>
      `;
      container.appendChild(card);
    });
  };

  mostrarpropiedades_venta();

