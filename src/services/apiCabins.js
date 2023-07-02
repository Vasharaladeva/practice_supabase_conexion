import supabase from "./supabase"

export async function getCabins () {

    const { data,error } = await supabase
    .from('cabins')
    .select('*')
    if(error){
        console.log('cabins could not be loaded')
        throw new Error('')
    } 
    return data
}


export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  
    if (error) {
      console.error(error);
      throw new Error("Cabin could not be deleted");
    }
  
    return data;
  }
  