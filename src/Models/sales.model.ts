/*modelado de los datos*/
export interface ISales{
    id_user: number;
    details: IDetails[];//propiedad de tipo details tipo arreglo
}
export interface IDetails{
    //el id no se especifica
    product : string;
    quantity : number;
    unit_price : number;
}