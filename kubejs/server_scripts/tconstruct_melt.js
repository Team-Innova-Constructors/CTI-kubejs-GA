ServerEvents.recipes(event => {
    let tconstruct = [
        'tconstruct:smeltery/melting/metal/copper/ore_dense',
        'tconstruct:smeltery/melting/metal/iron/ore_singular',
        'tconstruct:smeltery/melting/metal/gold/ore_singular',
        'tconstruct:smeltery/melting/emerald/ore_singular',
        'tconstruct:smeltery/melting/diamond/ore_singular',
        'tconstruct:smeltery/melting/quartz/ore_singular',

        'tcintegrations:smeltery/melting/metal/desh/ore_singular',
        'tcintegrations:smeltery/melting/metal/desh/raw',
        'tcintegrations:smeltery/melting/metal/desh/raw_block',
        'tcintegrations:smeltery/melting/metal/ostrum/ore_singular',
        'tcintegrations:smeltery/melting/metal/ostrum/raw',
        'tcintegrations:smeltery/melting/metal/ostrum/raw_block',
        'tcintegrations:smeltery/melting/metal/calorite/ore_singular',
        'tcintegrations:smeltery/melting/metal/calorite/raw',
        'tcintegrations:smeltery/melting/metal/calorite/raw_block',
        'tcintegrations:smeltery/melting/metal/cloggrum/ore_singular',
        'tcintegrations:smeltery/melting/metal/cloggrum/raw',
        'tcintegrations:smeltery/melting/metal/cloggrum/raw_block',
        'tcintegrations:smeltery/melting/metal/froststeel/ore_singular',
        'tcintegrations:smeltery/melting/metal/froststeel/raw',
        'tcintegrations:smeltery/melting/metal/froststeel/raw_block',

        'tconstruct:smeltery/melting/metal/zinc/ore_singular',
        'tconstruct:smeltery/melting/metal/aluminum/ore_singular',
        'tconstruct:smeltery/melting/metal/aluminum/raw',
        'tconstruct:smeltery/melting/metal/aluminum/raw_block',
        'tconstruct:smeltery/melting/metal/osmium/ore_singular',
        'tconstruct:smeltery/melting/metal/osmium/raw',
        'tconstruct:smeltery/melting/metal/osmium/raw_block',
        'tconstruct:smeltery/melting/metal/uranium/ore_singular',
        'tconstruct:smeltery/melting/metal/tin/ore_singular',
        'tconstruct:smeltery/melting/metal/lead/ore_singular',
        'tconstruct:smeltery/melting/metal/silver/ore_singular',
        'tconstruct:smeltery/melting/metal/nickel/ore_singular',

        'tinkerscalibration:tools/materials/melting/titanium/ore_singular',
        'tinkerscalibration:tools/materials/melting/inertwitherium/ore_singular',
        'tinkerscalibration:tools/materials/melting/inertwitherium/raw',
        'tinkerscalibration:tools/materials/melting/immersedsilver/ore_singular',
        'tinkerscalibration:tools/materials/melting/immersedsilver/raw',
        'tinkerscalibration:tools/materials/melting/hothium/ore_singular',
        'tinkerscalibration:tools/materials/melting/hothium/raw',
        'tinkerscalibration:tools/materials/melting/stellarium/ore_singular',
        'tinkerscalibration:tools/materials/melting/stellarium/raw',

        'tinkers_reforged:smeltery/melting/kepu/ore_singular',
        'tinkers_reforged:smeltery/melting/kepu/raw',
        'tinkers_reforged:smeltery/melting/kepu/raw_block',
        'tinkers_reforged:smeltery/melting/titanium/block',
        'tinkers_reforged:smeltery/melting/titanium/ore_singular',
        'tinkers_reforged:smeltery/melting/titanium/raw',
        'tinkers_reforged:smeltery/melting/titanium/raw_block',
        
        'tinker_thinking:common/chlorophyte/ore_melting',

    ]
    for (let i of tconstruct) { event.remove({ id: `${i}` }) }

    function addOreMelting(inputItem, result, byproducts, temp, time, rate) {
        let ingredient = inputItem.startsWith('#') 
            ? { tag: inputItem.slice(1) } 
            : { item: inputItem };

        let byproductList = Array.isArray(byproducts) ? byproducts : [byproducts];

        event.custom({
            type: "tconstruct:ore_melting",
            ingredient: ingredient,
            byproducts: byproductList,
            result: result,
            temperature: temp,
            time: time,
            rate: rate
        });
    }
    //原版的矿物
    addOreMelting('#forge:ores/copper',{fluid:"tconstruct:molten_copper",amount:540,rate:"metal"},{fluid:"tconstruct:molten_gold",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/iron',{fluid:"tconstruct:molten_iron",amount:270},{fluid:"tconstruct:molten_nickel",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/gold',{fluid:"tconstruct:molten_gold",amount:270},{fluid:"tconstruct:molten_copper",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/redstone',{fluid:"thermal:redstone",amount:600},{fluid:"thermal:glowstone",amount:200,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/emerald',{fluid:"tconstruct:molten_emerald",amount:300},{fluid:"tconstruct:molten_diamond",amount:200,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/diamond',{fluid:"tconstruct:molten_diamond",amount:300},{fluid:"tconstruct:molten_quartz",amount:200,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/quartz',{fluid:"tconstruct:molten_quartz",amount:300},{fluid:"tconstruct:molten_amethyst",amount:200,rate:"gem"},800,140,"metal")
    
    //AD的矿物和深暗之园的
    addOreMelting('#forge:ores/desh',{fluid:"tcintegrations:desh",amount:270},{fluid:"tconstruct:molten_copper",amount:90,rate:"gem"},2500,140,"metal")
    addOreMelting('ad_astra:raw_desh',{fluid:"tcintegrations:desh",amount:90},{fluid:"tconstruct:molten_copper",amount:30,rate:"gem"},2500,140,"metal")
    addOreMelting('ad_astra:raw_desh_block',{fluid:"tcintegrations:desh",amount:810},{fluid:"tconstruct:molten_copper",amount:270,rate:"gem"},2500,400,"metal")
    addOreMelting('#forge:ores/ostrum',{fluid:"tcintegrations:ostrum",amount:270},{fluid:"tconstruct:molten_silver",amount:90,rate:"gem"},2500,140,"metal")
    addOreMelting('ad_astra:raw_ostrum',{fluid:"tcintegrations:ostrum",amount:90},{fluid:"tconstruct:molten_silver",amount:30,rate:"gem"},2500,140,"metal")
    addOreMelting('ad_astra:raw_ostrum_block',{fluid:"tcintegrations:ostrum",amount:810},{fluid:"tconstruct:molten_silver",amount:270,rate:"gem"},2500,400,"metal")
    addOreMelting('#forge:ores/calorite',{fluid:"tcintegrations:calorite",amount:270},{fluid:"tconstruct:molten_gold",amount:90,rate:"gem"},2500,140,"metal")
    addOreMelting('ad_astra:raw_calorite',{fluid:"tcintegrations:calorite",amount:90},{fluid:"tconstruct:molten_gold",amount:30,rate:"gem"},2500,140,"metal")
    addOreMelting('ad_astra:raw_calorite_block',{fluid:"tcintegrations:calorite",amount:810},{fluid:"tconstruct:molten_gold",amount:270,rate:"gem"},2500,400,"metal")
    addOreMelting('#forge:ores/cloggrum',{fluid:"tcintegrations:cloggrum",amount:270},{fluid:'kubejs:fluid_petrotheum',amount:375,rate:"gem"},2500,280,"metal")
    addOreMelting('undergarden:raw_cloggrum',{fluid:"tcintegrations:cloggrum",amount:90},{fluid:'kubejs:fluid_petrotheum',amount:125,rate:"gem"},2500,280,"metal")
    addOreMelting('undergarden:raw_cloggrum_block',{fluid:"tcintegrations:cloggrum",amount:810},{fluid:'kubejs:fluid_petrotheum',amount:1125,rate:"gem"},2500,800,"metal")
    addOreMelting('#forge:ores/froststeel',{fluid:"tcintegrations:froststeel",amount:270},{fluid:'kubejs:fluid_cryotheum',amount:375,rate:"gem"},5000,280,"metal")
    addOreMelting('undergarden:raw_froststeel',{fluid:"tcintegrations:froststeel",amount:90},{fluid:'kubejs:fluid_cryotheum',amount:125,rate:"gem"},5000,280,"metal")
    addOreMelting('undergarden:raw_froststeel_block',{fluid:"tcintegrations:froststeel",amount:810},{fluid:'kubejs:fluid_cryotheum',amount:1125,rate:"gem"},5000,800,"metal")
    addOreMelting('#forge:ores/ice_shard',{fluid:"ad_astra:cryo_fuel",amount:750},{fluid:'kubejs:fluid_cryotheum',amount:250,rate:"gem"},3000,140,"metal")

    //机械动力,热力,mek和沉浸的矿物
    addOreMelting('#forge:ores/zinc',{fluid:"tconstruct:molten_zinc",amount:270},{fluid:"tconstruct:molten_tin",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/tin',{fluid:"tconstruct:molten_tin",amount:270},{fluid:"tconstruct:molten_copper",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/lead',{fluid:"tconstruct:molten_lead",amount:270},{fluid:"tconstruct:molten_silver",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/silver',{fluid:"tconstruct:molten_silver",amount:270},{fluid:"tconstruct:molten_lead",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/uranium',{fluid:"tconstruct:molten_uranium",amount:270},{fluid:"tconstruct:molten_lead",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/nickel',{fluid:"tconstruct:molten_nickel",amount:270},{fluid:"tconstruct:molten_nickel",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:ores/aluminum',{fluid:"tconstruct:molten_aluminum",amount:270},{fluid:"tconstruct:molten_zinc",amount:90,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:raw_materials/aluminum',{fluid:"tconstruct:molten_aluminum",amount:90},{fluid:"tconstruct:molten_zinc",amount:30,rate:"gem"},800,140,"metal")
    addOreMelting('#forge:storage_blocks/raw_aluminum',{fluid:"tconstruct:molten_aluminum",amount:810},{fluid:"tconstruct:molten_zinc",amount:270,rate:"gem"},800,400,"metal")
    addOreMelting('#forge:ores/osmium',{fluid:"tconstruct:molten_osmium",amount:270},{fluid:"tconstruct:molten_silver",amount:90,rate:"gem"},1100,140,"metal")
    addOreMelting('#forge:raw_materials/osmium',{fluid:"tconstruct:molten_osmium",amount:90},{fluid:"tconstruct:molten_silver",amount:30,rate:"gem"},1100,140,"metal")
    addOreMelting('#forge:storage_blocks/raw_osmium',{fluid:"tconstruct:molten_osmium",amount:810},{fluid:"tconstruct:molten_silver",amount:270,rate:"gem"},1100,400,"metal")
    //匠魂校准的
    addOreMelting('#forge:ores/titanium',{fluid:"tinkerscalibration:moltentitanium",amount:270},{fluid:"tconstruct:molten_iron",amount:90,rate:"gem"},1100,140,"metal")
    addOreMelting('tinkerscalibration:inert_witherium_ore',{fluid:"tinkerscalibration:molteninertwitherium",amount:270},{fluid:"tinkersinnovation:molten_decline",amount:90,rate:"gem"},1500,140,"metal")
    addOreMelting('tinkerscalibration:raw_inert_witherium',{fluid:"tinkerscalibration:molteninertwitherium",amount:90},{fluid:"tinkersinnovation:molten_decline",amount:30,rate:"gem"},1500,140,"metal")
    addOreMelting('#forge:ores/immersed_silver',{fluid:"tinkerscalibration:moltenimmersedsilver",amount:270},{fluid:"tinkerscalibration:moltenhothium",amount:90,rate:"gem"},1500,140,"metal")
    addOreMelting('tinkerscalibration:raw_immersed_silver',{fluid:"tinkerscalibration:moltenimmersedsilver",amount:90},{fluid:"tinkerscalibration:moltenhothium",amount:30,rate:"gem"},1500,140,"metal")
    addOreMelting('#forge:ores/hothium',{fluid:"tinkerscalibration:moltenhothium",amount:270},{fluid:"tinkerscalibration:moltenimmersedsilver",amount:90,rate:"gem"},1500,140,"metal")
    addOreMelting('tinkerscalibration:raw_hothium',{fluid:"tinkerscalibration:moltenhothium",amount:90},{fluid:"tinkerscalibration:moltenimmersedsilver",amount:30,rate:"gem"},1500,140,"metal")
    addOreMelting('#forge:ores/stellarium',{fluid:"tinkerscalibration:moltenstellarium",amount:270},{fluid:'kubejs:fluid_pyrotheum',amount:375,rate:"gem"},1500,140,"metal")
    addOreMelting('tinkerscalibration:raw_stellarium',{fluid:"tinkerscalibration:moltenstellarium",amount:90},{fluid:'kubejs:fluid_pyrotheum',amount:125,rate:"gem"},1500,140,"metal")
    addOreMelting('#forge:ores/magiga',{fluid:"tinkerscalibration:moltenmagiga",amount:270},{fluid:"tinkerscalibration:moltensteamium",amount:90,rate:"gem"},1500,140,"metal")
    addOreMelting('#forge:ores/tonium',{fluid:"tinkerscalibration:moltentonium",amount:270},{fluid:"tinkerscalibration:moltenhalleium",amount:90,rate:"gem"},1500,140,"metal")

    addOreMelting('#forge:ores/kepu',{fluid:"tinkers_reforged:kepu",amount:270},{fluid:'kubejs:zirconium_fluid',amount:90,rate:"gem"},2000,140,"metal")
    addOreMelting('#forge:raw_materials/kepu',{fluid:"tinkers_reforged:kepu",amount:90},{fluid:'kubejs:zirconium_fluid',amount:30,rate:"gem"},2000,140,"metal")
    addOreMelting('#forge:storage_blocks/raw_kepu',{fluid:"tinkers_reforged:kepu",amount:810},{fluid:'kubejs:zirconium_fluid',amount:270,rate:"gem"},2000,400,"metal")

    addOreMelting('#forge:ores/zirconium',{fluid:'kubejs:zirconium_fluid',amount:270},{fluid:"tinkers_reforged:kepu",amount:90,rate:"gem"},2500,140,"metal")
    addOreMelting('#forge:raw_materials/zirconium',{fluid:'kubejs:zirconium_fluid',amount:90},{fluid:"tinkers_reforged:kepu",amount:30,rate:"gem"},2500,140,"metal")
    addOreMelting('#forge:storage_blocks/raw_zirconium',{fluid:'kubejs:zirconium_fluid',amount:810},{fluid:"tinkers_reforged:kepu",amount:270,rate:"gem"},2500,400,"metal")

    
})