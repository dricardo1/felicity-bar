import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
}

html {
    scroll-behavior: smooth;
    width: 100vw;
    overflow-x: hidden;
}

body {
    font-family: 'Lato', 'Verdana', 'Arial', sans-serif;
    background-color: #000;
}


h1, h2 h3, h4, h5 {
    font-family: 'Ultra', 'Georgia', serif;
    font-weight: normal;
}

a {
    text-decoration: none;
}

.pulse {
    animation: pulse 3s infinite;
    @keyframes pulse {
        0% {
            transform: scale(0.95);    
        }
    
        70% {
            transform: scale(1.5);        
        }
    
        100% {
            transform: scale(0.95);
        }
    }
}

.pulseBtn {
    animation: pulseBtn 4s infinite;
    @keyframes pulseBtn {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
    
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
}

.fade-in {
    animation: fadeIn ease 2.5s;
    -webkit-animation: fadeIn ease 2.5s;
    -moz-animation: fadeIn ease 2.5s;
    -o-animation: fadeIn ease 2.5s;
    -ms-animation: fadeIn ease 2.5s;
    }
    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

    .fade-in-p {
        animation: fadeIn ease 4s;
        -webkit-animation: fadeIn ease 4s;
        -moz-animation: fadeIn ease 4s;
        -o-animation: fadeIn ease 4s;
        -ms-animation: fadeIn ease 4s;
        }
        @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
        
        @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
        
        @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
        
        @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
        
        @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }


`;
