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

var STYLESHEET = {
    name: "uNmINeD - Default map style",
    settings: function (s) {
        s.category("Default biome styling", c => {
            c.bool(SETTING.biomeColoring, "Enabled", true);
            c.bool(SETTING.biomeColoringOcean, "Ocean", true);
            c.bool(SETTING.biomeColoringBadlands, "Badlands", true);
            c.bool(SETTING.biomeColoringDarkForest, "Dark forest", true);
            c.bool(SETTING.biomeColoringSavanna, "Savanna", true);
            c.bool(SETTING.biomeColoringSwamp, "Swamp", true);
            c.bool(SETTING.biomeColoringTaiga, "Taiga", true);
        });
        s.category("Colors", c => {
            c.bool(SETTING.coralColoring, "Coral", true);
            c.bool(SETTING.dyeColoring, "Dyed blocks", true);
            c.bool(SETTING.flowerColoring, "Flowers", true);
            c.bool(SETTING.myceliumColoring, "Mycelium", true);
            c.bool(SETTING.oreColoring, "Ores", true);
            c.bool(SETTING.woodColoring, "Wooden structures", true);
        });
        s.category("Features", c => {
            c.bool(SETTING.useLandElevationGradient, "Cartographic elevation gradient", true);
            c.bool(SETTING.useUnderground, "Different underground style", true);
        });
        s.category("Experimental", c => {
            c.bool(SETTING.vanillaBiomeTints, "Vanilla biome tints", false);
        });
    },
    main: function (b) {

        addMinecraftColors(b);
        addTerrainColors(b);

        addDefaultStyles(b);

        if (b.s[SETTING.flowerColoring]) addFlowerStyles(b);
        if (b.s[SETTING.coralColoring]) addCoralStyles(b);
        if (b.s[SETTING.oreColoring]) addOreStyles(b);
        if (b.s[SETTING.woodColoring]) addWoodStyles(b);

        // add your styles here



        /*
        Examples:
        
        RGB color:
        
            b.style("grass_block").color("#ff0000");

        HSL color (0..360, 0..100, 0..100):
        
            b.style("grass_block").color(240, 70, 40);

        Predefined map color:
 
            b.style("lava").color("map.water");

        Tag instead of block name:

            b.style("#leaves").color("#ff0000");    

        */


    }
};

var SETTING = {
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
    vanillaBiomeTints: "vanillaBiomeTints"
};

// Colors for colored blocks (wool, concrete, carpet, etc.)
function addMinecraftColors(b) {
    b.color("mc.white", 0, 0, 90);
    b.color("mc.orange", 24, 80, 60);
    b.color("mc.magenta", 300, 70, 70);
    b.color("mc.light_blue", 204, 70, 70);
    b.color("mc.yellow", 48, 70, 70);
    b.color("mc.lime", 96, 80, 60);
    b.color("mc.pink", 336, 70, 70);
    b.color("mc.gray", 0, 0, 35);
    b.color("mc.light_gray", 0, 0, 50);
    b.color("mc.cyan", 180, 70, 40);
    b.color("mc.purple", 276, 70, 40);
    b.color("mc.blue", 240, 70, 40);
    b.color("mc.brown", 36, 70, 40);
    b.color("mc.green", 96, 70, 40);
    b.color("mc.red", 0, 70, 40);
    b.color("mc.black", 0, 0, 10);
}

// Colors for terrain
function addTerrainColors(b) {
    b.color("map.ice", 204, 50, 70);
    b.color("map.snow", 0, 0, 90);
    b.color("map.dirt", 48, 40, 40);
    b.color("map.lava", 18, 90, 50);

    b.color("map.water", 216, 90, 40);

    var waterSaturation = 80;
    var waterLightness = 50;

    b.color("map.water.swamp", 135, 15, waterLightness * 0.70);
    b.color("map.water.warm", 210, waterSaturation, waterLightness);
    b.color("map.water.lukewarm", 213, waterSaturation, waterLightness);
    b.color("map.water.other", 216, waterSaturation, waterLightness);
    b.color("map.water.ocean", 222, waterSaturation, waterLightness);
    b.color("map.water.cold", 222, waterSaturation + 12, waterLightness - 6);

    /*
    b.color("map.water.other", 210, 90, 40);
    b.color("map.water.ocean", 216, 90, 40);
    b.color("map.water.warm", 207, 95, 40);
    b.color("map.water.cold", 222, 90, 40);
    b.color("map.water.swamp", 135, 15, 40);
    */

    b.color("map.water.magic", 180, 75, 50);
    b.color("map.water.poison", 168, 70, 50);

    b.color("map.sand", 48, 35, 70);
    b.color("map.salt", 48, 10, 90);
    b.color("map.redsand", 24, 70, 45);
    b.color("map.terracotta", 18, 45, 60);
    b.color("map.gravel", 15, 5, 70);
    b.color("map.clay", 219, 10, 60);
    b.color("map.podzol", 36, 50, 40);
    b.color("map.darkrock", 0, 0, 30);

    b.color("map.land", 78, 95, 40);
    b.color("map.land.savanna", 54, 35, 50);
    b.color("map.land.taiga", 114, 25, 50);
    b.color("map.land.darkforest", 96, 40, 30);
    b.color("map.land.swamp", 66, 30, 30);

    b.color("map.vegetation", 75, 60, 40);

    b.color("map.grass", 84, 90, 35);
    b.color("map.grass.savanna", 54, 35, 50);
    b.color("map.grass.taiga", 114, 35, 40);
    b.color("map.grass.darkforest", 96, 40, 40);
    b.color("map.grass.swamp", 66, 40, 30);
    b.color("map.grass.badlands", 42, 35, 40);

    var leavesLightness = 26;
    b.color("map.leaves", 102, 80, leavesLightness);
    b.color("map.leaves.savanna", 54, 40, leavesLightness);
    b.color("map.leaves.taiga", 120, 35, leavesLightness);
    b.color("map.leaves.darkforest", 102, 60, leavesLightness);
    b.color("map.leaves.swamp", 66, 50, leavesLightness * 0.65);
    b.color("map.leaves.badlands", 42, 50, leavesLightness);

    b.color("map.leaves.birch", 90, 70, leavesLightness);
    b.color("map.leaves.spruce", 120, 40, leavesLightness);
    b.color("map.bamboo", 84, 90, 50);

    b.color("map.flower", 96, 60, 60);

    b.color("map.land.underground", 36, 60, 50);

    b.color("map.flower.red", 0, 90, 60);
    b.color("map.flower.yellow", 54, 90, 60);
    b.color("map.flower.blue", 204, 90, 60);
    b.color("map.flower.purple", 282, 90, 60);
    b.color("map.flower.white", 0, 0, 95);
    b.color("map.flower.lilypad", 132, 60, 30);

    b.color("map.coral.tube", 228, 60, 50);
    b.color("map.coral.brain", 330, 60, 50);
    b.color("map.coral.bubble", 300, 60, 50);
    b.color("map.coral.fire", 0, 60, 50);
    b.color("map.coral.horn", 60, 60, 50);
    b.color("map.coral.dead", 30, 6, 60);

    b.color("map.endstone", 63, 35, 70);
    b.color("map.purpur", 300, 20, 45);
    b.color("map.chorus", 300, 25, 30);

    b.color("map.netherrack", 0, 60, 25);
    b.color("map.soulsand", 24, 30, 25);
    b.color("map.netherwart", 0, 70, 40);
    b.color("map.warpedwart", 180, 70, 30);

    b.color("map.mountain", 36, 90, 30);
    b.color("map.mountain.sand", 48, 40, 50);
    //b.color("map.mountain.sand", 48, 40, 70);
    b.color("map.mountain.salt", 48, 10, 80);
    //b.color("map.mountain.redsand", 36, 50, 70);
    b.color("map.mountain.redsand", 24, 70, 45);
    b.color("map.mountain.rock", 0, 0, 60);
    b.color("map.mountain.savanna", 36, 90, 30);
    b.color("map.mountain.taiga", 36, 90, 30);
    b.color("map.mountain.darkforest", 36, 90, 30);
    b.color("map.mountain.swamp", 36, 90, 30);

    b.color("map.mud", 36, 60, 25);
    b.color("map.path", 36, 50, 30);

    b.color("map.artificial", 0, 0, 85);
    b.color("map.light", 54, 100, 60);
    b.color("map.rail", 42, 100, 50);
    b.color("map.fire", 24, 100, 60);
    b.color("map.circuit", 0, 70, 50);
    b.color("map.cobweb", 0, 0, 80);

    b.color("map.wood", 42, 50, 50);

    b.color("map.wood.acacia", 18, 55, 40);
    b.color("map.wood.birch" ,42, 24, 50);
    b.color("map.wood.dark_oak", 30, 55, 25);
    b.color("map.wood.jungle", 24, 38, 40);
    b.color("map.wood.oak", 36, 40, 50);
    b.color("map.wood.spruce", 30, 45, 30);
    b.color("map.wood.crimson", 333, 35, 30);
    b.color("map.wood.warped", 174, 55, 30);

    b.color("map.stone", 0, 0, 70);
    b.color("map.rock", 0, 0, 70);
    b.color("map.prismarine", 172, 35, 50);
    b.color("map.dripstone", 30, 20, 50);
    b.color("map.crops", 42, 60, 40);

    b.color("map.mycelium", 282, 20, 35);
    b.color("map.mushroom.red", 0, 70, 30);
    b.color("map.mushroom.brown", 48, 60, 30);

    b.gradient("land")
        .step(b.altitude.sea, "map.land")
        .step(b.altitude.mountain, "map.mountain");

    b.gradient("land.sand")
        .step(b.altitude.sea, "map.sand")
        .step(b.altitude.mountain, "map.mountain.sand");

    b.gradient("land.salt")
        .step(b.altitude.sea, "map.salt")
        .step(b.altitude.mountain, "map.mountain.salt");

    b.gradient("land.redsand")
        .step(b.altitude.sea, "map.redsand")
        .step(b.altitude.mountain, "map.mountain.redsand");

    b.gradient("land.rock")
        .step(b.altitude.sea, "map.rock")
        .step(b.altitude.mountain, "map.mountain.rock");

    b.gradient("land.savanna")
        .step(b.altitude.sea, "map.land.savanna")
        .step(b.altitude.mountain, "map.mountain.savanna");

    b.gradient("land.taiga")
        .step(b.altitude.sea, "map.land.taiga")
        .step(b.altitude.mountain, "map.mountain.taiga");

    b.gradient("land.darkforest")
        .step(b.altitude.sea, "map.land.darkforest")
        .step(b.altitude.mountain, "map.mountain.darkforest");

    b.gradient("land.swamp")
        .step(b.altitude.sea, "map.land.swamp")
        .step(b.altitude.mountain, "map.mountain.swamp");

    b.curve("land.lightness.elevation")
        .point(b.altitude.min, -0.125)
        .point(b.altitude.sea - 32, -0.075)
        .point(b.altitude.sea, -0.0)
        .point(b.altitude.mountain, -0.075)
        .point(b.altitude.max, -0.125);
}


function addOreStyles(b) {
    b.style("#coal_ore").color(0, 0, 70);
    b.style("#copper_ore").color(24, 60, 40);
    b.style("#diamond_ore").color(180, 60, 40);
    b.style("#emerald_ore").color(150, 60, 40);
    b.style("#gold_ore").color(48, 60, 40);
    b.style("#iron_ore").color(36, 40, 40);
    b.style("#lapis_ore").color(240, 40, 40);
    b.style("#redstone_ore").color(0, 40, 40);
    b.style("#nether_gold_ore").color(48, 80, 60);
    b.style("#nether_quartz_ore").color(0, 0, 80);
}

function addDefaultStyles(b) {
    b.style("#artificial").color("map.artificial");
    b.style("#light").color("map.light");

    if (b.s[SETTING.useLandElevationGradient]) {
        b.style("#ground").colorByElevation("land").lightnessByElevation("land.lightness.elevation");
    } else {
        b.style("#ground").color("map.land").lightnessByElevation("land.lightness.elevation");
    }

    b.style("#ground #terracotta").lightnessByElevation("!");
    b.style("#ground #mud").color("map.mud");
    b.style("#ice").color("map.ice");
    b.style("#snow").color("map.snow");

    if (b.s[SETTING.myceliumColoring]) {
        b.style("#mycelium").color("map.mycelium");
    }

    b.style("#water").color("map.water").useBiomeWaterColor();

    b.style("#water.poison").color("map.water.poison");
    b.style("#water.magic").color("map.water.magic");

    b.style("#vegetation").color("map.vegetation");
    b.style("#leaves, #vine, #bush").color("map.leaves");
    b.style("#grass").color("map.grass");

    b.style("#grassblock").useBiomeGrassColor();
    b.style("#grass").useBiomeGrassColor();


    if (b.s[SETTING.biomeColoring]) {

        if (b.s[SETTING.biomeColoringOcean]) {
            b.style("#water").color("map.water.other");
            b.style("#water").color("map.water.ocean").biome("minecraft:*ocean*");
            b.style("#water").color("map.water.warm").biome("minecraft:*warm_*");
            b.style("#water").color("map.water.lukewarm").biome("minecraft:*lukewarm_*");
            b.style("#water").color("map.water.cold").biome("minecraft:*cold*, minecraft:*frozen*");
        }

        if (b.s[SETTING.biomeColoringSavanna]) {
            let minecraftSavanna = "minecraft:*savanna*";
            if (b.s[SETTING.useLandElevationGradient]) {
                b.style("#grassblock").colorByElevation("land.savanna").biome(minecraftSavanna);
            } else {
                b.style("#grassblock").color("map.land.savanna").biome(minecraftSavanna);
            }
            b.style("#leaves, #vine, #bush").color("map.leaves.savanna").biome(minecraftSavanna);
            b.style("#grass").color("map.grass.savanna").biome(minecraftSavanna);
        }

        if (b.s[SETTING.biomeColoringTaiga]) {
            if (b.s[SETTING.useLandElevationGradient]) {
                b.style("#grassblock").colorByElevation("land.taiga").biome("minecraft:*taiga*");
            } else {
                b.style("#grassblock").color("map.land.taiga").biome("minecraft:*taiga*");
            }
            b.style("#leaves, #vine, #bush").color("map.leaves.taiga").biome("minecraft:*taiga*");
            b.style("#grass").color("map.grass.taiga").biome("minecraft:*taiga*");
        }

        if (b.s[SETTING.biomeColoringDarkForest]) {
            var pattern = b.isBedrock ? "minecraft:*roofed_forest*" : "minecraft:*dark_forest*";

            if (b.s[SETTING.useLandElevationGradient]) {
                b.style("#grassblock").colorByElevation("land.darkforest").biome(pattern);
            } else {
                b.style("#grassblock").color("map.land.darkforest").biome(pattern);
            }
            b.style("#leaves, #vine, #bush").color("map.leaves.darkforest").biome(pattern);
            b.style("#grass").color("map.grass.darkforest").biome(pattern);

        }

        if (b.s[SETTING.biomeColoringSwamp]) {
            if (b.s[SETTING.useLandElevationGradient]) {
                b.style("#grassblock").colorByElevation("land.swamp").biome("minecraft:*swamp*");
            } else {
                b.style("#grassblock").color("map.land.swamp").biome("minecraft:*swamp*");
            }

            b.style("#leaves, #vine, #bush").color("map.leaves.swamp").biome("minecraft:*swamp*");
            b.style("#grass").color("map.grass.swamp").biome("minecraft:*swamp*");
            b.style("#water").color("map.water.swamp").biome("minecraft:*swamp*");
        }

        if (b.s[SETTING.biomeColoringBadlands]) {
            if (b.isBedrock) {
                b.style("#leaves, #vine, #bush").color("map.leaves.badlands").biome("minecraft:*mesa*");
                b.style("#grass").color("map.grass.badlands").biome("minecraft:*mesa*");
            } else {
                b.style("#leaves, #vine, #bush").color("map.leaves.badlands").biome("minecraft:*badlands*");
                b.style("#grass").color("map.grass.badlands").biome("minecraft:*badlands*");
            }
        }
    }

    b.style("#leaves, #vine, #bush").useBiomeFoliageColor();

    if (b.s[SETTING.useLandElevationGradient]) {
        b.style("#ground #rock, #ore, #crystal").colorByElevation("land.rock").lightnessByElevation("land.lightness.elevation");
        b.style("#ground #salt").colorByElevation("land.salt").lightnessByElevation("land.lightness.elevation");
        b.style("#ground #sand").colorByElevation("land.sand").lightnessByElevation("land.lightness.elevation");
        b.style("#ground #redsand").colorByElevation("land.redsand").lightnessByElevation("land.lightness.elevation");

    } else {
        b.style("#ground #rock, #ore, #crystal").color("map.rock").lightnessByElevation("land.lightness.elevation");
        b.style("#ground #salt").color("map.salt").lightnessByElevation("land.lightness.elevation");
        b.style("#ground #sand").color("map.sand").lightnessByElevation("land.lightness.elevation");
        b.style("#ground #redsand").color("map.redsand").lightnessByElevation("land.lightness.elevation");
    }

    if (b.isBedrock) {
        b.style("minecraft:leaves[old_leaf_type:spruce]").color("map.leaves.spruce").useBiomeFoliageColor(false);
        b.style("minecraft:leaves[old_leaf_type:birch]").color("map.leaves.birch").useBiomeFoliageColor(false);
    } else {
        b.style("minecraft:spruce_leaves").color("map.leaves.spruce").useBiomeFoliageColor(false);
        b.style("minecraft:birch_leaves").color("map.leaves.birch").useBiomeFoliageColor(false);
    }

    b.style("#seagrass,#kelp").color("map.seagrass");

    b.style("#podzol").color("map.podzol");
    b.style("#dirt").color("map.dirt");

    b.style("#fauna").color("map.cobweb");

    b.style("#mushroom.brown, #mushroom").color("map.mushroom.brown");
    b.style("#mushroom.red").color("map.mushroom.red");

    b.style("#flower").color("map.flower");
    b.style("#bamboo").color("map.bamboo");

    b.style("#log").color("map.wood");

    b.style("#artificial #stone").color("map.stone");
    b.style("#artificial #rail").color("map.rail");
    b.style("#artificial #crops").color("map.crops");
    b.style("#circuit").color("map.circuit");


    b.style("#light").color("map.light").lightnessByElevation("!");
    b.style("#fire").color("map.fire").lightnessByElevation("!");
    b.style("#lava").color("map.lava").lightnessByElevation("!");


    b.style("minecraft:terracotta, minecraft:hardened_clay").color("map.terracotta"); //.lightnessByElevation("!");

    b.curve("lightness.elevation.underground")
        .point(b.altitude.min, -0.35)
        .point(b.altitude.sea, -0.0)
        .point(b.altitude.max, +0.10);

    if (b.s[SETTING.dyeColoring]) {
        b.style("#white").color("mc.white");
        b.style("#orange").color("mc.orange");
        b.style("#magenta").color("mc.magenta");
        b.style("#light_blue").color("mc.light_blue");
        b.style("#yellow").color("mc.yellow");
        b.style("#lime").color("mc.lime");
        b.style("#pink").color("mc.pink");
        b.style("#gray").color("mc.gray");
        b.style("#light_gray").color("mc.light_gray");
        b.style("#cyan").color("mc.cyan");
        b.style("#purple").color("mc.purple");
        b.style("#blue").color("mc.blue");
        b.style("#brown").color("mc.brown");
        b.style("#green").color("mc.green");
        b.style("#red").color("mc.red");
        b.style("#black").color("mc.black");
    }

    if (b.isBedrock) {
        b.style("*:*[color:white]").color("mc.white");
        b.style("*:*[color:orange]").color("mc.orange");
        b.style("*:*[color:magenta]").color("mc.magenta");
        b.style("*:*[color:light_blue]").color("mc.light_blue");
        b.style("*:*[color:yellow]").color("mc.yellow");
        b.style("*:*[color:lime]").color("mc.lime");
        b.style("*:*[color:pink]").color("mc.pink");
        b.style("*:*[color:gray]").color("mc.gray");
        b.style("*:*[color:silver]").color("mc.light_gray");
        b.style("*:*[color:cyan]").color("mc.cyan");
        b.style("*:*[color:purple]").color("mc.purple");
        b.style("*:*[color:blue]").color("mc.blue");
        b.style("*:*[color:brown]").color("mc.brown");
        b.style("*:*[color:green]").color("mc.green");
        b.style("*:*[color:red]").color("mc.red");
        b.style("*:*[color:black]").color("mc.black");
    }

    b.style("#terracotta")
        .adjustSaturation(0.90)
        .adjustLightness(0.75);

    b.style("#path").color("map.path");

    b.style("nether_wart_block").color("map.netherwart");
    b.style("warped_wart_block").color("map.warpedwart");
    b.style("netherrack").color("map.netherrack");
    b.style("#soul #ground").color("map.soulsand");
    b.style("#darkrock, #darkstone").color("map.darkrock");
    b.style("#gravel").color("map.gravel");
    b.style("#clay").color("map.clay");
    b.style("#dripstone").color("map.dripstone");
    b.style("#magma").color("map.lava").adjustLightness(0.7);

    b.style("#prismarine").color("map.prismarine");

    b.style("end_stone").color("map.endstone");
    b.style("#purpur").color("map.purpur");
    b.style("#chorus").color("map.chorus");

    if (b.isOverworld) {
        if (b.s[SETTING.useUnderground]) {
            b.style("#ground")
                .undergroundOnly()
                .color("map.land.underground")
                .lightnessByElevation("lightness.elevation.underground");
        }
    }

    if (b.isNether) {
        b.style("#dirt").color("map.dirt");
    }

}

function addFlowerStyles(b) {
    b.style("#flower.red").color("map.flower.red");
    b.style("#flower.yellow").color("map.flower.yellow");
    b.style("#flower.blue").color("map.flower.blue");
    b.style("#flower.purple").color("map.flower.purple");
    b.style("#flower.white").color("map.flower.white");
    b.style("#lilypad").color("map.flower.lilypad");
}

function addCoralStyles(b) {
    b.style("#coral.tube").color("map.coral.tube");
    b.style("#coral.brain").color("map.coral.brain");
    b.style("#coral.bubble").color("map.coral.bubble");
    b.style("#coral.fire").color("map.coral.fire");
    b.style("#coral.horn").color("map.coral.horn");
    b.style("#coral.dead").color("map.coral.dead");

    if (b.isBedrock) {
        //TODO blockstate tags instead of these

        b.style("coral_fan_hang[coral_hang_type_bit:0]").color("map.coral.tube");
        b.style("coral_fan_hang[coral_hang_type_bit:1]").color("map.coral.brain");
        b.style("coral_fan_hang2[coral_hang_type_bit:0]").color("map.coral.bubble");
        b.style("coral_fan_hang2[coral_hang_type_bit:1]").color("map.coral.fire");
        b.style("coral_fan_hang3[coral_hang_type_bit:0]").color("map.coral.horn");
        b.style("coral_fan_hang3[coral_hang_type_bit:1]").color("map.coral.horn");

        b.style("#corals *[coral_color:blue]").color("map.coral.tube");
        b.style("#corals *[coral_color:pink]").color("map.coral.brain");
        b.style("#corals *[coral_color:purple]").color("map.coral.bubble");
        b.style("#corals *[coral_color:red]").color("map.coral.fire");
        b.style("#corals *[coral_color:yellow]").color("map.coral.horn");
        b.style("#corals *[dead_bit:1]").color("map.coral.dead");

        
    }
}

function addWoodStyles(b) {
    b.style("#wooden #artificial").color("map.wood");

    b.style("#acacia #artificial").color("map.wood.acacia");
    b.style("#birch #artificial").color("map.wood.birch");
    b.style("#darkoak #artificial").color("map.wood.dark_oak");
    b.style("#jungle #artificial").color("map.wood.jungle");
    b.style("#oak #artificial").color("map.wood.oak");
    b.style("#spruce #artificial").color("map.wood.spruce");
    b.style("#crimson #artificial").color("map.wood.crimson");
    b.style("#warped #artificial").color("map.wood.warped");
}