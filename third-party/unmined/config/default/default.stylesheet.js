/**
 *
 * Default stylesheet
 * ==================
 *
 *
 * This script sets up default block styles based on block tags.
 * It gives color to all properly tagged blocks, even modded ones.
 * It also creates default color IDs, and some settings.
 *
 *
 * No detailed documentation here as things are going to change soon.
 *
 *
 *
 * This is a JavaScript file interpreted by Jint 3.x.
 * See https://github.com/sebastienros/jint for supported language features.
 *
 */

const SettingName = {
    flowerColoring: "flowerColoring",
    coralColoring: "coralColoring",
    oreColoring: "oreColoring",
    dyeColoring: "dyeColoring",
    myceliumColoring: "myceliumColoring",
    woodColoring: "woodColoring",
    useUnderground: "useUnderground",
    useLandElevationGradient: "useLandElevationGradient",
    biomeColoring: "biomeColoring",
    biomeColoringSavanna: "biomeColoringSavanna",
    biomeColoringTaiga: "biomeColoringTaiga",
    biomeColoringDarkForest: "biomeColoringDarkForest",
    biomeColoringSwamp: "biomeColoringSwamp",
    biomeColoringBadlands: "biomeColoringBadlands",
    biomeColoringOcean: "biomeColoringOcean",
    vanillaBiomeTints: "vanillaBiomeTints",
};

class StyleSheet {

    initSettings(s) {
        s.category("Default biome styling", c => {
            c.bool(SettingName.biomeColoring, "Enabled", true);
            c.bool(SettingName.biomeColoringOcean, "Ocean", true);
            c.bool(SettingName.biomeColoringBadlands, "Badlands", true);
            c.bool(SettingName.biomeColoringDarkForest, "Dark forest", true);
            c.bool(SettingName.biomeColoringSavanna, "Savanna", true);
            c.bool(SettingName.biomeColoringSwamp, "Swamp", true);
            c.bool(SettingName.biomeColoringTaiga, "Taiga", true);
        });
        s.category("Colors", c => {
            c.bool(SettingName.coralColoring, "Coral", true);
            c.bool(SettingName.dyeColoring, "Dyed blocks", true);
            c.bool(SettingName.flowerColoring, "Flowers", true);
            c.bool(SettingName.myceliumColoring, "Mycelium", true);
            c.bool(SettingName.oreColoring, "Ores", true);
            c.bool(SettingName.woodColoring, "Wooden structures", true);
        });
        s.category("Features", c => {
            c.bool(SettingName.useLandElevationGradient, "Cartographic elevation gradient", true);
            c.bool(SettingName.useUnderground, "Different underground style", true);
        });
        s.category("Experimental", c => {
            c.bool(SettingName.vanillaBiomeTints, "Vanilla biome tints", false);
        });
    }

    build(builder) {

        this.addMinecraftColors(builder);
        this.addTerrainColors(builder);

        this.addDefaultStyles(builder);

        if (builder.s[SettingName.flowerColoring]) this.addFlowerStyles(builder);
        if (builder.s[SettingName.coralColoring]) this.addCoralStyles(builder);
        if (builder.s[SettingName.oreColoring]) this.addOreStyles(builder);
        if (builder.s[SettingName.woodColoring]) this.addWoodStyles(builder);

    }


    // Colors for colored blocks (wool, concrete, carpet, etc.)
    addMinecraftColors(builder) {
        builder.color("mc.white", 0, 0, 90);
        builder.color("mc.orange", 24, 80, 60);
        builder.color("mc.magenta", 300, 70, 70);
        builder.color("mc.light_blue", 204, 70, 70);
        builder.color("mc.yellow", 48, 70, 70);
        builder.color("mc.lime", 96, 80, 60);
        builder.color("mc.pink", 336, 70, 70);
        builder.color("mc.gray", 0, 0, 35);
        builder.color("mc.light_gray", 0, 0, 50);
        builder.color("mc.cyan", 180, 70, 40);
        builder.color("mc.purple", 276, 70, 40);
        builder.color("mc.blue", 240, 70, 40);
        builder.color("mc.brown", 36, 70, 40);
        builder.color("mc.green", 96, 70, 40);
        builder.color("mc.red", 0, 70, 40);
        builder.color("mc.black", 0, 0, 10);
    }

    // Colors for terrain
    addTerrainColors(builder) {
        builder.color("map.ice", 204, 50, 70);
        builder.color("map.snow", 0, 0, 90);
        builder.color("map.dirt", 48, 40, 40);
        builder.color("map.lava", 18, 90, 50);

        builder.color("map.water", 216, 90, 40);

        var waterSaturation = 80;
        var waterLightness = 50;

        builder.color("map.water.swamp", 135, 15, waterLightness * 0.70);
        builder.color("map.water.warm", 210, waterSaturation, waterLightness);
        builder.color("map.water.lukewarm", 213, waterSaturation, waterLightness);
        builder.color("map.water.other", 216, waterSaturation, waterLightness);
        builder.color("map.water.ocean", 222, waterSaturation, waterLightness);
        builder.color("map.water.cold", 222, waterSaturation + 12, waterLightness - 6);

        /*
        builder.color("map.water.other", 210, 90, 40);
        builder.color("map.water.ocean", 216, 90, 40);
        builder.color("map.water.warm", 207, 95, 40);
        builder.color("map.water.cold", 222, 90, 40);
        builder.color("map.water.swamp", 135, 15, 40);
        */

        builder.color("map.water.magic", 180, 75, 50);
        builder.color("map.water.poison", 168, 70, 50);

        builder.color("map.sand", 48, 35, 70);
        builder.color("map.salt", 48, 10, 90);
        builder.color("map.redsand", 24, 70, 45);
        builder.color("map.terracotta", 18, 45, 60);
        builder.color("map.gravel", 15, 5, 70);
        builder.color("map.clay", 219, 10, 60);
        builder.color("map.podzol", 36, 50, 40);
        builder.color("map.darkrock", 0, 0, 30);

        builder.color("map.land", 78, 95, 40);
        builder.color("map.land.savanna", 54, 35, 50);
        builder.color("map.land.taiga", 114, 25, 50);
        builder.color("map.land.darkforest", 96, 40, 30);
        builder.color("map.land.swamp", 66, 30, 30);

        builder.color("map.vegetation", 75, 60, 40);

        builder.color("map.grass", 84, 90, 35);
        builder.color("map.grass.savanna", 54, 35, 50);
        builder.color("map.grass.taiga", 114, 35, 40);
        builder.color("map.grass.darkforest", 96, 40, 40);
        builder.color("map.grass.swamp", 66, 40, 30);
        builder.color("map.grass.badlands", 42, 35, 40);

        var leavesLightness = 26;
        builder.color("map.leaves", 102, 80, leavesLightness);
        builder.color("map.leaves.savanna", 54, 40, leavesLightness);
        builder.color("map.leaves.taiga", 120, 35, leavesLightness);
        builder.color("map.leaves.darkforest", 102, 60, leavesLightness);
        builder.color("map.leaves.swamp", 66, 50, leavesLightness * 0.65);
        builder.color("map.leaves.badlands", 42, 50, leavesLightness);

        builder.color("map.leaves.birch", 90, 70, leavesLightness);
        builder.color("map.leaves.spruce", 120, 40, leavesLightness);
        builder.color("map.leaves.cherry", 330, 85, 75);
        builder.color("map.bamboo", 84, 90, 50);

        builder.color("map.flower", 96, 60, 60);

        builder.color("map.land.underground", 36, 60, 50);

        builder.color("map.flower.red", 0, 90, 60);
        builder.color("map.flower.yellow", 54, 90, 60);
        builder.color("map.flower.blue", 204, 90, 60);
        builder.color("map.flower.purple", 282, 90, 60);
        builder.color("map.flower.white", 0, 0, 95);
        builder.color("map.flower.lilypad", 132, 60, 30);
        builder.color("map.flower.pink", 330, 85, 85);

        builder.color("map.coral.tube", 228, 60, 50);
        builder.color("map.coral.brain", 330, 60, 50);
        builder.color("map.coral.bubble", 300, 60, 50);
        builder.color("map.coral.fire", 0, 60, 50);
        builder.color("map.coral.horn", 60, 60, 50);
        builder.color("map.coral.dead", 30, 6, 60);

        builder.color("map.endstone", 63, 35, 70);
        builder.color("map.purpur", 300, 20, 45);
        builder.color("map.chorus", 300, 25, 30);
        builder.color("map.sculk", 180, 70, 30);

        builder.color("map.netherrack", 0, 60, 25);
        builder.color("map.soulsand", 24, 30, 25);
        builder.color("map.netherwart", 0, 70, 40);
        builder.color("map.warpedwart", 180, 70, 30);

        builder.color("map.mountain", 36, 90, 30);
        builder.color("map.mountain.sand", 48, 40, 50);
        //builder.color("map.mountain.sand", 48, 40, 70);
        builder.color("map.mountain.salt", 48, 10, 80);
        //builder.color("map.mountain.redsand", 36, 50, 70);
        builder.color("map.mountain.redsand", 24, 70, 45);
        builder.color("map.mountain.rock", 0, 0, 60);
        builder.color("map.mountain.savanna", 36, 90, 30);
        builder.color("map.mountain.taiga", 36, 90, 30);
        builder.color("map.mountain.darkforest", 36, 90, 30);
        builder.color("map.mountain.swamp", 36, 90, 30);

        builder.color("map.mud", 36, 60, 25);
        builder.color("map.path", 36, 50, 30);

        builder.color("map.artificial", 0, 0, 85);
        builder.color("map.light", 54, 100, 60);
        builder.color("map.rail", 42, 100, 50);
        builder.color("map.fire", 24, 100, 60);
        builder.color("map.circuit", 0, 70, 50);
        builder.color("map.cobweb", 0, 0, 80);

        builder.color("map.wood", 42, 50, 50);

        builder.color("map.wood.acacia", 18, 55, 40);
        builder.color("map.wood.birch", 42, 24, 50);
        builder.color("map.wood.dark_oak", 30, 55, 25);
        builder.color("map.wood.jungle", 24, 38, 40);
        builder.color("map.wood.oak", 36, 40, 50);
        builder.color("map.wood.spruce", 30, 45, 30);
        builder.color("map.wood.crimson", 333, 35, 30);
        builder.color("map.wood.warped", 174, 55, 30);
        builder.color("map.wood.mangrove", 12, 45, 30);
        builder.color("map.wood.bamboo", 48, 50, 40);
        builder.color("map.wood.cherry", 6, 50, 80);

        builder.color("map.stone", 0, 0, 70);
        builder.color("map.rock", 0, 0, 70);
        builder.color("map.prismarine", 172, 35, 50);
        builder.color("map.dripstone", 30, 20, 50);
        builder.color("map.crops", 42, 60, 40);

        builder.color("map.mycelium", 282, 20, 35);
        builder.color("map.mushroom.red", 0, 70, 30);
        builder.color("map.mushroom.brown", 48, 60, 30);

        builder.gradient("land")
            .step(builder.altitude.sea, "map.land")
            .step(builder.altitude.mountain, "map.mountain");

        builder.gradient("land.sand")
            .step(builder.altitude.sea, "map.sand")
            .step(builder.altitude.mountain, "map.mountain.sand");

        builder.gradient("land.salt")
            .step(builder.altitude.sea, "map.salt")
            .step(builder.altitude.mountain, "map.mountain.salt");

        builder.gradient("land.redsand")
            .step(builder.altitude.sea, "map.redsand")
            .step(builder.altitude.mountain, "map.mountain.redsand");

        builder.gradient("land.rock")
            .step(builder.altitude.sea, "map.rock")
            .step(builder.altitude.mountain, "map.mountain.rock");

        builder.gradient("land.savanna")
            .step(builder.altitude.sea, "map.land.savanna")
            .step(builder.altitude.mountain, "map.mountain.savanna");

        builder.gradient("land.taiga")
            .step(builder.altitude.sea, "map.land.taiga")
            .step(builder.altitude.mountain, "map.mountain.taiga");

        builder.gradient("land.darkforest")
            .step(builder.altitude.sea, "map.land.darkforest")
            .step(builder.altitude.mountain, "map.mountain.darkforest");

        builder.gradient("land.swamp")
            .step(builder.altitude.sea, "map.land.swamp")
            .step(builder.altitude.mountain, "map.mountain.swamp");

        builder.curve("land.lightness.elevation")
            .point(builder.altitude.min, -0.125)
            .point(builder.altitude.sea - 32, -0.075)
            .point(builder.altitude.sea, -0.0)
            .point(builder.altitude.mountain, -0.075)
            .point(builder.altitude.max, -0.125);
    }


    addOreStyles(builder) {
        builder.style("#coal_ore").color(0, 0, 70);
        builder.style("#copper_ore").color(24, 60, 40);
        builder.style("#diamond_ore").color(180, 60, 40);
        builder.style("#emerald_ore").color(150, 60, 40);
        builder.style("#gold_ore").color(48, 60, 40);
        builder.style("#iron_ore").color(36, 40, 40);
        builder.style("#lapis_ore").color(240, 40, 40);
        builder.style("#redstone_ore").color(0, 40, 40);
        builder.style("#nether_gold_ore").color(48, 80, 60);
        builder.style("#nether_quartz_ore").color(0, 0, 80);
    }

    addDefaultStyles(builder) {
        builder.style("#artificial").color("map.artificial");
        builder.style("#light").color("map.light");

        if (builder.s[SettingName.useLandElevationGradient]) {
            builder.style("#ground").colorByElevation("land").lightnessByElevation("land.lightness.elevation");
        } else {
            builder.style("#ground").color("map.land").lightnessByElevation("land.lightness.elevation");
        }

        builder.style("#ground #terracotta").lightnessByElevation("!");
        builder.style("#ground #mud").color("map.mud");
        builder.style("#ice").color("map.ice");
        builder.style("#snow").color("map.snow");

        if (builder.s[SettingName.myceliumColoring]) {
            builder.style("#mycelium").color("map.mycelium");
        }

        builder.style("#water").color("map.water").useBiomeWaterColor();

        builder.style("#water.poison").color("map.water.poison");
        builder.style("#water.magic").color("map.water.magic");

        builder.style("#vegetation").color("map.vegetation");
        builder.style("#leaves, #vine, #bush").color("map.leaves");
        builder.style("#grass").color("map.grass");

        builder.style("#grassblock").useBiomeGrassColor();
        builder.style("#grass").useBiomeGrassColor();


        if (builder.s[SettingName.biomeColoring]) {

            if (builder.s[SettingName.biomeColoringOcean]) {
                builder.style("#water").color("map.water.other");
                builder.style("#water").color("map.water.ocean").biome("minecraft:*ocean*");
                builder.style("#water").color("map.water.warm").biome("minecraft:*warm_*");
                builder.style("#water").color("map.water.lukewarm").biome("minecraft:*lukewarm_*");
                builder.style("#water").color("map.water.cold").biome("minecraft:*cold*, minecraft:*frozen*");
            }

            if (builder.s[SettingName.biomeColoringSavanna]) {
                let minecraftSavanna = "minecraft:*savanna*";
                if (builder.s[SettingName.useLandElevationGradient]) {
                    builder.style("#grassblock").colorByElevation("land.savanna").biome(minecraftSavanna);
                } else {
                    builder.style("#grassblock").color("map.land.savanna").biome(minecraftSavanna);
                }
                builder.style("#leaves, #vine, #bush").color("map.leaves.savanna").biome(minecraftSavanna);
                builder.style("#grass").color("map.grass.savanna").biome(minecraftSavanna);
            }

            if (builder.s[SettingName.biomeColoringTaiga]) {
                if (builder.s[SettingName.useLandElevationGradient]) {
                    builder.style("#grassblock").colorByElevation("land.taiga").biome("minecraft:*taiga*");
                } else {
                    builder.style("#grassblock").color("map.land.taiga").biome("minecraft:*taiga*");
                }
                builder.style("#leaves, #vine, #bush").color("map.leaves.taiga").biome("minecraft:*taiga*");
                builder.style("#grass").color("map.grass.taiga").biome("minecraft:*taiga*");
            }

            if (builder.s[SettingName.biomeColoringDarkForest]) {
                var pattern = builder.isBedrock ? "minecraft:*roofed_forest*" : "minecraft:*dark_forest*";

                if (builder.s[SettingName.useLandElevationGradient]) {
                    builder.style("#grassblock").colorByElevation("land.darkforest").biome(pattern);
                } else {
                    builder.style("#grassblock").color("map.land.darkforest").biome(pattern);
                }
                builder.style("#leaves, #vine, #bush").color("map.leaves.darkforest").biome(pattern);
                builder.style("#grass").color("map.grass.darkforest").biome(pattern);

            }

            if (builder.s[SettingName.biomeColoringSwamp]) {
                if (builder.s[SettingName.useLandElevationGradient]) {
                    builder.style("#grassblock").colorByElevation("land.swamp").biome("minecraft:*swamp*");
                } else {
                    builder.style("#grassblock").color("map.land.swamp").biome("minecraft:*swamp*");
                }

                builder.style("#leaves, #vine, #bush").color("map.leaves.swamp").biome("minecraft:*swamp*");
                builder.style("#grass").color("map.grass.swamp").biome("minecraft:*swamp*");
                builder.style("#water").color("map.water.swamp").biome("minecraft:*swamp*");
            }

            if (builder.s[SettingName.biomeColoringBadlands]) {
                if (builder.isBedrock) {
                    builder.style("#leaves, #vine, #bush").color("map.leaves.badlands").biome("minecraft:*mesa*");
                    builder.style("#grass").color("map.grass.badlands").biome("minecraft:*mesa*");
                } else {
                    builder.style("#leaves, #vine, #bush").color("map.leaves.badlands").biome("minecraft:*badlands*");
                    builder.style("#grass").color("map.grass.badlands").biome("minecraft:*badlands*");
                }
            }
        }

        builder.style("#leaves, #vine, #bush").useBiomeFoliageColor();

        if (builder.s[SettingName.useLandElevationGradient]) {
            builder.style("#ground #rock, #ore, #crystal").colorByElevation("land.rock").lightnessByElevation("land.lightness.elevation");
            builder.style("#ground #salt").colorByElevation("land.salt").lightnessByElevation("land.lightness.elevation");
            builder.style("#ground #sand").colorByElevation("land.sand").lightnessByElevation("land.lightness.elevation");
            //if (builder.isBedrock) {
            //TODO blockstate tags
            //    builder.style("#ground #redsand, sand[sand_type:red]").colorByElevation("land.redsand").lightnessByElevation("land.lightness.elevation");
            //} else {
            builder.style("#ground #redsand").colorByElevation("land.redsand").lightnessByElevation("land.lightness.elevation");
            //}

        } else {
            builder.style("#ground #rock, #ore, #crystal").color("map.rock").lightnessByElevation("land.lightness.elevation");
            builder.style("#ground #salt").color("map.salt").lightnessByElevation("land.lightness.elevation");
            builder.style("#ground #sand").color("map.sand").lightnessByElevation("land.lightness.elevation");
            //TODO blockstate tags
            if (builder.isBedrock) {
                builder.style("#ground #redsand, sand[sand_type:red]").color("map.redsand").lightnessByElevation("land.lightness.elevation");
            } else {
                builder.style("#ground #redsand").color("map.redsand").lightnessByElevation("land.lightness.elevation");
            }
        }

        if (builder.isBedrock) {
            builder.style("minecraft:leaves[old_leaf_type:spruce]").color("map.leaves.spruce").useBiomeFoliageColor(false);
            builder.style("minecraft:leaves[old_leaf_type:birch]").color("map.leaves.birch").useBiomeFoliageColor(false);
            //builder.style("minecraft:leaves[???_leaf_type:cherry]").color("map.leaves.cherry").useBiomeFoliageColor(false);
        } else {
            builder.style("minecraft:spruce_leaves").color("map.leaves.spruce").useBiomeFoliageColor(false);
            builder.style("minecraft:birch_leaves").color("map.leaves.birch").useBiomeFoliageColor(false);
            builder.style("minecraft:cherry_leaves").color("map.leaves.cherry").useBiomeFoliageColor(false);
        }

        builder.style("#seagrass,#kelp").color("map.seagrass");

        builder.style("#podzol").color("map.podzol");
        builder.style("#dirt").color("map.dirt");

        builder.style("#fauna").color("map.cobweb");

        builder.style("#mushroom.brown, #mushroom").color("map.mushroom.brown");
        builder.style("#mushroom.red").color("map.mushroom.red");

        builder.style("#flower").color("map.flower");
        builder.style("#bamboo").color("map.bamboo");

        builder.style("#log").color("map.wood");

        builder.style("#artificial #stone").color("map.stone");
        builder.style("#artificial #rail").color("map.rail");
        builder.style("#artificial #crops").color("map.crops");
        builder.style("#circuit").color("map.circuit");


        builder.style("#light").color("map.light").lightnessByElevation("!");
        builder.style("#fire").color("map.fire").lightnessByElevation("!");
        builder.style("#lava").color("map.lava").lightnessByElevation("!");


        builder.style("minecraft:terracotta, minecraft:hardened_clay").color("map.terracotta"); //.lightnessByElevation("!");

        builder.curve("lightness.elevation.underground")
            .point(builder.altitude.min, -0.35)
            .point(builder.altitude.sea, -0.0)
            .point(builder.altitude.max, +0.10);

        if (builder.s[SettingName.dyeColoring]) {
            builder.style("#white").color("mc.white");
            builder.style("#orange").color("mc.orange");
            builder.style("#magenta").color("mc.magenta");
            builder.style("#light_blue").color("mc.light_blue");
            builder.style("#yellow").color("mc.yellow");
            builder.style("#lime").color("mc.lime");
            builder.style("#pink").color("mc.pink");
            builder.style("#gray").color("mc.gray");
            builder.style("#light_gray").color("mc.light_gray");
            builder.style("#cyan").color("mc.cyan");
            builder.style("#purple").color("mc.purple");
            builder.style("#blue").color("mc.blue");
            builder.style("#brown").color("mc.brown");
            builder.style("#green").color("mc.green");
            builder.style("#red").color("mc.red");
            builder.style("#black").color("mc.black");

        }

        builder.style("#terracotta")
            .adjustSaturation(0.90)
            .adjustLightness(0.75);

        builder.style("#path").color("map.path");

        builder.style("nether_wart_block").color("map.netherwart");
        builder.style("warped_wart_block").color("map.warpedwart");
        builder.style("netherrack").color("map.netherrack");
        builder.style("#soul #ground").color("map.soulsand");
        builder.style("#darkrock, #darkstone").color("map.darkrock");
        builder.style("#gravel").color("map.gravel");
        builder.style("#clay").color("map.clay");
        builder.style("#dripstone").color("map.dripstone");
        builder.style("#magma").color("map.lava").adjustLightness(0.7);

        builder.style("#prismarine").color("map.prismarine");

        builder.style("end_stone").color("map.endstone");
        builder.style("#purpur").color("map.purpur");
        builder.style("#chorus").color("map.chorus");
        builder.style("#sculk").color("map.sculk");

        if (builder.isOverworld) {
            if (builder.s[SettingName.useUnderground]) {
                builder.style("#ground")
                    .undergroundOnly()
                    .color("map.land.underground")
                    .lightnessByElevation("lightness.elevation.underground");
            }
        }

        if (builder.isNether) {
            builder.style("#dirt").color("map.dirt");
        }

    }

    addFlowerStyles(builder) {
        builder.style("#flower.red").color("map.flower.red");
        builder.style("#flower.yellow").color("map.flower.yellow");
        builder.style("#flower.blue").color("map.flower.blue");
        builder.style("#flower.purple").color("map.flower.purple");
        builder.style("#flower.white").color("map.flower.white");
        builder.style("#flower.pink").color("map.flower.pink");
        builder.style("#lilypad").color("map.flower.lilypad");
    }

    addCoralStyles(builder) {
        builder.style("#coral.tube").color("map.coral.tube");
        builder.style("#coral.brain").color("map.coral.brain");
        builder.style("#coral.bubble").color("map.coral.bubble");
        builder.style("#coral.fire").color("map.coral.fire");
        builder.style("#coral.horn").color("map.coral.horn");
        builder.style("#coral.dead").color("map.coral.dead");

        if (builder.isBedrock) {
            //TODO blockstate tags instead of these

            builder.style("coral_fan_hang[coral_hang_type_bit:0]").color("map.coral.tube");
            builder.style("coral_fan_hang[coral_hang_type_bit:1]").color("map.coral.brain");
            builder.style("coral_fan_hang2[coral_hang_type_bit:0]").color("map.coral.bubble");
            builder.style("coral_fan_hang2[coral_hang_type_bit:1]").color("map.coral.fire");
            builder.style("coral_fan_hang3[coral_hang_type_bit:0]").color("map.coral.horn");
            builder.style("coral_fan_hang3[coral_hang_type_bit:1]").color("map.coral.horn");

            builder.style("#corals *[coral_color:blue]").color("map.coral.tube");
            builder.style("#corals *[coral_color:pink]").color("map.coral.brain");
            builder.style("#corals *[coral_color:purple]").color("map.coral.bubble");
            builder.style("#corals *[coral_color:red]").color("map.coral.fire");
            builder.style("#corals *[coral_color:yellow]").color("map.coral.horn");
            builder.style("#corals *[dead_bit:1]").color("map.coral.dead");


        }
    }

    addWoodStyles(builder) {
        builder.style("#wooden #artificial").color("map.wood");

        builder.style("#acacia #artificial").color("map.wood.acacia");
        builder.style("#birch #artificial").color("map.wood.birch");
        builder.style("#darkoak #artificial").color("map.wood.dark_oak");
        builder.style("#jungle #artificial").color("map.wood.jungle");
        builder.style("#oak #artificial").color("map.wood.oak");
        builder.style("#spruce #artificial").color("map.wood.spruce");
        builder.style("#crimson #artificial").color("map.wood.crimson");
        builder.style("#warped #artificial").color("map.wood.warped");
        builder.style("#mangrove #artificial").color("map.wood.mangrove");
        builder.style("#bamboo #artificial").color("map.wood.bamboo");
        builder.style("#cherry #artificial").color("map.wood.cherry");
    }

}