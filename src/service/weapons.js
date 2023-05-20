

export const getWeapons = async () => {
  try {
    const response = await fetch("https://api.goloadout.com/weapons")
    return response.json();
  } catch (error) {
    console.error(error);
  }
}


export const getWeapon = async (id) => {
    try {
      const response = await fetch("https://api.goloadout.com/weapons/"+id)
      return response.json();
    } catch (error) {
      console.error(error);
    }
}

export const getUniqueWeaponAttachmentType = async (id) => {
    try {
      const response = await fetch("https://api.goloadout.com/weapons/"+id+"/unique_attachment_type")
      return response.json();
    } catch (error) {
      console.error(error);
    }
}

export const getWeaponAttachments = async (id) => {
    try {
      const response = await fetch("https://api.goloadout.com/weapons/"+id+"/attachments")
      return response.json();
    } catch (error) {
      console.error(error);
    }
}

export const getTypesOfGuns = async () => {
  try {
    const response = await fetch("https://api.goloadout.com/weapon-types")
    return response.json();
  } catch (error) {
    console.error(error);
  }
}





