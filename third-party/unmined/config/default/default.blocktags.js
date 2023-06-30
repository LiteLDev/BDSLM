/**
 *
 * General block tags
 * ==================
 *
 *
 * This script assigns tags to vanilla blocks.
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
 *
 *
 */

class StyleSheet {

    build(builder) {
        this.addAir(builder);

        this.addTerrain(builder);
        this.addFormations(builder);
        this.addWeather(builder);
        this.addFlora(builder);
        this.addFauna(builder);

        this.addSculk(builder);

        this.addProducts(builder);

        this.addCrafting(builder);
        this.addGlasses(builder);
        this.addLights(builder);
        this.addCircuit(builder);
        this.addOtherArtificial(builder);
        this.addUnsortedArtificial(builder);

        this.addColors(builder);
        this.addTechnical(builder);
    }


    addAir(builder) {
        builder.blockTag("#air").isFor("*:air, *:*_air");
    }

    addTerrain(builder) {
        builder.blockTag("#terrain, #ground").isForTags([

            builder.blockTag("#mycelium").isFor("mycelium"),
            builder.blockTag("#dirt").isFor("**dirt"),

            builder.isBedrock
                ? builder.blockTag("#grassblock").isFor("grass")
                : builder.blockTag("#grassblock").isFor("grass_block"),

            builder.blockTag("#soil").isFor("#mycelium, #dirt, **podzol, **soil, harddirt"),
            builder.blockTag("#podzol").isFor("**podzol"),

            builder.blockTag("#ore").isFor("*_ore, ancient_debris"),

            builder.blockTag("#coal_ore").isFor("coal_ore, deepslate_coal_ore"),
            builder.blockTag("#copper_ore").isFor("copper_ore, deepslate_copper_ore"),
            builder.blockTag("#diamond_ore").isFor("diamond_ore, deepslate_diamond_ore"),
            builder.blockTag("#emerald_ore").isFor("emerald_ore, deepslate_emerald_ore"),
            builder.blockTag("#gold_ore").isFor("gold_ore, deepslate_gold_ore"),
            builder.blockTag("#iron_ore").isFor("iron_ore, deepslate_iron_ore"),
            builder.blockTag("#lapis_ore").isFor("lapis_ore, deepslate_lapis_ore"),
            builder.blockTag("#redstone_ore").isFor("redstone_ore, deepslate_redstone_ore"),
            builder.blockTag("#nether_gold_ore").isFor("nether_gold_ore"),
            builder.blockTag("#nether_quartz_ore").isFor("nether_quartz_ore"),

            builder.blockTag("#rock")
                .isFor(
                    "andesite, diorite, calcite, granite, tuff, stone, grimstone, netherrack, *:*_nylium, end_stone, *:cragrock,*:cragRock, *:limestone"),
            builder.blockTag("#rock").isFor("infested_stone, infested_deepslate"),
            builder.blockTag("#rock").isFor("*:marble"),
            builder.blockTag("#darkrock").isFor("bedrock, *:basalt, deepslate, smooth_basalt, obsidian, crying_obsidian"),
            builder.blockTag("#rock").isFor("#darkrock"),


            builder.blockTag("#gravel").isFor("gravel"),
            builder.blockTag("#mud").isFor("*:mud"),
            builder.blockTag("#clay").isFor("clay"),
            builder.blockTag("#magma").isFor("magma, magma_block"),

            builder.blockTag("#soulsand").isFor("soul_sand"),
            builder.blockTag("#soul").isFor("soul_soil, #soulsand"),
            builder.blockTag("#sand").isFor("**sand !red_sand !soul_sand, sandstone, hardsand"),
            builder.blockTag("#redsand").isFor("red_sand, red_sandstone, sand[sand_type:red]"),
            builder.blockTag("#rock").isFor("sandstone, red_sandstone"),
            builder.blockTag("#sands").isFor("#soulsand, #redsand, #sand"),

            builder.blockTag("#salt").isFor("*:dried_salt"),

            builder.blockTag("#path").isFor("grass_path, dirt_path"),

            builder.blockTag("#terracotta").isFor("**terracotta, hardened_clay, stained_hardened_clay"),
        ]).natural().blocking();
    }

    addFormations(builder) {
        builder.blockTag("#dripstone,#ground").isFor("dripstone_block, pointed_dripstone").natural().nonblocking();

        builder.blockTag("#amethyst").isFor("*_amethyst_bud, amethyst_cluster").natural().nonblocking();
        builder.blockTag("#amethyst, #ground").isFor("amethyst_block, budding_amethyst").natural().blocking();
        builder.blockTag("#crystal").isFor("#amethyst");
    }

    addWeather(builder) {
        builder.blockTag("#water").isFor([
            "**water",
            "*:bubble_column"
        ]).natural().water();;

        builder.blockTag("#water.poison").isFor("*:poison").natural().fluid();
        builder.blockTag("#lava").isFor("**lava").natural().fluid();
        builder.blockTag("#ice").isFor("**ice").natural().blocking();
        builder.blockTag("#snow").isFor("**snow, **snow_layer").nonblocking().natural();
        builder.blockTag("#snow").isFor("**snow_block").natural().blocking();
        builder.blockTag("#fire").isFor("**fire").natural().nonblocking();
    }

    addFlora(builder) {

        // blocking
        builder.blockTag("#flora").natural().blocking().isForTags([
            builder.blockTag("#leaves").isFor("**leaves,**leaves?,**leaves_?,*:*Leaves,*:*Leaves?,**foliage,*:leaves*"),
            builder.blockTag("#log").isFor("**log,**log?,**logs?"),
            builder.blockTag("#mushroom.brown").isFor("brown_mushroom_block"),
            builder.blockTag("#mushroom.red").isFor("red_mushroom_block"),
            builder.blockTag("#mushroom").isFor("#mushroom.brown, #mushroom.red"),
            builder.blockTag("#mushroom").isFor("shroomlight"),
            builder.blockTag("#bush").isFor("azalea,flowering_azalea,big_dripleaf,moss_block"),
        ]);


        builder.blockTag("#flora").natural().blocking().isFor("*:cactus, *:sugar_cane, reeds, *:chorus_plant, *:reed, *:bamboo");

        builder.blockTag("#chorus").isFor(["*:chorus_plant"]);

        // non-blocking
        builder.blockTag("#flora").natural().nonblocking().isForTags([
            builder.blockTag("#sapling").isFor("**sapling"),
            builder.blockTag("#stem").isFor("**stem"),
            builder.blockTag("#sprout").isFor("**sprout, **sprouts"),
            builder.blockTag("#flower").isFor([
                "**flower,**flowers,**flowers?,**flower_?,**flower?,*:plant_?,*:plant?,*:moss,*:double_plant, **allium, **bluet, **orchid, **dandelion, **lavender, **lilac, lily_of_the_valley, **lily_pad, **hibiscus, **tulip, **lily, **daisy, **peony, **poppy, **rose, **violet, **waterlily",
                "spore_blossom, *_flowered"]),

            builder.blockTag("#flower.red").isFor("*:red_* #flower, poppy, rose_bush"),
            builder.blockTag("#flower.yellow").isFor("*:yellow_* #flower, dandelion, sunflower"),
            builder.blockTag("#flower.blue").isFor("*:blue_* #flower, cornflower"),
            builder.blockTag("#flower.purple").isFor("*:purple_* #flower, lilac, peony, allium"),
            builder.blockTag("#flower.white").isFor("*:white_* #flower, oxeye_daisy, chorus_flower"),
            builder.blockTag("#flower.pink").isFor("pink_petals"),

            builder.blockTag("#lilypad").isFor("lily_pad,waterlily"),


            builder.blockTag("#mushroom").isFor("*:*_fungus, **mushroom, **mushroom?"),
            builder.blockTag("#grass").isFor("**roots, **wart, *:barley, **bush, moss_carpet, deadbush"),

            builder.blockTag("#lichen").isFor("**lichen"),

            builder.isBedrock
                ? builder.blockTag("#grass,-#flower").isFor("tallgrass, double_plant")
                : builder.blockTag("#grass").isFor("**grass,tallgrass,double_tallgrass"),

            builder.blockTag("#grass").isFor("**Grass, small_dripleaf, **fern"),
            builder.blockTag("#seagrass").isFor("**seagrass").waterlogged(),
            builder.blockTag("#kelp").isFor("**kelp, **kelp_plant").waterlogged(),
            builder.blockTag("#vine").isFor("**vine, **vines, *_vines_*, **vines_plant, *:ivy, *:treemoss, *:willow"),

            builder.blockTag("#fruit").isFor("cocoa, melon, pumpkin"),
        ]);

        builder.blockTag("#flat").isFor("#grass,#seagrass,#kelp,#flower,#sapling,#stem,#sprout");

        // alias
        builder.blockTag("#vegetation").isFor("#flora");
    }

    addFauna(builder) {
        if (builder.isBedrock) {
            builder.blockTag("#corals").natural().nonblocking().isForTags([
                builder.blockTag("#coral").isFor("coral"),
                builder.blockTag("#coral_fan").isFor("coral_fan, coral_fan_dead"),
                builder.blockTag("#coral_wall_fan").isFor("coral_fan_hang, coral_fan_hang?"),
                builder.blockTag("#coral_block").isFor("coral_block"),
            ]);

            builder.blockTag("#coral.tube").isFor("#corals *[coral_color:blue]");
            builder.blockTag("#coral.brain").isFor("#corals *[coral_color:pink]");
            builder.blockTag("#coral.bubble").isFor("#corals *[coral_color:purple]");
            builder.blockTag("#coral.fire").isFor("#corals *[coral_color:fire]");
            builder.blockTag("#coral.horn").isFor("#corals *[coral_color:horn]");
            builder.blockTag("#coral.dead").isFor("#corals *[dead_bit:1]");

            builder.blockTag("#frogspawn").natural().nonblocking().isFor("frog_spawn");
        } else {
            builder.blockTag("#corals").natural().nonblocking().isForTags([
                builder.blockTag("#coral").isFor("**coral"),
                builder.blockTag("#coral_fan").isFor("**coral_fan"),
                builder.blockTag("#coral_wall_fan").isFor("**coral_wall_fan"),
                builder.blockTag("#coral_block").isFor("**coral_block"),
            ]);

            builder.blockTag("#coral.tube").isFor("#corals *:*tube*");
            builder.blockTag("#coral.brain").isFor("#corals *:*brain*");
            builder.blockTag("#coral.bubble").isFor("#corals *:*bubble*");
            builder.blockTag("#coral.fire").isFor("#corals *:*fire*");
            builder.blockTag("#coral.horn").isFor("#corals *:*horn*");
            builder.blockTag("#coral.dead").isFor("#corals *:*dead*");

            builder.blockTag("#frogspawn").natural().nonblocking().isFor("frogspawn");
        }

        builder.blockTag("#fauna").isFor("*:cobweb, *:web, *:*_nest, *:*_egg, sea_pickle, slime").natural().nonblocking();
        builder.blockTag("#fauna").isFor("#corals");
    }

    addSculk(builder) {
        builder.blockTag("#sculk").natural().blocking().isFor("sculk, sculk_catalyst");
        builder.blockTag("#sculk").natural().nonblocking().isFor("sculk_shrieker, sculk_vein");
    }


    addProducts(builder) {

        // Product categories

        builder.blockTag().blocking().artificial().isForTags([
            builder.blockTag("#door").isFor("*:**door"),
            builder.blockTag("#fence").isFor("**fence"),
            builder.blockTag("#fencegate").isFor("**fence_gate"),
            builder.blockTag("#planks").isFor("**planks"),
            builder.blockTag("#slab").isFor("**slab, **slab?"),
            builder.blockTag("#stairs").isFor("**stairs"),
            builder.blockTag("#pillar").isFor("**pillar"),
            builder.blockTag("#bricks").isFor("**bricks"),
            builder.blockTag("#tiles").isFor("**tiles"),
            builder.blockTag("#wall").isFor("**wall"),
            builder.blockTag("#wood").isFor("**wood, **hyphae")
        ]);

        builder.blockTag().nonblocking().artificial().isForTags([
            builder.blockTag("#button").isFor("**button"),
            builder.blockTag("#pressureplate").isFor("**pressure_plate"),
            builder.blockTag("#sign").isFor("**sign, chalkboard"),
            builder.blockTag("#trapdoor").isFor("**trapdoor"),
            builder.blockTag("#wallsign").isFor("**wall_sign"),
            builder.blockTag("#banner").isFor("**banner"),
            builder.blockTag("#wallbanner").isFor("**wall_banner")
        ]);

        // Wooden product materials

        if (builder.isBedrock) {
            builder.blockTag("#wooden").isForTags([
                builder.blockTag("#acacia").isFor("[wood_type:acacia]"),
                builder.blockTag("#birch").isFor("[wood_type:birch]"),
                builder.blockTag("#darkoak").isFor("[wood_type:dark_oak]"),
                builder.blockTag("#jungle").isFor("[wood_type:jungle]"),
                builder.blockTag("#oak").isFor("[wood_type:oak]"),
                builder.blockTag("#spruce").isFor("[wood_type:spruce]"),
            ]);
        }

        builder.blockTag("#wooden").isForTags([
            builder.blockTag("#acacia").isFor("*:acacia_* !#natural"),
            builder.blockTag("#birch").isFor("*:birch_* !#natural"),
            builder.blockTag("#darkoak").isFor("*:dark_oak_* !#natural"),
            builder.blockTag("#jungle").isFor("*:jungle_* !#natural"),
            builder.blockTag("#oak").isFor("*:oak_* !#natural"),
            builder.blockTag("#spruce").isFor("*:spruce_* !#natural"),

            builder.blockTag("#crimson").isFor("*:crimson_* !#natural"),
            builder.blockTag("#warped").isFor("*:warped_* !#natural"),
            builder.blockTag("#mangrove").isFor("*:mangrove_* !#natural"),
            builder.blockTag("#bamboo").isFor("*:bamboo_* !#natural"),
            builder.blockTag("#cherry").isFor("*:cherry_* !#natural")
        ]);

        // todo bedrock
        builder.blockTag("#wooden").isFor("**wooden_*");
        builder.blockTag("#wooden").isFor("*:double_wooden_*");
        builder.blockTag("#wooden").isFor("planks, trapdoor, fence");

        builder.blockTag("#wooden").isFor("*:*_wood !#natural, petrified_oak_slab");

        builder.blockTag().artificial().isFor("#wooden");

        // Metal product materials

        builder.blockTag("#metal").artificial().isForTags([
            builder.blockTag("#cutcopper").isFor("*:cut_copper*"),
            builder.blockTag("#waxedcutcopper").isFor("*:waxed_cut_copper*"),
            builder.blockTag("#waxedexposedcutcopper").isFor("*:waxed_exposed_cut_copper*"),
            builder.blockTag("#waxedoxidizedcutcopper").isFor("*:waxed_oxidized_cut_copper*"),
            builder.blockTag("#waxedweatheredcutcopper").isFor("*:waxed_weathered_cut_copper*"),
            builder.blockTag("#weatheredcutcopper").isFor("*:weathered_cut_copper*"),
            builder.blockTag("#exposedcutcopper").isFor("*:exposed_cut_copper*"),
            builder.blockTag("#oxidizedcutcopper").isFor("*:oxidized_cut_copper*")

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

            masonryMaterialTags.push(builder.blockTag(tagName).isFor(pattern));
        }


        builder.blockTag("#masonry").artificial().isFor("packed_mud");
        builder.blockTag("#masonry, #deepslate").artificial().isFor("reinforced_deepslate");

        builder.blockTag("#masonry").artificial().isForTags([

            // prefixes
            builder.blockTag("#smooth").isFor("**smooth_*"),
            builder.blockTag("#infested").isFor("**infested_* !#natural"),
            builder.blockTag("#cracked").isFor("**cracked_*"),
            builder.blockTag("#chiseled").isFor("**chiseled_*"),
            builder.blockTag("#polished").isFor("**polished_*"),
            builder.blockTag("#cobbled").isFor("**cobbled_*"),
            builder.blockTag("#brick").isFor("**brick_*"),
            //TODO 1.19 mud_brick_*
            builder.blockTag("#mossy").isFor("**mossy_* !#natural"),

            // postfixes
            builder.blockTag("#bricks").isFor("*:*_bricks"),
            builder.blockTag("#tiles").isFor("*:*_tiles"),
            builder.blockTag("#tile").isFor("*:*_tile"),

            // materials
            builder.blockTag("#rednetherbrick").isFor("**red_nether_brick_*"),
            builder.blockTag("#netherbrick").isFor("**nether_brick_* !**red_nether_brick_*")
        ].concat(masonryMaterialTags));

    }





    addGlasses(builder) {
        builder.blockTag("#glasses").artificial().blocking().isForTags([
            builder.blockTag("#glass").isFor("**glass, *:tinted_glass"),
            builder.blockTag("#stained_glass").isFor("**stained_glass"),
            builder.blockTag("#glass_pane").isFor("**glass_pane"),
            builder.blockTag("#stained_glass_pane").isFor("**stained_glass_pane")
        ]);
    }

    addLights(builder) {
        builder.blockTag("#torch").isFor("**torch");
        builder.blockTag("#light").isFor("#torch").artificial().nonblocking();
        builder.blockTag("#light").isFor("**lamp, **lantern, seaLantern, lit_pumpkin").artificial().blocking();
        builder.blockTag("#light").isFor("**glowstone").natural().blocking();

        builder.blockTag("#froglight").isFor("*_froglight").natural().blocking(); // pearlescent_froglight, verdant_froglight, ochre_froglight
        builder.blockTag("#light").isFor("froglight");
    }

    addCircuit(builder) {
        builder.blockTag("#circuit, #piston").isFor("**piston, piston_head, piston_extension").artificial().blocking();
        builder.blockTag("#circuit, #piston").isFor("pistonArmCollision, stickyPistonArmCollision, movingBlock").artificial()
            .blocking(); // Bedrock

        builder.blockTag("#circuit").isFor([
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

        builder.blockTag("#circuit").isFor([
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

    addCrafting(builder) {
        builder.blockTag("#crafting").artificial().blocking().isFor("*:*_table, brewing_stand, **furnace, grindstone, loom, anvil, composter, smoker, stonecutter, soul_campfire, campfire");
        builder.blockTag("#crops").artificial().nonblocking().isFor("*crops, *:farmland, **wheat, **potatoes, **beetroots, **beetroot, **carrots");
    }

    addUnsortedArtificial(builder) {
        builder.blockTag("#artificial").blocking().isFor([
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

    addOtherArtificial(builder) {
        builder.blockTag("#stone").blocking().artificial().isFor([
            "**cobblestone",
            "**prismarine",
            "**blackstone",
            "stonebrick",
            "nether_brick",
            "red_nether_brick",
        ]);

        builder.blockTag("#prismarine").isFor("**prismarine*");

        builder.blockTag("#darkstone").isFor([
            "#artificial *blackstone*"
        ]);


        builder.blockTag().artificial().blocking().isForTags([
            builder.blockTag("#candle").isFor("*:*_candle, candle"),
            builder.blockTag("#cake").isFor("*:cake"),
            builder.blockTag("#candle_cake").isFor("**candle_cake"),

            builder.blockTag("#concrete").isFor("**concrete"),
            builder.blockTag("#concrete_powder").isFor("**concrete_powder"),
            builder.blockTag("#wall").isFor("*:*_wall"),
            builder.blockTag("#bricks").isFor("*bricks"),
            builder.blockTag("#tiles").isFor("*tiles"),
            builder.blockTag("#wool").isFor("**wool"),
            builder.blockTag("#bed").isFor("*:*_bed"),
            builder.blockTag("#potted,-#flower").isFor("*:potted_*"),
            builder.blockTag("#head").isFor("*:*_head"),
            builder.blockTag("#shulker_box").isFor("*shulker_box"),
            builder.blockTag("#glazed_terracotta, -#terracotta").isFor("*:*_glazed_terracotta"),
        ]);

        builder.blockTag().artificial().nonblocking().isForTags([
            builder.blockTag("#rail").isFor("**rail"),
            builder.blockTag("#carpet").isFor("**carpet !#natural")
        ]);

        builder.blockTag().artificial().blocking().isFor([
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
        ]);


        builder.blockTag().blocking().isFor("*:*_block");
        builder.blockTag("#artificial").isFor("*:*_block !#natural"); // do not use .artificial() here
    }

    addColors(builder) {
        builder.blockTag("#white").isFor("*:white_* #artificial, *:white_* #terracotta");
        builder.blockTag("#orange").isFor("*:orange_* #artificial, *:orange_* #terracotta");
        builder.blockTag("#magenta").isFor("*:magenta_* #artificial, *:magenta_* #terracotta");
        builder.blockTag("#light_blue").isFor("*:light_blue_* #artificial, *:light_blue_* #terracotta");
        builder.blockTag("#yellow").isFor("*:yellow_* #artificial, *:yellow_* #terracotta");
        builder.blockTag("#lime").isFor("*:lime_* #artificial, *:lime_* #terracotta");
        builder.blockTag("#pink").isFor("*:pink_* #artificial, *:pink_* #terracotta");
        builder.blockTag("#gray").isFor("*:gray_* #artificial, *:gray_* #terracotta");
        builder.blockTag("#light_gray,#silver").isFor("*:light_gray_* #artificial, *:light_gray_* #terracotta");
        builder.blockTag("#cyan").isFor("*:cyan_* #artificial, *:cyan_* #terracotta");
        builder.blockTag("#purple").isFor("*:purple_* #artificial, *:purple_* #terracotta");
        builder.blockTag("#blue").isFor("*:blue_* #artificial, *:blue_* #terracotta");
        builder.blockTag("#brown").isFor("*:brown_* #artificial, *:brown_* #terracotta");
        builder.blockTag("#green").isFor("*:green_* #artificial, *:green_* #terracotta");
        builder.blockTag("#red").isFor("*:red_* #artificial, *:red_* #terracotta");
        builder.blockTag("#black").isFor("*:black_* #artificial, *:black_* #terracotta");

        if (builder.isBedrock) {
            builder.blockTag("#white").isFor("[color:white]");
            builder.blockTag("#orange").isFor("[color:orange]");
            builder.blockTag("#magenta").isFor("[color:magenta]");
            builder.blockTag("#light_blue").isFor("[color:light_blue]");
            builder.blockTag("#yellow").isFor("[color:yellow]");
            builder.blockTag("#lime").isFor("[color:lime]");
            builder.blockTag("#pink").isFor("[color:pink]");
            builder.blockTag("#gray").isFor("[color:gray]");
            builder.blockTag("#light_gray,#silver").isFor("[color:silver]");
            builder.blockTag("#cyan").isFor("[color:cyan]");
            builder.blockTag("#purple").isFor("[color:purple]");
            builder.blockTag("#blue").isFor("[color:blue]");
            builder.blockTag("#brown").isFor("[color:brown]");
            builder.blockTag("#green").isFor("[color:green]");
            builder.blockTag("#red").isFor("[color:red]");
            builder.blockTag("#black").isFor("[color:black]");
        }

    }

    addTechnical(builder) {
        builder.blockTag("#technical").nonblocking().isFor("**command_block, **structure_block, *:structure_void, light");
        builder.blockTag("#technical").blocking().isFor("barrier, jigsaw");
    }

}