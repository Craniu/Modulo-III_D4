const propiedades_alquiler = [
  {
    nombre: "Casa 1",
    src: "https://placedog.net/280/280",
    descripcion: "La Casa esta hecha de casa.",
    ubicacion: "Happy Village",
    habitaciones: 3,
    costo: 999.000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa 2",
    src: "https://placedog.net/280/280",
    descripcion: "La Casa esta hecha de casa.",
    ubicacion: "Happy Village",
    habitaciones: 1,
    costo: 199.000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa 3",
    src: "https://placedog.net/280/280",
    descripcion: "La Casa esta hecha de casa.",
    ubicacion: "Happy Village",
    habitaciones: 3,
    costo: 1099.000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa 4",
    src: "https://placedog.net/280/280",
    descripcion: "La Casa esta hecha de casa.",
    ubicacion: "Happy Village",
    habitaciones: 2,
    costo: 899.000,
    smoke: false,
    pets: true,
  }
];

const propiedades_venta = [
  {
    nombre: "House 1",
    src: "https://placedog.net/280/280",
    descripcion: "Casas para vivir.",
    ubicacion: "Happy Village",
    habitaciones: 5,
    costo: 90900.00,
    smoke: true,
    pets: true,
  },
  {
    nombre: "House 2",
    src: "https://placedog.net/280/280",
    descripcion: "Casas para vivir.",
    ubicacion: "Happy Village",
    habitaciones: 3,
    costo: 45990.00,
    smoke: true,
    pets: true,
  },
  {
    nombre: "House 3",
    src: "https://placedog.net/280/280",
    descripcion: "Casas para vivir.",
    ubicacion: "Happy Village",
    habitaciones: 3,
    costo: 70990.00,
    smoke: true,
    pets: true,
  },
  {
    nombre: "House 4",
    src: "https://placedog.net/280/280",
    descripcion: "Casas para vivir.",
    ubicacion: "Happy Village",
    habitaciones: 8,
    costo: 190900.00,
    smoke: true,
    pets: true,
  }
];

const validaFumar = function (casa){
    let html = "";
    if (casa.smoke === true){
        html = `
                <p class="text-success">
                  <i class="fas fa-paw"></i> Se permite fumar
                </p>
        `;
        return html;
    }else{
        html = `
        <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                `;
        return html;
    }
}

const validaMascota = function (casa){
    let html = "";
    console.log(casa.pets)
    if (casa.pets === true){
        html = `
                <p class="text-success">
                  <i class="fas fa-paw"></i> Se permiten mascotas
                </p>
        `;
        return html;
    }else{
        html = `
        <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permiten mascotas
                </p>
                `;
        return html;
    }
}

//Propiedades en Venta
if(document.querySelector("#pVenta")){
    let limit = propiedades_venta.length;
    let contador = 0;
    console.log(limit)
    if(document.querySelector("#contador")){
        limit = 3;
    }
    const pVenta = document.querySelector("#pVenta");
    let htmlCodeV = "";
    for (let casa of propiedades_venta){
        if(contador < limit){
        htmlCodeV += `
        <div class="col-md-4 mb-4">
    <div class="card">
    <img
      src="${casa.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${casa.nombre}
      </h5>
      <p class="card-text">
        ${casa.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${casa.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${casa.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${casa.habitaciones} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${casa.costo}</p>
     ${validaFumar(casa)}
    ${validaMascota(casa)}
    </div>
    </div>
    </div>
        `;
        contador ++;
        console.log(contador);
    }
    }
    pVenta.innerHTML = htmlCodeV;
}


//Propiedades en Alquiler
if(document.querySelector("#pAlquiler")){
    let limit = propiedades_alquiler.length;
    let contador = 0;
    console.log(limit)
    if(document.querySelector("#contador")){
        limit = 3;
    }
    const pAlquiler = document.querySelector("#pAlquiler");
    let htmlCodeA = "";
    for (let casa of propiedades_alquiler){
        if(contador < limit){
        htmlCodeA += `
        <div class="col-md-4 mb-4">
    <div class="card">
    <img
      src="${casa.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${casa.nombre}
      </h5>
      <p class="card-text">
        ${casa.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${casa.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${casa.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${casa.habitaciones} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${casa.costo}</p>
     ${validaFumar(casa)}
    ${validaMascota(casa)}
    </div>
    </div>
    </div>
        `;
        contador ++;
    }
}

    pAlquiler.innerHTML = htmlCodeA;
}
