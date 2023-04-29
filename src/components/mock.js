export let weapon = {
    name:'Sig552',
    category:'Airsoft',//airsoft,paintball,realsteel
    type:'rifle',//rifle,shotgun,handgun
    subType:'AUG',//AR, AK, pump, leaver, pistol,revolver
    action:'auto', //semi, auto, bolt, break, muzzle leading
    ammo:"5.56",
    modelUrl:'Sig552Updated',
    mods:['sights','underbarrel','magazine']
}
export let weaponSights = ['Holographic Sight', 'Optical Sight (1)', 'Optical Sight (2)', 'Optical Sight (3)', 'Reflex Sight (1)', 'Reflex Sight (2)', 'Reflex Sight (3)'  ]
export let weaponUnderbarrel = ['Vertical Grip (1)', 'Vertical Grip (2)', 'Vertical Grip (3)', 'Vertical Grip (4)', 'Vertical Grip (5)', 'Vertical Grip (6)']
export let weaponMagazine = ['sig552_mobile_diffuse', 'Magazine (1) Short', 'Magazine (2) Short' , 'Magazine (3) Short', 'Magazine (4) Short', 'Magazine (5) Short', 'Magazine (1) Standard', 'Magazine (2) Standard', 'Magazine (3) Standard', 'Magazine (4) Standard', 'Magazine (5) Standard' ]

export let weaponsList = [
    {
        name:'AR-15',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'rifle',//rifle,shotgun,handgun
        subType:'AR',//AR, AK, pump, leaver, pistol,revolver
        action:'auto', //semi, auto, bolt, break, muzzle leading
        ammo:"5.56",
        modelUrl:'ar-assault',
        image:'ar-assault'
    },
    {
        name:'AK-47',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'rifle',//rifle,shotgun,handgun
        subType:'AR',//AR, AK, pump, leaver, pistol,revolver
        action:'auto', //semi, auto, bolt, break, muzzle leading
        ammo:"5.56",
        modelUrl:'ak-assault',
        image:'ak-assault'
    },
    {
        name:'AUG',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'rifle',//rifle,shotgun,handgun
        subType:'AUG',//AR, AK, pump, leaver, pistol,revolver
        action:'auto', //semi, auto, bolt, break, muzzle leading
        ammo:"5.56",
        modelUrl:'aug-assault',
        image:'aug-assault'
    },
    {
        name:'QBZ',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'rifle',//rifle,shotgun,handgun
        subType:'AR',//AR, AK, pump, leaver, pistol,revolver
        action:'auto', //semi, auto, bolt, break, muzzle leading
        ammo:"5.56",
        modelUrl:'qbz-assault',
        image:'qbz-assault'
    },
    {
        name:'1911',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'pistol',//rifle,shotgun,handgun
        subType:'1911',//AR, AK, pump, leaver, pistol,revolver
        action:'semi', //semi, auto, bolt, break, muzzle leading
        ammo:"9mm",
        modelUrl:'1911-pistol',
        image:'1911-pistol'
    },
    {
        name:'Glock-18',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'pistol',//rifle,shotgun,handgun
        subType:'glock',//AR, AK, pump, leaver, pistol,revolver
        action:'semi', //semi, auto, bolt, break, muzzle leading
        ammo:"9mm",
        modelUrl:'glock-pistol',
        image:'glock-pistol'
    },
    {
        name:'revolver 1',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'pistol',//rifle,shotgun,handgun
        subType:'revolver',//AR, AK, pump, leaver, pistol,revolver
        action:'semi', //semi, auto, bolt, break, muzzle leading
        ammo:"9mm",
        modelUrl:'revolver-pistol',
        image:'revolver-pistol'
    },
    {
        name:'mac 10',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'smg',//rifle,shotgun,handgun
        subType:'mac',//AR, AK, pump, leaver, pistol,revolver
        action:'auto', //semi, auto, bolt, break, muzzle leading
        ammo:"9mm",
        modelUrl:'mac10-smg',
        image:'mac10-smg'
    },
    {
        name:'mp 7',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'smg',//rifle,shotgun,handgun
        subType:'mac',//AR, AK, pump, leaver, pistol,revolver
        action:'auto', //semi, auto, bolt, break, muzzle leading
        ammo:"9mm",
        modelUrl:'mp7-smg',
        image:'mp7-smg'
    },
    {
        name:'remington',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'shotgun',//rifle,shotgun,handgun
        subType:'mac',//AR, AK, pump, leaver, pistol,revolver
        action:'pump', //semi, auto, bolt, break, muzzle leading
        ammo:"40mm",
        modelUrl:'pump-shotgun',
        image:'pump-shotgun'
    },
    {
        name:'old school',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'shotgun',//rifle,shotgun,handgun
        subType:'leaver type',//AR, AK, pump, leaver, pistol,revolver
        action:'leaver', //semi, auto, bolt, break, muzzle leading
        ammo:"40mm",
        modelUrl:'leaver-shotgun',
        image:'leaver-shotgun'
    },
    {
        name:'kar98',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'sniper',//rifle,shotgun,handgun
        subType:'kar',//AR, AK, pump, leaver, pistol,revolver
        action:'bolt', //semi, auto, bolt, break, muzzle leading
        ammo:"50cal",
        modelUrl:'usr-sniper',
        image:'usr-sniper'
    },
    {
        name:'pellington',
        category:'Airsoft',//airsoft,paintball,realsteel
        type:'sniper',//rifle,shotgun,handgun
        subType:'pellington',//AR, AK, pump, leaver, pistol,revolver
        action:'bolt', //semi, auto, bolt, break, muzzle leading
        ammo:"30cal",
        modelUrl:'pellington-sniper',
        image:'pellington-sniper'
    },
    

]