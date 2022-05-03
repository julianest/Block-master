const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
    desktopGeneral: "668px",
    mobileGeneral: "667px"
};
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    desktopGeneral: `(min-width: ${size.desktopGeneral})`,
    mobileGeneral: `(max-width: ${size.mobileGeneral})`,
};

/*------Uso--------*/
//Styled components

//se declara el componente
//se importa en la hoja donde se realiza los estilos de styled componentes.
// import { device } from "./mediaQuerys";

// Se trae la medida que se necesite, sin embargo yo cree una general.


// export const Launching = styled.h4 `
//     color: var(--White);
//     @media ${device.desktopGeneral}{       
//         margin-top:10%
//     }
//     @media ${device.mobileGeneral}{
//         margin-top:40%
//     }
// `