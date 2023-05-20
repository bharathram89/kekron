

export const getCharacters = async () => {
    try {
      const response = await fetch("https://api.goloadout.com/characters")
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
  
  export const getCharacter = async (id) => {
      try {
        const response = await fetch("https://api.goloadout.com/characters/"+id)
        return response.json();
      } catch (error) {
        console.error(error);
      }
  }
  
  export const getUniqueOutfitOptionType = async (id) => {
      try {
        const response = await fetch("https://api.goloadout.com/characters/"+id+"/unique_outfit_type")
        return response.json();
      } catch (error) {
        console.error(error);
      }
  }
  
  export const getCharacterOutfits = async (id) => {
      try {
        const response = await fetch("https://api.goloadout.com/characters/"+id+"/outfits")
        return response.json();
      } catch (error) {
        console.error(error);
      }
  }
  
  
    export const getCharactersTypes = async () => {
    try {
      const response = await fetch("https://api.goloadout.com/character-categories")
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
  