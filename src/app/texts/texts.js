const title = "Mantis";
const email = "estibensantiago@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573107674971";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {

        description1: "En Mantis, nos dedicamos a ofrecer ropa de alta calidad que se adapta a todos los estilos. Creemos que la moda debe ser accesible y satisfactoria para todos. Nuestro lema, \"Lo que no te guste, no pagas,\" es una promesa de que siempre priorizaremos la satisfacción del cliente.",
        description2: "Trabajamos arduamente para proporcionar prendas que no solo sean elegantes, sino también cómodas y duraderas. Nos enorgullece ofrecer un servicio al cliente excepcional, asegurándonos de que cada cliente se sienta valorado y atendido."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Lo que no te guste no pagas.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/jhoiner.santiago.98?mibextid=ZbWKwL",
        instagram: "www.instagram.com", // Instagram no proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
