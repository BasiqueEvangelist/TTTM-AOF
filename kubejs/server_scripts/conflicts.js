////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {

  // Wooden Bucket / Small Logs
  event.remove({ output: "blockus:oak_small_logs" });
  event.remove({ output: "blockus:spruce_small_logs" });
  event.remove({ output: "blockus:birch_small_logs" });
  event.remove({ output: "blockus:jungle_small_logs" });
  event.remove({ output: "blockus:acacia_small_logs" });
  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.remove({ output: "blockus:white_oak_small_logs" });

  event.shaped(item.of("blockus:oak_small_logs", 3), [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);
  event.shaped(item.of("blockus:spruce_small_logs", 3), [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);
  event.shaped(item.of("blockus:birch_small_logs", 3), [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);
  event.shaped(item.of("blockus:jungle_small_logs", 3), [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);
  event.shaped(item.of("blockus:acacia_small_logs", 3), [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);
  event.shaped(item.of("blockus:dark_oak_small_logs", 3), [
    ["minecraft:dark_oak_log", "minecraft:dark_oak_log", "minecraft:dark_oak_log"],
  ]);
  event.shaped(item.of("blockus:white_oak_small_logs", 3), [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);

  // Charcoal & Glowstone
  event.remove({ output: "techreborn:glowstone_small_dust" });

  event.shaped(item.of("techreborn:glowstone_small_dust", 4), [
    ["minecraft:glowstone_dust"],
  ]);

  // Iron Plating / Iron Furnace
  event.replaceInput(
    { id: "blockus:iron_plating" },
    "minecraft:iron_ingot",
    "techreborn:iron_plate"
  );

    // Chests
    event.replaceInput(
      {},
      "#c:wooden_chests",
      "#c:wooden_chests"
    );

  // Diamond Chain
  event.replaceInput(
    { id: "mochains:diamond_chain" },
    "mochains:diamond_nugget",
    "astromine:diamond_fragment"
  );

  // Crafting Tables
  var tables = [
    "byg:aspen_crafting_table",
    "byg:baobab_crafting_table",
    "byg:blue_enchanted_crafting_table",
    "byg:cherry_crafting_table",
    "byg:cika_crafting_table",
    "byg:cypress_crafting_table",
    "byg:ebony_crafting_table",
    "byg:fir_crafting_table",
    "byg:green_enchanted_crafting_table",
    "byg:zelkova_crafting_table",
    "byg:witch_hazel_crafting_table",
    "byg:willow_crafting_table",
    "byg:holly_crafting_table",
    "byg:jacaranda_crafting_table",
    "byg:mahogany_crafting_table",
    "byg:mangrove_crafting_table",
    "byg:mangrove_crafting_table",
    "byg:pine_crafting_table",
    "byg:rainbow_eucalyptus_crafting_table",
    "byg:redwood_crafting_table",
    "byg:skyris_crafting_table",
  ];

  tables.forEach(function (item, index) {
    event.remove({ type: "crafting_shaped", output: item });
  });

  // Fragments
  event.remove({ output: "techreborn:diamond_nugget" });
  event.remove({ output: "techreborn:emerald_nugget" });

  // Crude Storage Unit
  event.replaceInput(
    { type: "minecraft:crafting_shaped" },
    "minecraft:barrel",
    "#blockus:barrels"
  );

  // Bamboo
  event.remove({ output: "bambootweaks:bamboo_block" });

  event.shaped(item.of("bambootweaks:bamboo_block", 2), [
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
    ["minecraft:bamboo", "minecraft:bamboo", "minecraft:bamboo"],
  ]);

  // Basic Coil / Red Alloy Compound
  event.remove({ output: "rswires:red_alloy_compound" });

  event.shaped(item.of("rswires:red_alloy_compound"), [
    ["minecraft:iron_ingot", "minecraft:redstone", "minecraft:redstone"],
  ]);

  // Empty Cell / Tin Gear
  event.remove({ id: "techreborn:crafting_table/cell" });
  event.shaped(item.of("techreborn:cell", 4), [
    [null, "#c:tin_ingots", null],
    ["#c:tin_ingots", "minecraft:glass", "#c:tin_ingots"],
    [null, "#c:tin_ingots", null],
  ]);

  // AE2 Grindstone 
  event.remove({ output: "appliedenergistics2:grindstone" });

});