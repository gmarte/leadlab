import arrowIcon from "@/components/ui/arrowIcon";
import boltIcon from "@/components/ui/boltIcon";
import moonIcon from "@/components/ui/moonIcon";

export const HeroSection = {
    id: 1,
    title: "Lead Lab",
    subtitle: "Conectando Pasiones con Oportunidades de Voluntariado",
    description: "LEAD Lab es una plataforma innovadora que une a individuos apasionados por el servicio comunitario con oportunidades de voluntariado y proyectos sociales significativos. Nuestro objetivo es empoderar a las personas para que utilicen sus habilidades y liderazgo en beneficio de la sociedad.",
    buttons: [
        {
            id: 1,
            text: "Comenzar Ahora",
            link: "https://leadlabrd.givepulse.com/signup?return_url=%2Fgroup%2F736053-LEAD-Lab"
        },
        {
            id: 2,
            text: "Aprender Más",
            link: "https://leadlabrd.givepulse.com/"
        }
    ]
};

export const FeaturesSection = {
    id: 1,
    title: "Explora las Soluciones de LEAD Lab",
    description: "Descubre cómo LEAD Lab facilita la conexión entre voluntarios y organizaciones, creando un impacto positivo en nuestra comunidad.",
    features: [
        {
            id: 1,
            title: "Construyendo una Comunidad Fuerte",
            description: "Enfocándonos en los esfuerzos de construcción de comunidad de LEAD Lab, como conectar voluntarios con organizaciones locales.",
            svg: arrowIcon
        },
        {
            id: 2,
            title: "Empoderamiento a través del Voluntariado",
            description: "Destacando cómo LEAD Lab empodera a individuos al emparejar sus habilidades con las oportunidades de voluntariado adecuadas.",
            svg: boltIcon            
        },
        {
            id: 3,
            title: "Impacto Social y Desarrollo",
            description: "Discutiendo los proyectos de impacto social y desarrollo facilitados por LEAD Lab.",
            svg: moonIcon
        }
    ]
};

export const FeatureBlocksSection = {
    id: 1,
    blocks: [
        {
            id: 1,
            title: "Conexión con Organizaciones",
            description: "Facilitamos la conexión entre voluntarios y diversas organizaciones, potenciando el servicio comunitario."
        },
        {
            id: 2,
            title: "Herramientas de Gestión de Voluntarios",
            description: "Ofrecemos herramientas eficaces para la gestión y coordinación de voluntarios, optimizando el impacto de cada proyecto."
        },
        {
            id: 3,
            title: "Capacitación y Desarrollo",
            description: "Brindamos capacitación y oportunidades de desarrollo para nuestros voluntarios, mejorando sus habilidades y experiencia."
        },
        {
            id: 4,
            title: "Proyectos de Impacto",
            description: "Nos enfocamos en proyectos que generan un impacto significativo en la comunidad, desde educación hasta apoyo ambiental."
        },
        {
            id: 5,
            title: "Red de Apoyo Social",
            description: "Creamos una red de apoyo social, conectando a personas con la misma visión y compromiso con el bienestar comunitario."
        },
        {
            id: 6,
            title: "Eventos y Actividades",
            description: "Organizamos eventos y actividades que promueven la participación comunitaria y el voluntariado activo."
        },
        {
            id: 7,
            title: "Alianzas Estratégicas",
            description: "Establecemos alianzas con organizaciones clave para ampliar nuestro alcance y fortalecer nuestras iniciativas."
        },
        {
            id: 8,
            title: "Innovación en Servicio Social",
            description: "Incorporamos nuevas tecnologías y metodologías para innovar en la forma en que se realiza el servicio social."
        }        
    ]
};
