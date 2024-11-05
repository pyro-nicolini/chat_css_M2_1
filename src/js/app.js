// Configuración
const imageCount = 14; // Número total de imágenes en la carpeta
const chatList = document.getElementById("chatList");

// Función para crear un chat en la lista
function createChatElement(imgSrc, nombre, chatmsg) {
    const chatItem = document.createElement("div");
    chatItem.classList.add("item");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("pic");

    const chatText = document.createElement("div");
    chatText.classList.add("text");

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = nombre;
    nombreSpan.classList.add("name");

    const msgSpan = document.createElement("span");
    msgSpan.textContent = chatmsg;

    chatItem.appendChild(img);
    chatItem.appendChild(chatText);
    chatText.appendChild(nombreSpan);
    chatText.appendChild(msgSpan);

    return chatItem;
}

const nombres = ["Paulina","Camila","Roberto","Camilo","Matias","Leonardo","Eustaquio", "Maida","Jimena","Amelia","Ramiro","Tomas","Alfredo","Guillermo"]

const msg = ["Te amo mi vida ❤️ 🔥" , "blandtiss 🐶 praesentium" , "🔥 🔥 🔥  debitis aut" , "Nam libero 🥴🤧" , "At vero eos accusa" , "Reprobando a atrasados 🚀" , "officiis debitis aut" , "Nam libero tempore 🤙🤙", "officiis 🌊🐶🤙  debitis aut" , "Nam libero tempore" , "👌👌" , "blandtiss praesentium" , "officiis debitis aut" , "Nam libero tempore"]


// Inyectar elementos en el sidebar
for (let i = 0; i < imageCount; i++) {
    const imgSrc = `src/img/${i}.jpg`;
    const nombre = nombres[i];
    const chatmsg = msg[i]; 
    const chatElement = createChatElement(imgSrc, nombre, chatmsg);
    chatList.appendChild(chatElement);
}

function mostrarAlerta() {
    // Selecciona todos los elementos con la clase "item"
    const items = document.getElementsByClassName("item");
    
    // Añade un evento 'click' a cada elemento en la colección
    Array.from(items).forEach(item => {
        item.addEventListener("click", () => {
            // Accede al nombre dentro del item
            const nombre = item.querySelector(".name").textContent; // Obtiene el nombre
            alert(`Soy una maqueta de ${nombre}`); // Muestra el nombre completo
        });
    });
}

// Llama a la función para añadir los eventos de clic
mostrarAlerta();