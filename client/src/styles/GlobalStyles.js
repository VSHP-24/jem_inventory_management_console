import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* GREY */
  --color-grey-0: #FFF;
  --color-grey-50: #F0F0F2;
  --color-grey-100: #E9E9EC;
  --color-grey-200: #DEDEE3;
  --color-grey-300: #BEBEC6;
  --color-grey-400: #A8A8B3;
  --color-grey-500: #9292A0;
  --color-grey-600: #686878;
  --color-grey-700: #555562;
  --color-grey-800: #393941;
  --color-grey-900: #09090B;

  /* PRIMARY COLOR ,  TINT & SHADES */

  --color-gold-100: #FFED9D;
  --color-gold-200: #FFE985;
  --color-gold-300: #FFE46C;
  --color-gold-400: #FFE054;
  --color-gold-500: #FFDB3B;
  --color-gold-600: #FFD723;
  --color-gold-700: #FFD20A;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
    --image-opacity: 100%;

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  letter-spacing: 0.1rem;


  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html{
  font-size: 62.5%
}

body {
  font-family: "Dosis", sans-serif;
  line-height: 1.5;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  font-size: 1.6rem;

}

button,nav {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

ul {
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

}`;

export default GlobalStyles;
