/**
 *
 * General block sprites
 * =====================
 *
 *
 * This script assigns sprites to vanilla blocks.
 *
 *
 */

woodenMaterials = [
    "acacia",
    "birch",
    "darkoak",
    "jungle",
    "oak",
    "spruce",
    "crimson",
    "warped",
    "mangrove",
    "bamboo",
    "cherry",
];

colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "silver",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
];
class StyleSheet {

    build(builder) {
        this.addDefault(builder);

        this.addWoodenProducts(builder);
        this.addStoneProducts(builder);
        this.addBrickProducts(builder);
        this.addSandstoneProducts(builder);
        this.addCopperProducts(builder);
        this.addOtherProducts(builder);

        this.addCarpets(builder);

        this.addPressurePlates(builder);

        this.addRails(builder);
    }


    addDefault(builder) {
        builder.style("*:*").sprite("*_top");
        builder.style("*:*").sprite("*_stage3");
        builder.style("*:*").sprite("*");

        builder.style("*_log[axis:y]").sprite("*_top");

        builder.style("grass_block, grass, tall_grass").sprite("*").grassTint();
        builder.style("*_leaves, vine").sprite("*").foliageTint();
        builder.style("azalea_leavaes, cherry_leaves").withoutTint();

        builder.style("grass_block, dirt, dirt_path, gravel, sand, red_sand, snow, snow_block, snow_layer").randomRotation().randomZFlip().randomXFlip();
        builder.style("stone").randomZFlip().randomXFlip();

        builder.style("lava").sprite("lava_still");
        builder.style("flowing_lava").sprite("lava_flow");

        builder.style("water").sprite("water_still").waterTint();
        builder.style("flowing_water").sprite("water_flow").waterTint();

        builder.style("fire").sprite("fire_0");
        builder.style("soul_fire").sprite("soul_fire_0");
        builder.style("campfire").sprite("campfire_fire");
        builder.style("soul_campfire").sprite("soul_campfire_fire");

        builder.style("snow_block, snow_layer").sprite("snow");

        builder.style("smooth_sandstone").sprite("sandstone_top");

        builder.style("hay_block").sprite("*_side");
        builder.style("wall_torch").sprite("torch");

        builder.style("grindstone").sprite("grindstone_side");
        builder.style("water_cauldron").sprite("cauldron_top");

        builder.style("dispenser").sprite("dispenser_front");
        builder.style("dropper").sprite("dropper_front");

        builder.style("beehive").sprite("beehive_front_honey");
        builder.style("beehive[honey_level:0]").sprite("beehive_front");

        builder.style("bamboo").sprite("bamboo_stage0");

        builder.style("sticky_piston").sprite("piston_top_sticky");
        builder.style("piston_head").sprite("piston_top");
        builder.style("piston_head[type:sticky]").sprite("piston_top_sticky");

        builder.style("*_glazed_terracotta[facing:north]").rotate(180);
        builder.style("*_glazed_terracotta[facing:east]").rotate(270);
        builder.style("*_glazed_terracotta[facing:south]").rotate(0);
        builder.style("*_glazed_terracotta[facing:west]").rotate(90);

    }

    addRails(builder) {

        builder.style("(rail, powered_rail, activator_rail) ([shape:east_west], [shape:ascending_west], [shape:ascending_east])").sprite("*").rotate(90);

        builder.style("rail[shape:south_east]").sprite("rail_corner").rotate(0);
        builder.style("rail[shape:south_west]").sprite("rail_corner").rotate(90);
        builder.style("rail[shape:north_west]").sprite("rail_corner").rotate(180);
        builder.style("rail[shape:north_east]").sprite("rail_corner").rotate(270);
    }

    addWoodenProducts(builder) {
        woodenMaterials.forEach(m => {
            builder.style(m + "_stairs").sprite(m + "_planks");
            builder.style(m + "_slab").sprite(m + "_planks");
            builder.style(m + "_fence").sprite(m + "_planks");
            builder.style(m + "_fence_gate").sprite(m + "_planks");
            builder.style(m + "_pressure_plate").sprite(m + "_planks");

            builder.style("stripped_" + m + "_wood").sprite("stripped_" + m + "_log");

            builder.style("stripped_" + m + "_stem").sprite("stripped_" + m + "_stem_top");
            builder.style("stripped_" + m + "_hyphae").sprite("stripped_" + m + "_stem");

            builder.style("stripped_" + m + "_log[axis:y]").sprite("stripped_" + m + "_log_top");
            builder.style("stripped_" + m + "_log[axis:x]").sprite("stripped_" + m + "_log");
            builder.style("stripped_" + m + "_log[axis:z]").sprite("stripped_" + m + "_log").rotate(90);
        });
    }

    addCarpets(builder) {
        colors.forEach(c => {
            builder.style(c + "_carpet").sprite(c + "_wool");
        });
    }

    addPressurePlates(builder) {
        builder.style("heavy_weighted_pressure_plate").sprite("iron_block");
        builder.style("light_weighted_pressure_plate").sprite("gold_block");
    }


    addStoneProducts(builder) {
        let materials = [
            "andesite",
            "blackstone",
            "cobblestone",
            "cobbled_deepslate",
            "dark_prismarine",
            "diorite",
            "granite",
            "mossy_cobblestone",
            "prismarine",
            "smooth_stone",
            "stone",

            "polished_andesite",
            "polished_blackstone",
            "polished_deepslate",
            "polished_diorite",
            "polished_granite",
        ];


        materials.forEach(m => {
            builder.style(m + "_stairs").sprite(m);
            builder.style(m + "_slab").sprite(m);
            builder.style(m + "_wall").sprite(m);
            builder.style(m + "_pressure_plate").sprite(m);
        });
    }

    addCopperProducts(builder) {
        let materials = [
            "cut_copper",
            "exposed_cut_copper",
            "oxidized_cut_copper",
            "weathered_cut_copper",
        ];
        let waxed = [
            "",
            "waxed_",
        ];

        waxed.forEach(w => {
            materials.forEach(m => {
                builder.style(w + m).sprite(m);
                builder.style(w + m + "_stairs").sprite(m);
                builder.style(w + m + "_slab").sprite(m);
                builder.style(w + m + "_wall").sprite(m);
                builder.style(w + m + "_pressure_plate").sprite(m);
            });
        });

        let blocks = [
            "copper_block",
            "exposed_copper",
            "oxidized_copper",
            "weathered_copper",
        ];

        waxed.forEach(w => {
            blocks.forEach(m => {
                builder.style(w + m).sprite(m);
            });
        });
    }
    addBrickProducts(builder) {
        let materials = [
            "brick",
            "deepslate_brick",
            "deepslate_tile",
            "end_stone_brick",
            "mossy_stone_brick",
            "mud_brick",
            "nether_brick",
            "polished_blackstone_brick",
            "prismarine_brick",
            "stone_brick",
            "red_nether_brick",
        ];


        materials.forEach(m => {
            builder.style(m + "_stairs").sprite(m + "s");
            builder.style(m + "_slab").sprite(m + "s");
            builder.style(m + "_wall").sprite(m + "s");
        });
    }

    addSandstoneProducts(builder) {
        let materials = [
            "sandstone",
            "red_sandstone",
        ];


        materials.forEach(m => {
            builder.style(m + "_stairs").sprite(m + "_top");
            builder.style(m + "_slab").sprite(m + "_top");
            builder.style(m + "_wall").sprite(m + "_top");
            builder.style("smooth_" + m + "_stairs").sprite(m + "_top");
            builder.style("smooth_" + m + "_slab").sprite(m + "_top");
            builder.style("smooth_" + m + "_wall").sprite(m + "_top");
            builder.style("cut_" + m + "_stairs").sprite(m + "_top");
            builder.style("cut_" + m + "_slab").sprite(m + "_top");
            builder.style("cut_" + m + "_wall").sprite(m + "_top");
        });

        builder.style("smooth_sandstone").sprite("sandstone_top");
        builder.style("smooth_red_sandstone").sprite("red_sandstone_top");
    }

    addOtherProducts(builder) {
        let materials = {
            "quartz": "quartz_block_top",
            "smooth_quartz": "quartz_block_bottom",
            "purpur": "purpur_block",
        };


        for (const m in materials) {
            let x = materials[m];
            builder.style(m + "_stairs").sprite(x);
            builder.style(m + "_slab").sprite(x);
            builder.style(m + "_wall").sprite(x);
        }
    }


}