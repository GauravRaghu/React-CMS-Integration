import { StaticlyLoadedComp } from "../components/SomeComponent";

// Create an object that maps the component names in `componentArray` to any staticly imported ones. 
export const staticComponentMap: {[key: string]: React.FC<any>} = {
    'StaticlyLoadedComp': StaticlyLoadedComp,
}
