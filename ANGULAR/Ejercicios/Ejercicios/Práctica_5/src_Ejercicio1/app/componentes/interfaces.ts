export interface IPelicula{
    caratula:String,
    titulo:String,
    anyo:Number,
    director:String,
    sinopsis:String,
    puntuacion:Number
    actores:String[],
    id:number
}

export interface ISerie{
    caratula:String,
    titulo:String,
    temporadas:Number,
    sinopsis:String,
    plataforma:String,
    id:number
}