import genres from "../data/genres";
import useData from "./useData";


export interface Genre{
    id:number,
    name:string
    image_background:string
}

const useGenre=()=>({data:genres,isLoading:false,errors:false});
export default useGenre