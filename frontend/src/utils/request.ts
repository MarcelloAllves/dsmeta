export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
/*
    Mais ou menos está falando o seguinte: por padrão pega a variavel de ambiente "VITE_BACKEND_URL"
    e caso ela não esteja funcionando então pegue por padrão utiliza o local host 
    "http://localhost:8080".
    ?? -> o uso duplo do sinal de interrogação significa Coalescência, se não der certo o valor da esquerda então 
    tente o da direita.
*/