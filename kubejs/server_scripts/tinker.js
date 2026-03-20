ServerEvents.recipes(event => {
    function addSevering(entityType,item,count){
        event.custom(
            {
                "type": "tconstruct:severing",
                "entity": {
                    "type": entityType
                },
                "result": {
                    "count": count,
                    "item": item
                }
            }
        )
    }
    function addMelting(item,fluid,amount,temp,time){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":item
                },
                "temperature": temp,
                "time": time,
                "result":{
                    "fluid": fluid,
                    "amount": amount
                }
            }
        )
    }

    addSevering("aether:valkyrie","kubejs:broken_victory_medal",2)

    addMelting("aether:valkyrie_boots","kubejs:molten_valkyrie",3600,3250,100)
    addMelting("aether:valkyrie_helmet","kubejs:molten_valkyrie",4500,3250,125)
    addMelting("aether:valkyrie_chestplate","kubejs:molten_valkyrie",7200,3250,200)
    addMelting("aether:valkyrie_leggings","kubejs:molten_valkyrie",1800,3250,175)

    addMelting("aether:phoenix_boots","kubejs:molten_phoenix",360,3475,100)
    addMelting("aether:phoenix_helmet","kubejs:molten_phoenix",450,3475,125)
    addMelting("aether:phoenix_chestplate","kubejs:molten_phoenix",720,3475,200)
    addMelting("aether:phoenix_leggings","kubejs:molten_phoenix",630,3475,175)
    addMelting("aether:phoenix_gloves","kubejs:molten_phoenix",180,3475,100)

    addMelting("aether:gravitite_sword","kubejs:molten_gravitite",180,2500,100)
    addMelting("aether:gravitite_boots","kubejs:molten_gravitite",360,2500,100)
    addMelting("aether:gravitite_helmet","kubejs:molten_gravitite",450,2500,100)
    addMelting("aether:gravitite_chestplate","kubejs:molten_gravitite",720,2500,100)
    addMelting("aether:gravitite_leggings","kubejs:molten_gravitite",630,2500,100)
    addMelting("aether:gravitite_gloves","kubejs:molten_gravitite",180,2500,100)

    addMelting("aether:valkyrie_hoe","kubejs:molten_valkyrie",1800,3250,100)
    addMelting("aether:valkyrie_axe","kubejs:molten_valkyrie",2700,3250,100)
    addMelting("aether:valkyrie_shovel","kubejs:molten_valkyrie",900,3250,100)
    addMelting("aether:valkyrie_pickaxe","kubejs:molten_valkyrie",2700,3250,100)
    addMelting("aether:valkyrie_gloves","kubejs:molten_valkyrie",1800,3250,100)

    addSevering("undergarden:forgotten_guardian","undergarden:forgotten_ingot",2)

    event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "forge:plates/steel" },
                "cast_consumed": true,
                "fluid": {
                    "name": "tinkers_ingenuity:molten_shine_alloy",
                    "amount": 180
                },
                "result": "kubejs:luminous_metal_plate",
                "cooling_time": 20
            }
    )

    event.custom(
            {
                "type":"tconstruct:casting_table",
                "fluid": {
                    "name": "kubejs:molten_azure_swet",
                    "amount": 250
                },
                "result": "aether:swet_ball",
                "cooling_time": 20
            }
    )
    event.custom(
            {
                "type":"tconstruct:casting_table",
                "fluid": {
                    "name": "kubejs:molten_gold_swet",
                    "amount": 250
                },
                "result": "aether_redux:golden_swet_ball",
                "cooling_time": 20
            }
    )
    event.custom(
            {
                "type":"tconstruct:casting_table",
                "fluid": {
                    "name": "kubejs:molten_dark_swet",
                    "amount": 250
                },
                "result": "aether_redux:dark_swet_ball",
                "cooling_time": 20
            }
    )
    addMelting("aether:swet_ball","kubejs:molten_azure_swet",250,1750,90)
    addMelting("aether_redux:golden_swet_ball","kubejs:molten_gold_swet",250,1750,90)
    addMelting("aether_redux:dark_swet_ball","kubejs:molten_dark_swet",250,1750,90)

    event.custom(
        {
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 270,
      "fluid": "etshtinker:molten_bismuth"
    }
  ],
  "ingredient": {
    "item": "etshtinker:bismuthinite"
  },
  "rate": "metal",
  "result": {
    "amount": 1500,
    "fluid": "tconstruct:seared_stone"
  },
  "temperature": 1500,
  "time": 60
}
    )
    event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "item": "etshtinker:activated_chroma_plate" },
                "cast_consumed": false,
                "fluid": {
                    "name": "immersiveengineering:phenolic_resin",
                    "amount": 250
                },
                "result": "immersiveengineering:plate_duroplast",
                "cooling_time": 5
            }
    )

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "aquamirae:oxygen_tank"
    },
    {
      "item": "aquamirae:elodea"
    },
    {
      "item": "l2complements:soul_flame"
    },
    {
      "item": "twilightforest:torchberries"
    },
    {
      "item": "aquamirae:esca"
    }
  ],
  "level": 1,
  "result": "cti:oxygelium_bud_helmet",
  "tools": {
    "tag": "tconstruct:modifiable/armor/helmets"
  }
})

    event.custom({
  "type": "tconstruct:ore_melting",
  "ingredient": {
    "item":"aether_redux:veridium_ore"
  },
  "rate": "metal",
  "result": {
    "amount": 180,
    "fluid": "kubejs:molten_veridium"
  },
  "temperature": 2000,
  "time": 120
})
    event.custom({
  "type": "tconstruct:ore_melting",
  "ingredient": {
    "item": "aether_redux:raw_veridium"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "fluid": "kubejs:molten_veridium"
  },
  "temperature": 200,
  "time": 60
})
    event.shaped(Item.of('cti:silicated_bricks'),[
      'AB',
      'BA'
    ],{
      A:'kubejs:silicon_carbide',
      B:'tconstruct:scorched_brick'
    })
    event.shaped(Item.of('cti:silicated_glass'),[
      ' A ',
      'BCB',
      ' A '
    ],{
      A:'kubejs:silicon_carbide',
      B:'tconstruct:scorched_brick',
      C:'#thermal:glass/hardened'
    })
    event.shaped(Item.of('cti:silicated_chute'),[
      'ABA',
      ' C ',
      'ABA'
    ],{
      A:'thermal:steel_plate',
      B:'#forge:ingots/hop_graphite',
      C:'cti:silicated_bricks',
    })
    event.shaped(Item.of('cti:silicated_drain'),[
      'A A',
      'BCB',
      'A A'
    ],{
      A:'thermal:steel_plate',
      B:'#forge:ingots/hop_graphite',
      C:'cti:silicated_bricks',
    })
    event.shaped(Item.of('cti:silicated_duct'),[
      'A A',
      'BCB',
      'A A'
    ],{
      A:'thermal:gold_plate',
      B:'#forge:ingots/hop_graphite',
      C:'cti:silicated_bricks',
    })
    event.shaped(Item.of('cti:silicated_valve'),[
      'A A',
      'BCB',
      'A A'
    ],{
      A:'kubejs:zirconium_alloy',
      B:'#forge:ingots/hop_graphite',
      C:'cti:silicated_bricks',
    })
    event.shaped(Item.of('cti:silicated_ingot_gauge'),[
      'ACA',
      'BAB',
      'ACA'
    ],{
      A:'#thermal:glass/hardened',
      B:'tconstruct:scorched_brick',
      C:'kubejs:silicon_carbide',
    })
    event.shaped(Item.of('cti:silicated_fuel_gauge'),[
      'BAC',
      'AAA',
      'CAB'
    ],{
      A:'#thermal:glass/hardened',
      B:'tconstruct:scorched_brick',
      C:'kubejs:silicon_carbide',
    })
    event.shaped(Item.of('3x cti:hepatizon_faucet'),[
      'A A',
      ' A '
    ],{
      A:'tconstruct:hepatizon_ingot',
    })
    event.shaped(Item.of('cti:hepatizon_casting_basin'),[
      'A A',
      'A A',
      'AAA'
    ],{
      A:'tconstruct:hepatizon_ingot',
    })
    event.shaped(Item.of('cti:hepatizon_casting_table'),[
      'AAA',
      'A A',
      'A A'
    ],{
      A:'tconstruct:hepatizon_ingot',
    })
    event.shaped(Item.of('cti:advanced_alloyer'),[
      'AAA',
      'ABA',
      'AAA'
    ],{
      A:'tconstruct:hepatizon_ingot',
      B:'tconstruct:scorched_alloyer'
    })
    event.shaped(Item.of('3x cti:zirconium_alloy_faucet'),[
      'A A',
      ' A '
    ],{
      A:'kubejs:zirconium_alloy',
    })
    event.shaped(Item.of('cti:zirconium_alloy_casting_basin'),[
      'A A',
      'ABA',
      'AAA'
    ],{
      A:'kubejs:zirconium_alloy',
      B:'pneumaticcraft:logistics_core'
    })
    event.shaped(Item.of('cti:zirconium_alloy_casting_table'),[
      'AAA',
      'ABA',
      'A A'
    ],{
      A:'kubejs:zirconium_alloy',
      B:'pneumaticcraft:logistics_core'
    })

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "l2complements:sculkium_ingot"
    },
    {
      "item": "l2complements:void_eye",
      "amount_needed": 3
    },
    {
      "item":"tconstruct:manyullyn_ingot",
      "amount_needed": 3
    },
    {
      "item":"etshtinker:lightless_alloy"
    }
  ],
  "level": 1,
  "result": "cti:shadow_slash",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "tag": "tconstruct:modifiable/melee"
  }
})
event.custom({
    "type": "tconstruct:modifier_salvage",
  "modifier": "cti:shadow_slash",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "tag": "tconstruct:modifiable/melee"
  }
})

event.custom({
  "type":"tconstruct:casting_basin",
  "cast": { "item": "cti:silicated_bricks" },
  "cast_consumed": true,
  "fluid": {
    "name": "tconstruct:molten_steel",
    "amount": 360
  },
  "result": "cti:refinery_controller",
  "cooling_time": 200
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "create:mechanical_pump"
    },
    {
      "item": "create:precision_mechanism",
    },
    {
      "item":"tconstruct:slimesteel_ingot",
      "amount_needed": 4
    }
  ],
  "level": 1,
  "result": "cti:overfill",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "cti:slime_can"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "cti:overfill",
  "slots": {
    "abilities": 1
  },
  "tools": {
    "item": "cti:slime_can"
  }
})

event.custom({
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "tag": "tconstruct:slimy_logs",
      "amount_needed": 4
    }
  ],
  "level": {
    "max": 2
  },
  "result": "cti:replaced_overgrowth",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "cti:slime_can"
  }
})
event.custom({
  "type": "tconstruct:modifier_salvage",
  "modifier": "cti:replaced_overgrowth",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "item": "cti:slime_can"
  }
})

})