

//"https://api.goloadout.com"    "http://127.0.0.1:5000"
let host = "http://127.0.0.1:5000"
export const getCharacters = async () => {
    try {
      const response = await fetch(host+"/characters")
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
  
  export const getCharacter = async (id) => {
      try {
        const response = await fetch(host+"/characters/"+id)
        return response.json();
      } catch (error) {
        console.error(error);
      }
  }
  
  export const getUniqueOutfitOptionType = async (id) => {
      try {
        const response = await fetch(host+"/characters/"+id+"/unique_outfit_type")
        return response.json();
      } catch (error) {
        console.error(error);
      }
  }
  
  export const getCharacterOutfits = async (id) => {
      try {
        const response = await fetch(host+"/characters/"+id+"/outfits")
        return response.json();
      } catch (error) {
        console.error(error);
      }
  }
  
  
    export const getCharactersTypes = async () => {
    try {
      const response = await fetch(host+"/character-categories")
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
  