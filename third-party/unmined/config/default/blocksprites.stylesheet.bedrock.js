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


class StyleSheet {

    build(builder) {
        builder.style("*:*").sprite("*");

        builder.style("grass").grassTint();
        builder.style("#leaves, #vine").foliageTint();
        builder.style("water").sprite("water").waterTint();

        builder.style("azalea_leavaes, cherry_leaves").withoutTint();
    }
}


