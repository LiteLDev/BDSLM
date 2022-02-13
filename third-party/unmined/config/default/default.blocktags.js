/**
 *
 * General block tags
 * ==================
 *
 *
 * This script assigns tags to vanilla blocks.
 * It sets up many modded blocks too, like all blocks with name ending "leaves".
 * The default stylesheet uses these tags to determine block styles.
 *
 *
 * No detailed documentation here as things are going to change soon.
 *
 *
 *
 * Notes
 * =====
 *
 * 
 * This is a JavaScript file interpreted by Jint 3.x.
 * See https://github.com/sebastienros/jint for supported language features.
 *
 * 
 * 1. Boolean operators
 * --------------------
 * 
 *      Comma (",") between values means logical OR
 *      Space (" ") between values means logical AND
 *      Exclamation mark ("!") before a value means logical NOT
 *
 *      Examples:
 *
 *          "lava, water" means "lava" or "water" (matches minecraft:lava and minecraft:water)
 *          "*sand !red_sand" means "*sand*" and not "red_sand" (matches any vanilla block name ends with "sand" except "red_sand")
 *
 * 
 * 2. Double asterix
 * -----------------
 *
 *      "**x" is a shortcut for "*:x, *:*_x"
 *
 *      Example:
 *
 *          "**lava" is interpreted as "*:lava, *:*_lava", so it matches "lava" and "flowing_lava", but not "baklava".
 *
 *
 *
 *
 */


var STYLESHEET = {
    name: "uNmINeD - General block tags",
    main: function (b) {
        addAir(b);

        addTerrain(b);
        addFormations(b);
        addWeather(b);
        addFlora(b);
        addFauna(b);

        artificial.addAll(b);
        
        addCrafting(b);
        addGlasses(b);
        addLights(b);
        addCircuit(b);
        addOtherArtificial(b);
        addUnsortedArtificial(b);

        addColors(b);
        addTechnical(b);
    }
};


function addAir(b) {
    b.tag("#air").apply("*:air, *:*_air");
}

function addTerrain(b) {
    b.tag("#terrain, #ground").apply(t => {

        t.tag("#mycelium").apply("mycelium");
        t.tag("#dirt").apply("**dirt");

        if (b.isBedrock) {
            t.tag("#grassblock").apply("grass");
        } else {
            t.tag("#grassblock").apply("grass_block");
        }


        t.tag("#soil").apply("#mycelium, #dirt, **podzol, **soil, harddirt");
        t.tag("#podzol").apply("**podzol");

        t.tag("#ore").apply("*_ore, ancient_debris");

        t.tag("#coal_ore").apply("coal_ore, deepslate_coal_ore");
        t.tag("#copper_ore").apply("copper_ore, deepslate_copper_ore");
        t.tag("#diamond_ore").apply("diamond_ore, deepslate_diamond_ore");
        t.tag("#emerald_ore").apply("emerald_ore, deepslate_emerald_ore");
        t.tag("#gold_ore").apply("gold_ore, deepslate_gold_ore");
        t.tag("#iron_ore").apply("iron_ore, deepslate_iron_ore");
        t.tag("#lapis_ore").apply("lapis_ore, deepslate_lapis_ore");
        t.tag("#redstone_ore").apply("redstone_ore, deepslate_redstone_ore");
        t.tag("#nether_gold_ore").apply("nether_gold_ore");
        t.tag("#nether_quartz_ore").apply("nether_quartz_ore");

        t.tag("#rock")
            .apply(
                "andesite, diorite, calcite, granite, tuff, stone, grimstone, netherrack, *:*_nylium, end_stone, *:cragrock,*:cragRock, *:limestone");
        t.tag("#rock").apply("infested_stone, infested_deepslate");
        t.tag("#rock").apply("*:marble");
        t.tag("#darkrock").apply("bedrock, *:basalt, deepslate, smooth_basalt, obsidian, crying_obsidian");
        t.tag("#rock").apply("#darkrock");


        t.tag("#gravel").apply("gravel");
        t.tag("#mud").apply("*:mud");
        t.tag("#clay").apply("clay");
        t.tag("#magma").apply("magma, magma_block");

        t.tag("#soulsand").apply("soul_sand");
        t.tag("#soul").apply("soul_soil, #soulsand");
        t.tag("#sand").apply("**sand !red_sand !soul_sand, sandstone, hardsand");
        t.tag("#redsand").apply("red_sand, red_sandstone");
        t.tag("#rock").apply("sandstone, red_sandstone");
        t.tag("#sands").apply("#soulsand, #redsand, #sand");

        t.tag("#salt").apply("*:dried_salt");

        t.tag("#path").apply("grass_path, dirt_path");

        t.tag("#terracotta").apply("**terracotta, hardened_clay");
    }).natural().blocking();
}

function addFormations(b) {
    b.tag("#dripstone,#ground").apply("dripstone_block, pointed_dripstone").natural().nonblocking();

    b.tag("#amethyst").apply("*_amethyst_bud, amethyst_cluster").natural().nonblocking();
    b.tag("#amethyst, #ground").apply("amethyst_block, budding_amethyst").natural().blocking();
    b.tag("#crystal").apply("#amethyst");
}

function addWeather(b) {
    b.tag("#water").apply([
        "**water",
        "*:bubble_column"
    ]).natural().water();;

    b.tag("#water.poison").apply("*:poison").natural().fluid();
    b.tag("#lava").apply("**lava").natural().fluid();
    b.tag("#ice").apply("**ice").natural().blocking();
    b.tag("#snow").apply("**snow, **snow_layer").nonblocking().natural();;
    b.tag("#snow").apply("**snow_block").natural().blocking();
    b.tag("#fire").apply("**fire").natural().nonblocking();
}

function addFlora(b) {

    // blocking
    b.tag("#flora").natural().blocking().apply(b => {
        b.tag("#leaves").apply("**leaves,**leaves?,**leaves_?,*:*Leaves,*:*Leaves?,**foliage,*:leaves*");
        b.tag("#log").apply("**log,**log?,**logs?");
        b.tag("#mushroom.brown").apply("brown_mushroom_block");
        b.tag("#mushroom.red").apply("red_mushroom_block");
        b.tag("#mushroom").apply("#mushroom.brown, #mushroom.red");
        b.tag("#mushroom").apply("shroomlight");
        b.tag("#bush").apply("azalea,flowering_azalea,big_dripleaf,moss_block");
        b.tag("#bamboo").apply("**bamboo");
    });


    b.tag("#flora").natural().blocking().apply("*:cactus, *:sugar_cane, reeds, *:chorus_plant, *:reed");

    b.tag("#chorus").apply(["*:chorus_plant"]);

    // non-blocking
    b.tag("#flora").natural().nonblocking().apply(t => {

        t.tag("#sapling").apply("**sapling");
        t.tag("#stem").apply("**stem");
        t.tag("#sprout").apply("**sprout, **sprouts");
        t.tag("#flower").apply([
            "**flower,**flowers,**flowers?,**flower_?,**flower?,*:plant_?,*:plant?,*:moss,*:double_plant, **allium, **bluet, **orchid, **dandelion, **lavender, **lilac, lily_of_the_valley, **lily_pad, **hibiscus, **tulip, **lily, **daisy, **peony, **poppy, **rose, **violet, **waterlily",
            "spore_blossom, *_flowered"]);

        t.tag("#flower.red").apply("*:red_* #flower, poppy, rose_bush");
        t.tag("#flower.yellow").apply("*:yellow_* #flower, dandelion, sunflower");
        t.tag("#flower.blue").apply("*:blue_* #flower, cornflower");
        t.tag("#flower.purple").apply("*:purple_* #flower, lilac, peony, allium");
        t.tag("#flower.white").apply("*:white_* #flower, oxeye_daisy, chorus_flower");

        t.tag("#lilypad").apply("lily_pad,waterlily");


        t.tag("#mushroom").apply("*:*_fungus, **mushroom, **mushroom?");
        t.tag("#grass").apply("**roots, **wart, *:barley, **bush, moss_carpet, deadbush");

        t.tag("#lichen").apply("**lichen");

        if (b.isBedrock) {
            t.tag("#grass,-#flower").apply("tallgrass, double_plant");
        } else {
            t.tag("#grass").apply("**grass,tallgrass,double_tallgrass");
        }

        t.tag("#grass").apply("**Grass, small_dripleaf, **fern");
        t.tag("#seagrass").apply("**seagrass").waterlogged();
        t.tag("#kelp").apply("**kelp, **kelp_plant").waterlogged();
        t.tag("#vine").apply("**vine, **vines, *_vines_*, **vines_plant, *:ivy, *:treemoss, *:willow");

        t.tag("#fruit").apply("cocoa, melon, pumpkin");
    });

    b.tag("#flat").apply("#grass,#seagrass,#kelp,#flower,#sapling,#stem,#sprout");

    // alias
    b.tag("#vegetation").apply("#flora");
}

function addFauna(b) {
    if (b.isBedrock) {
        b.tag("#corals").natural().nonblocking().apply(b => {
            b.tag("#coral").apply("coral");
            b.tag("#coral_fan").apply("coral_fan, coral_fan_dead");
            b.tag("#coral_wall_fan").apply("coral_fan_hang, coral_fan_hang?");
            b.tag("#coral_block").apply("coral_block");
        });

        /* TODO blockstate tags
        b.tag("#coral.tube").apply("#corals *[coral_color:blue]");
        b.tag("#coral.brain").apply("#corals *[coral_color:pink]");
        b.tag("#coral.bubble").apply("#corals *[coral_color:purple]");
        b.tag("#coral.fire").apply("#corals *[coral_color:fire]");
        b.tag("#coral.horn").apply("#corals *[coral_color:horn]");
        b.tag("#coral.dead").apply("#corals *[dead_bit:1]");
        */
    } else {
        b.tag("#corals").natural().nonblocking().apply(b => {
            b.tag("#coral").apply("**coral");
            b.tag("#coral_fan").apply("**coral_fan");
            b.tag("#coral_wall_fan").apply("**coral_wall_fan");
            b.tag("#coral_block").apply("**coral_block");
        });

        b.tag("#coral.tube").apply("#corals *:*tube*");
        b.tag("#coral.brain").apply("#corals *:*brain*");
        b.tag("#coral.bubble").apply("#corals *:*bubble*");
        b.tag("#coral.fire").apply("#corals *:*fire*");
        b.tag("#coral.horn").apply("#corals *:*horn*");
        b.tag("#coral.dead").apply("#corals *:*dead*");

    }

    b.tag("#fauna").apply("*:cobweb, *:web, *:*_nest, *:*_egg, sea_pickle, slime").natural().nonblocking();
    b.tag("#fauna").apply("#corals");
}

class artificial {

    static addAll(b) {
        this.addProducts(b);
    }

    static addProducts(b) {

        // Product categories

        b.tag("#blocking, #artificial, -#natural").apply([
            b.tag("#door").apply("*:**door"),
            b.tag("#fence").apply("**fence"),
            b.tag("#fencegate").apply("**fence_gate"),
            b.tag("#planks").apply("**planks"),
            b.tag("#slab").apply("**slab, **slab?"),
            b.tag("#stairs").apply("**stairs"),
            b.tag("#pillar").apply("**pillar"),
            b.tag("#bricks").apply("**bricks"),
            b.tag("#wall").apply("**wall"),
            b.tag("#wood").apply("**wood, **hyphae")
        ]);

        b.tag("#nonblocking, #artificial, -#natural").apply([
            b.tag("#button").apply("**button"),
            b.tag("#pressureplate").apply("**pressure_plate"),
            b.tag("#sign").apply("**sign, chalkboard"),
            b.tag("#trapdoor").apply("**trapdoor"),
            b.tag("#wallsign").apply("**wall_sign"),
            b.tag("#banner").apply("**banner"),
            b.tag("#wallbanner").apply("**wall_banner")
        ]);

        // Wooden product materials

        b.tag("#wooden").apply([
            b.tag("#acacia").apply("*:acacia_* !#natural"),
            b.tag("#birch").apply("*:birch_* !#natural"),
            b.tag("#darkoak").apply("*:dark_oak_* !#natural"),
            b.tag("#jungle").apply("*:jungle_* !#natural"),
            b.tag("#oak").apply("*:oak_* !#natural"),
            b.tag("#spruce").apply("*:spruce_* !#natural"),
            b.tag("#crimson").apply("*:crimson_* !#natural"),
            b.tag("#warped").apply("*:warped_* !#natural")
        ]);

        // todo bedrock
        b.tag("#wooden").apply("**wooden_*");
        b.tag("#wooden").apply("*:double_wooden_*");
        b.tag("#wooden").apply("planks, trapdoor, fence");

        b.tag("#wooden").apply("*:*_wood !#natural, petrified_oak_slab");
        
        b.tag("#artificial,-#natural").apply("#wooden");

        // Metal product materials

        b.tag("#metal, #artificial, -#natural").apply([
            b.tag("#cutcopper").apply("*:cut_copper*"),
            b.tag("#waxedcutcopper").apply("*:waxed_cut_copper*"),
            b.tag("#waxedexposedcutcopper").apply("*:waxed_exposed_cut_copper*"),
            b.tag("#waxedoxidizedcutcopper").apply("*:waxed_oxidized_cut_copper*"),
            b.tag("#waxedweatheredcutcopper").apply("*:waxed_weathered_cut_copper*"),
            b.tag("#weatheredcutcopper").apply("*:weathered_cut_copper*"),
            b.tag("#exposedcutcopper").apply("*:exposed_cut_copper*"),
            b.tag("#oxidizedcutcopper").apply("*:oxidized_cut_copper*")

        ]);

        // Masonry product materials

        const masonryMaterials = [
            "andesite",
            "blackstone",
            "cobblestone",
            "dark_prismarine",
            "deepslate",
            "grimstone",
            "diorite",
            "end_stone",
            "granite",
            "prismarine",
            "purpur",
            "quartz",
            "red_sandstone",
            "sandstone",
            "stone"
        ];

        var masonryMaterialTags = [];
        for (var m in masonryMaterials) {
            var pattern = "**" + m + "_*";

            const inx = m.indexOf("_");
            if (inx >= 0) {
                var p = m.substring(inx + 1);
                pattern += " !**" + p + "_*";
            }

            const tagName = "#" + m.replace("_", "");

            masonryMaterialTags.push(b.tag(tagName).apply(pattern));
        }

        b.tag("#masonry, #artificial, -#natural").apply([

            // prefixes
            b.tag("#smooth").apply("**smooth_*"),
            b.tag("#infested").apply("**mossy_* !#natural"),
            b.tag("#cracked").apply("**cracked_*"),
            b.tag("#chiseled").apply("**chiseled_*"),
            b.tag("#polished").apply("**polished_*"),
            b.tag("#cobbled").apply("**cobbled_*"),
            b.tag("#brick").apply("**brick_*"),
            b.tag("#mossy").apply("**mossy_* !#natural"),

            // postfixes
            b.tag("#bricks").apply("*:*_bricks"),
            b.tag("#tile").apply("*:*_tile"),

            // materials
            b.tag("#rednetherbrick").apply("**red_nether_brick_*"),
            b.tag("#netherbrick").apply("**nether_brick_* !**red_nether_brick_*")
        ].concat(masonryMaterialTags));

    }


}


function addGlasses(b) {
    b.tag("#glasses").artificial().blocking().apply(b => {
        b.tag("#glass").apply("**glass, *:tinted_glass");
        b.tag("#stained_glass").apply("*:*_stained_glass");
        b.tag("#glass_pane").apply("**glass_pane");
        b.tag("#stained_glass_pane").apply("*:*_stained_glass_pane");
    });
}

function addLights(b) {
    b.tag("#torch").apply("**torch");
    b.tag("#light").apply("#torch").artificial().nonblocking();
    b.tag("#light").apply("**lamp, **lantern, seaLantern, lit_pumpkin").artificial().blocking();
    b.tag("#light").apply("**glowstone").natural().blocking();
}

function addCircuit(b) {
    b.tag("#circuit, #piston").apply("**piston, piston_head, piston_extension").artificial().blocking();
    b.tag("#circuit, #piston").apply("pistonArmCollision, stickyPistonArmCollision, movingBlock").artificial()
        .blocking(); // Bedrock

    b.tag("#circuit").apply([
        "dispenser",
        "dropper",
        "hopper",
        "lightning_rod",
        "observer",
        "redstone_lamp",
        "redstone_wire",
        "**repeater",
        "tripwire_hook",
        "tripWire"
    ]).artificial().blocking();

    b.tag("#circuit").apply([
        "**comparator",
        "daylight_detector*",
        "lever",
        "lightning_rod",
        "redstone_torch",
        "redstone_wire",
        "**repeater",
        "sculk_sensor",
        "tripwire",
    ]).artificial().nonblocking();
}

function addCrafting(b) {
    b.tag("#crafting")
        .apply(
            "*:*_table, brewing_stand, **furnace, grindstone, loom, anvil, composter, smoker, stonecutter, soul_campfire, campfire")
        .artificial().blocking();
    b.tag("#crops").apply("*crops, *:farmland, **wheat, **potatoes, **beetroots, **beetroot, **carrots").artificial()
        .nonblocking();
}

function addUnsortedArtificial(b) {
    b.tag("#artificial").blocking().apply([
        "note_block", // JE
        "noteblock", // BE
        "allow", // BE
        "deny", // BE
        "frame",
        "barrel",
        "beacon",
        "bed",
        "beehive",
        "bell",
        "bookshelf",
        "carved_pumpkin",
        "chain,conduit",
        "chest",
        "chipped_anvil",
        "composter",
        "damaged_anvil",
        "end_gateway",
        "end_portal",
        "end_portal_frame",
        "end_rod",
        "ender_chest",
        "flower_pot",
        "glowstone",
        "iron_bars",
        "jukebox",
        "ladder",
        "lectern",
        "lodestone",
        "nether_portal",
        "respawn_anchor",
        "scaffolding",
        "skeleton_skull",
        "*skeleton_wall_skull",
        "skull",
        "spawner",
        "mob_spawner", // BE
        "sponge",
        "target",
        "tnt",
        "trapped_chest",
        "wet_sponge",
        "wither_skeleton_skull",
    ]);
}

function addOtherArtificial(b) {
    b.tag("#stone").blocking().artificial().apply([
        "**cobblestone",
        "**prismarine",
        "**blackstone",
        "stonebrick",
        "nether_brick",
        "red_nether_brick",
    ]);

    b.tag("#prismarine").apply("**prismarine*");

    b.tag("#darkstone").apply([
        "#artificial *blackstone*"
    ]);


    b.tag("#artificial").blocking().apply(b => {
        b.tag("#candle").apply("*:*_candle, candle");
        b.tag("#cake").apply("*:cake");
        b.tag("#candle_cake").apply("**candle_cake");

        b.tag("#concrete").apply("**concrete");
        b.tag("#concrete_powder").apply("**concrete_powder, concretePowder");
        b.tag("#wall").apply("*:*_wall");
        b.tag("#bricks").apply("*bricks");
        b.tag("#wool").apply("**wool");
        b.tag("#bed").apply("*:*_bed");
        b.tag("#potted,-#flower").apply("*:potted_*");
        b.tag("#head").apply("*:*_head");
        b.tag("#shulker_box").apply("*shulker_box");

        b.select("*:*_glazed_terracotta").tag("#glazed_terracotta, -#terracotta");
    });

    b.tag("#artificial").nonblocking().apply(b => {
        b.tag("#rail").apply("**rail");
        b.tag("#carpet").apply("**carpet !#natural");
    });

    b.select([
        "*:chiseled_*",
        "*:stained_*",
        "*:polished_*",
        "*:oxidized_*",
        "*:waxed_*",
        "*:cut_*",
        "*:*_copper",
        "*:smooth_* !*:smooth_basalt",
        "*:stripped_*",
        "*:*_pillar",
        "**cauldron"
    ]).artificial().blocking();


    b.select("*:*_block").blocking();
    b.select("*:*_block !#natural").artificial();
}

function addColors(b) {
    b.tag("#white").apply("*:white_* #artificial, *:white_* #terracotta");
    b.tag("#orange").apply("*:orange_* #artificial, *:orange_* #terracotta");
    b.tag("#magenta").apply("*:magenta_* #artificial, *:magenta_* #terracotta");
    b.tag("#light_blue").apply("*:light_blue_* #artificial, *:light_blue_* #terracotta");
    b.tag("#yellow").apply("*:yellow_* #artificial, *:yellow_* #terracotta");
    b.tag("#lime").apply("*:lime_* #artificial, *:lime_* #terracotta");
    b.tag("#pink").apply("*:pink_* #artificial, *:pink_* #terracotta");
    b.tag("#gray").apply("*:gray_* #artificial, *:gray_* #terracotta");
    b.tag("#light_gray").apply("*:light_gray_* #artificial, *:light_gray_* #terracotta");
    b.tag("#cyan").apply("*:cyan_* #artificial, *:cyan_* #terracotta");
    b.tag("#purple").apply("*:purple_* #artificial, *:purple_* #terracotta");
    b.tag("#blue").apply("*:blue_* #artificial, *:blue_* #terracotta");
    b.tag("#brown").apply("*:brown_* #artificial, *:brown_* #terracotta");
    b.tag("#green").apply("*:green_* #artificial, *:green_* #terracotta");
    b.tag("#red").apply("*:red_* #artificial, *:red_* #terracotta");
    b.tag("#black").apply("*:black_* #artificial, *:black_* #terracotta");
}

function addTechnical(b) {
    b.tag("#technical").apply("**command_block, **structure_block, *:structure_void, light").nonblocking();
    b.tag("#technical").apply("barrier, jigsaw").blocking();
}
