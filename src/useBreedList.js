import { useState,useEffect } from "react";

//making local cache
const localCache = {};


export default function useBreedList(animal){
    const [breedList,setBreedList]= useState([]);
    const [status,setStatus] = useState('unloaded');

    useEffect(() => {
        if(!animal)
        {//no animal then return empty list
            setBreedList([]);
        }
        else if(localCache[animal])
        {//if already requested serve that
            setBreedList(localCache[animal])
        }
        else{//otherwise request
            requestBreedList();
        }

        async function requestBreedList(){
            setBreedList([]);
            setStatus('loading');
    
            const res =  await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            localCache[animal] =  json.breeds || [];//saving in local Cache
            setBreedList(localCache[animal]);
            setStatus('loaded');    
    
    
        } 
    },[animal])

    return [breedList,status];
    

     
}