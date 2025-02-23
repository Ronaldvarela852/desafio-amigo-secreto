let listaDeAmigos=[];


 
    function agregarAmigo() {
        let nuevoAmigo = document.getElementById('amigo').value;
      
        // Verificar que el nombre no esté vacío
        if (nuevoAmigo.length > 0) {
          // Agregar el nuevo amigo a la lista
          listaDeAmigos.push(nuevoAmigo);
      
          // Actualizar la interfaz de usuario
          actualizarListaAmigos();
      
          // Limpiar el campo de texto
          document.getElementById('amigo').value = '';
        } else {
          // Mostrar un mensaje de error o realizar alguna otra acción
          alert('Por favor, ingresa el nombre valido de una persona.');
        }
      }

      function actualizarListaAmigos() {
        // Obtiene el elemento donde se mostrará la lista de amigos
        let listaElemento = document.getElementById('listaAmigos');
      
        // Limpiar el contenido actual de la lista
        listaElemento.innerHTML = '';
      
        // Recorrer la lista de amigos y agregar cada uno a la interfaz
        for (let intentos = 0; intentos < listaDeAmigos.length; intentos++) {
          let nuevoElemento = document.createElement('li');
          nuevoElemento.textContent = listaDeAmigos[intentos];
          listaElemento.appendChild(nuevoElemento);
        }
      }
      function sortearAmigo() {
        // Verificar si la lista de amigos no está vacía
        if (listaDeAmigos.length === 0) {
          // Mostrar un mensaje de error o realizar alguna otra acción
          alert('No hay amigos disponibles para sortear.');
          return; // Salir de la función si no hay amigos
        }
      
        // Generar un índice aleatorio dentro del rango de la lista de amigos
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
      
        // Obtener el nombre del amigo sorteado
        let amigoSorteado = listaDeAmigos[indiceAleatorio];
      
        // Actualizar el contenido del elemento de resultado
        let resultadoElemento = document.getElementById('resultado');
        resultadoElemento.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
      }