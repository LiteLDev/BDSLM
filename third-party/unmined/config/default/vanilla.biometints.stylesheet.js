/**
 *
 * Vanilla biome tints
 * ===================
 *
 *
 * This script sets up tints for vanilla biomes, and adds a setting to turn it on and off.
 *
 *
 * This is a JavaScript file interpreted by Jint 3.x.
 * See https://github.com/sebastienros/jint for supported language features.
 *
 */

var STYLESHEET = {
    name: "uNmINeD - Vanilla biome tints",
    settings: function (s) {
        s.category("Experimental", c => {
            c.bool(SETTING.vanillaBiomeTints, "Vanilla biome tints", false);
        });
    },
    main: function (b) {

        if (b.s[SETTING.vanillaBiomeTints]) addVanillaBiomeTints(b);
    }
};

var SETTING = {
    vanillaBiomeTints: "vanillaBiomeTints"
};


function addVanillaBiomeTints(b) {
    b.biome("minecraft:badlands").grass("#90814d").foliage("#9e814d").water("#3F76E4");
    b.biome("minecraft:badlands_plateau").grass("#90814d").foliage("#9e814d").water("#14A2C5‌");
    b.biome("minecraft:bamboo_jungle").grass("#59C93C").foliage("#30BB0B").water("#3F76E4");
    b.biome("minecraft:bamboo_jungle_hills").grass("#59C93C").foliage("#30BB0B").water("#3F76E4");
    b.biome("minecraft:basalt_deltas").grass("#BFB755").foliage("#AEA42A").water("#3F76E4");
    b.biome("minecraft:beach").grass("#91bd59").foliage("#77ab2f").water("#3F76E4");
    b.biome("minecraft:birch_forest").grass("#88bb67").foliage("#6ba941").water("#3F76E4");
    b.biome("minecraft:birch_forest_hills").grass("#88bb67").foliage("#6ba941").water("#3F76E4");
    b.biome("minecraft:cold_ocean").grass("#8eb971").foliage("#71a74d").water("#2080C9");
    b.biome("minecraft:crimson_forest").water("#3F76E4");
    b.biome("minecraft:dark_forest").grass("#507a32").foliage("#59ae30").water("#3F76E4");
    b.biome("minecraft:dark_forest_hills").grass("#507a32").foliage("#59ae30").water("#3F76E4");
    b.biome("minecraft:deep_cold_ocean").grass("#8eb971").foliage("#71a74d").water("#2080C9");
    b.biome("minecraft:deep_frozen_ocean").grass("#8eb971").foliage("#71a74d").water("#2570B5");
    b.biome("minecraft:deep_lukewarm_ocean").grass("#8eb971").foliage("#71a74d").water("#0D96DB");
    b.biome("minecraft:deep_ocean").grass("#8eb971").foliage("#71a74d").water("#1787D4");
    b.biome("minecraft:deep_warm_ocean").grass("#8eb971").foliage("#71a74d").water("#02B0E5");
    b.biome("minecraft:desert").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:desert_hills").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:desert_lakes").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:dripstone_caves").water("#3F76E4");
    b.biome("minecraft:end_barrens").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:end_highlands").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:end_midlands").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:eroded_badlands").grass("#90814d").foliage("#9e814d").water("#3F76E4");
    b.biome("minecraft:flower_forest").grass("#79c05a").foliage("#59ae30").water("#3F76E4");
    b.biome("minecraft:forest").grass("#79c05a").foliage("#59ae30").water("#3F76E4");
    b.biome("minecraft:frozen_ocean").grass("#80b497").foliage("#60a17b").water("#2570B5");
    b.biome("minecraft:frozen_peaks").grass("#80B497").foliage("#60A17B").water("#3F76E4");
    b.biome("minecraft:frozen_river").grass("#80b497").foliage("#60a17b").water("#3938C9");
    b.biome("minecraft:giant_spruce_taiga").grass("#86b783").foliage("#68a464").water("#3F76E4");
    b.biome("minecraft:giant_spruce_taiga_hills").grass("#86b783").foliage("#68a464").water("#3F76E4");
    b.biome("minecraft:giant_tree_taiga").grass("#86b87f").foliage("#68a55f").water("#3F76E4");
    b.biome("minecraft:giant_tree_taiga_hills").grass("#86b87f").foliage("#68a55f").water("#3F76E4");
    b.biome("minecraft:gravelly_mountains").grass("#8ab689").foliage("#6da36b").water("#3F76E4");
    b.biome("minecraft:grove").grass("#80B497").foliage("#60A17B").water("#3F76E4");
    b.biome("minecraft:ice_spikes").grass("#80b497").foliage("#60a17b").water("#3F76E4");
    b.biome("minecraft:jagged_peaks").grass("#80B497").foliage("#60a17b").water("#3F76E4");
    b.biome("minecraft:jungle").grass("#59c93c").foliage("#30bb0b").water("#3F76E4");
    b.biome("minecraft:jungle_edge").grass("#64c73f").foliage("#3eb80f").water("#3F76E4");
    b.biome("minecraft:jungle_hills").grass("#59c93c").foliage("#30bb0b").water("#3F76E4");
    b.biome("minecraft:lukewarm_ocean").grass("#8eb971").foliage("#71a74d").water("#0D96DB");
    b.biome("minecraft:lush_caves").water("#3F76E4");
    b.biome("minecraft:meadow").grass("#83BB6D").foliage("#63A948").water("#3F76E4");
    b.biome("minecraft:modified_badlands_plateau").grass("#90814d").foliage("#9e814d").water("#3F76E4");
    b.biome("minecraft:modified_gravelly_mountains").grass("#8ab689").foliage("#6da36b").water("#3F76E4");
    b.biome("minecraft:modified_jungle").grass("#59c93c").foliage("#30bb0b").water("#3F76E4");
    b.biome("minecraft:modified_jungle_edge").grass("#64c73f").foliage("#3eb80f").water("#3F76E4");
    b.biome("minecraft:modified_wooded_badlands_plateau").grass("#90814d").foliage("#9e814d").water("#3F76E4");
    b.biome("minecraft:mountain_edge").grass("#8ab689").foliage("#6da36b").water("#3F76E4");
    b.biome("minecraft:mountains").grass("#8ab689").foliage("#6da36b").water("#3F76E4");
    b.biome("minecraft:mushroom_field_shore").grass("#55c93f").foliage("#2bbb0f").water("#0E4ECF");
    b.biome("minecraft:mushroom_fields").grass("#55c93f").foliage("#2bbb0f").water("#3F76E4");
    b.biome("minecraft:nether").water("#3F76E4");
    b.biome("minecraft:nether_wastes").grass("#BFB755").foliage("#AEA42A").water("#3F76E4");
    b.biome("minecraft:ocean").grass("#8eb971").foliage("#71a74d").water("#1787D4");
    b.biome("minecraft:old_growth_birch_forest").grass("#88BB67").foliage("#6bA941").water("#3F76E4");
    b.biome("minecraft:old_growth_pine_taiga").grass("#86B87F").foliage("#68A55F").water("#3F76E4");
    b.biome("minecraft:old_growth_spruce_taiga").grass("#86B87F").foliage("#68A55F").water("#3F76E4");
    b.biome("minecraft:plains").grass("#91bd59").foliage("#77ab2f").water("#3F76E4");
    b.biome("minecraft:river").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:savanna").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:savanna_plateau").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:shattered_savanna").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:shattered_savanna_plateau").grass("#bfb755").foliage("#aea42a").water("#3F76E4");
    b.biome("minecraft:small_end_islands").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:snowy_beach").grass("#83b593").foliage("#64a278").water("#3F76E4");
    b.biome("minecraft:snowy_mountains").grass("#80b497").foliage("#60a17b").water("#3F76E4");
    b.biome("minecraft:snowy_plains").grass("#80B497").foliage("#60A17B").water("#3F76E4‌");
    b.biome("minecraft:snowy_slopes").grass("#80B497").foliage("#60A17B").water("#3F76E4");
    b.biome("minecraft:snowy_taiga").grass("#80b497").foliage("#60a17b").water("#3D57D6");
    b.biome("minecraft:snowy_taiga_hills").grass("#80b497").foliage("#60a17b").water("#3F76E4");
    b.biome("minecraft:snowy_taiga_mountains").grass("#80b497").foliage("#60a17b").water("#3F76E4");
    b.biome("minecraft:snowy_tundra").grass("#80b497").foliage("#60a17b").water("#3F76E4");
    b.biome("minecraft:soul_sand_valley").water("#3F76E4");
    b.biome("minecraft:sparse_jungle").grass("#64C73F").foliage("#3EB80F").water("#3F76E4");
    b.biome("minecraft:stone_shore").grass("#8ab689").foliage("#6da36b").water("#3F76E4");
    b.biome("minecraft:stony_peaks").water("#3F76E4");
    b.biome("minecraft:stony_shore").water("#3F76E4");
    b.biome("minecraft:sunflower_plains").grass("#91bd59").foliage("#77ab2f").water("#3F76E4");
    b.biome("minecraft:swamp").grass("#6A7039").foliage("#6a7039").water("#617B64");
    b.biome("minecraft:swamp_hills").grass("#6A7039").foliage("#6a7039").water("#617B64");
    b.biome("minecraft:taiga").grass("#86b783").foliage("#68a464").water("#3F76E4");
    b.biome("minecraft:taiga_hills").grass("#86b783").foliage("#68a464").water("#3F76E4");
    b.biome("minecraft:taiga_mountains").grass("#86b783").foliage("#68a464").water("#3F76E4");
    b.biome("minecraft:tall_birch_forest").grass("#88bb67").foliage("#6ba941").water("#3F76E4");
    b.biome("minecraft:tall_birch_hills").grass("#88bb67").foliage("#6ba941").water("#3F76E4");
    b.biome("minecraft:the_end").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:the_void").grass("#8eb971").foliage("#71a74d").water("#3F76E4");
    b.biome("minecraft:warm_ocean").grass("#8eb971").foliage("#71a74d").water("#02B0E5");
    b.biome("minecraft:warped_forest").water("#3F76E4");
    b.biome("minecraft:windswept_forest").grass("#79C05A").foliage("#59AE30").water("#3F76E4");
    b.biome("minecraft:windswept_gravelly_hills").grass("#8AB689").foliage("#6DA36B").water("#3F76E4");
    b.biome("minecraft:windswept_hills").grass("#8AB689").foliage("#6DA36B").water("#3F76E4");
    b.biome("minecraft:windswept_savanna").grass("#BFB755").foliage("#AEA42A").water("#3F76E4");
    b.biome("minecraft:wooded_badlands_plateau").grass("#90814d").foliage("#9e814d").water("#3F76E4");
    b.biome("minecraft:wooded_hills").grass("#79c05a").foliage("#59ae30").water("#3F76E4");
    b.biome("minecraft:wooded_mountains").grass("#8ab689").foliage("#6da36b").water("#3F76E4");
};