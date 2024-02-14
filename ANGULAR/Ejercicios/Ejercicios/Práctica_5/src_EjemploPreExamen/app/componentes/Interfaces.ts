export interface IPelicula{
    id:number;
    caratula:string;
    titulo:string;
    año:number;
    director:string;
    sinopsis:string;
    puntuacion:number;
}

export interface ISerie{
    id:number;
    caratula:string;
    titulo:string;
    temporadas:number;
    sinopsis:string;
    plataforma:string;
}