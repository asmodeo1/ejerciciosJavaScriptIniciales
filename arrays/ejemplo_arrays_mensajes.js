const mensajes = [
    "¡Oferta especial solo por hoy!",
    "Confirmación de reserva",
    "Actualización importante de la cuenta",
    "¡No te pierdas nuestro evento!",
    "¡Descubre nuestras nuevas características!",
    "Recordatorio de reunión",
    "Tu pedido ha sido enviado",
    "¡Últimos días para aprovechar la promoción!",
    "Invitación a la presentación de producto",
    "Confirmación de inscripción",
    "¡Tu suscripción está por vencer!",
    "Notificación de pago exitoso",
    "¡Descuento exclusivo para ti!",
    "Consulta sobre tu experiencia",
    "¡Vuelve a visitarnos y obtén un regalo!",
    "¡Descubre nuestras ofertas de primavera!",
    "Recordatorio de pago pendiente",
    "Invitación a participar en una encuesta",
    "¡Tu opinión nos importa!",
    "Recordatorio de evento próximo"
  ];
  
  // Vamos a tener una variable global para saber el número de mensajes visibles.
  // AL principio todos
  let totalMensajes = mensajes.length;
  
  /* Toda función manejador de evento recibe un parámetro con información del evento, como
  que tecla se pulsó, que botón de ratón se pulsó, sobre que elemento, ...
  Se suele llamar evt, e o event aunque podemos usar cualquier otro */
  function ocultar(evt) {
      // Obtenemos el nodo padre (el div) y lo eliminamos
      evt.currentTarget.parentNode.remove();
      // Disminuimos el total de mensajes en 1
      totalMensajes--;
      /* También valdría:
      totalMensajes = totalMensajes - 1;
      totalMensajes -= 1; */
      // Los mostramos en el span totalMensajes
      document.getElementById("totalMensajes").textContent = totalMensajes;
  }
  
  function mostrarMensajes() {
      const divMensajes = document.getElementById("mensajes");
      // Recorremos todos los mensajes
      for (const mensaje of mensajes) {
          // Creamos un div
          const div = document.createElement("div");
          // Le añadimos unas clases de Boostrap (p-2: padding)
          // Usamos flex para poner el mensaje a la izquierda y el botón a la derecha
          div.classList.add("d-flex", "justify-content-between", "p-2");
          const p = document.createElement("p");
          p.classList.add("mb-0"); // margin-bottom: 0
          // Le añadimos el texto del mensaje
          p.textContent = mensaje;
          // Creamos un botón
          const boton = document.createElement("input");
          // Le asigamos unos atributos para que sea un botón y el texto del mismo
          boton.setAttribute("type", "button");
          boton.setAttribute("value", "🗑");
          // Le añadimos unas clases de Boostrap (sin borde y fondo transparente)
          boton.classList.add("border-0", "bg-transparent");
          // Le añadimos el manejador del evento click
          boton.addEventListener("click", ocultar);
          // Añadimos el párrafo al div
          div.appendChild(p);
          // Añadimos el botón al div
          div.appendChild(boton);
          // Añadimos el div al div de mensajes
          divMensajes.appendChild(div);
      }
      document.getElementById("totalMensajes").textContent = totalMensajes;
  }
  
  // Al cargar la página mostramos todos los mensajes
  mostrarMensajes();
  
  