import { Categoria } from '../categoria/categoria'

export class Elemento {
    Id: number;
    Descripcion: string;
    IdCategoria: number;
    Categoria: Categoria;
    FechaCreacion: Date;
}