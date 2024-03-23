const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
      nombre: "Apartamento espacioso con terraza",
      src: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este apartamento de lujo cuenta con una amplia terraza con vistas panorámicas",
      ubicacion: "567 Skyview Road, Hilltop City, CA 78901",
      habitaciones: 4,
      banios: 3,
      costo: 3000,
      smoke: true,
      pets: false,
    },
    {
      nombre: "Loft moderno en el corazón artístico",
      src: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este loft de diseño contemporáneo se encuentra en el corazón del distrito artístico",
      ubicacion: "890 Creative Avenue, Artsy Town, CA 12345",
      habitaciones: 2,
      banios: 2,
      costo: 1800,
      smoke: false,
      pets: false,
    },
];

  const mostrarPropiedadesAlquiler = () => {
    const container = document.getElementById("soloPropiedadesAlquiler");
  
    propiedades_alquiler.forEach((propiedad) => {
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

  mostrarPropiedadesAlquiler();
