// importar los metodos de api.js  
import { getjoyeria, getjoyeriaByID, updatejoyeria, deletejoyeria } from "./api";

// traer todos los productos y mostrarlos en las pagina pricipal 
document.addEventListener("DOMContentLoaded", async () => {
    const joyerialist = document.getElementById("joyeria-list");

    const products = await getjoyeria();
joyerialist.innerHTML = products.map(joyeria =>`
    <div class="col-xs-12-sm-6 col-md-3 card">
        <div class="card-body d-flex flex-column justify-content-end">
         <h5 class="card-title">${joyeria.name}</h5>
         <p class="card-text">${joyeria.price}</p>
         <a onclick="viewjoyeria(${joyeria.id})" class="btn btn-primary">ver mas</a>
        </div
    </div>
    `).join("");
    
});

// creae la vista de detalles para cada joyeria al dar click en el boton de ver mas 
window.viewjoyeria = async (id) => {
    const joyeria = await getjoyeriaByID(id);
    const joyeriadelails = `
    <div class="col">
    <img class="img-fluid" src="${joyeria.imgurl}">
    <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Precio: ${new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
      <button class="btn btn-warning" onclick="enableEdit(${joyeria.id})">Editar</button>
      <button class="btn btn-danger" onclick="deleteProduct(${joyeria.id})">Eliminar</button>
    </div>
    `
   
}
document.getElementById('joyeria-list').innerHTML = joyeriaDetails;



// Habilitamos el formulario para editar cada uno de las joyeria
window.enableEdit = async (id) => {
    const joyeria = await getjoyeriaByID(id);
    const editForm = `
      <div class="row gap-3">
        <input type="text" id="name" value="${joyeria.name}">
        <textarea id="description">${joyeria.description}</textarea>
        <input type="number" id="price" value="${joyeria.price}">
        <input type="text" id="imgUrl" value="${joyeria.imgUrl}">
        <button class="btn btn-success" onclick="saveEdit(${id})">Guardar</button>
      </div>
      `;
    document.getElementById('joyeria-list').innerHTML = editForm;
};


// Guardamos la nueva información en nuestra base de datos
window.saveEdit = async (id) => {
    const updatedjoyeria = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      price: parseFloat(document.getElementById('price').value),
      imgUrl: document.getElementById('imgUrl').value
    };
    await updateProduct(id, updatedjoyeria);
    location.reload();
}

// Función para borrar el producto de la joyeria  seleccionado
window.deletejoyeria = async (id) => {
    await deletejoyeria(id);
    location.reload(); 
  };

