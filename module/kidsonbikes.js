// Import Modules
import { KidsOnBikesActor } from "./actor/actor.js";
import { KidsOnBikesActorSheet } from "./actor/actor-sheet.js";
import { KidsOnBikesItem } from "./item/item.js";
import { KidsOnBikesItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.kidsonbikes = {
    KidsOnBikesActor,
    KidsOnBikesItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = KidsOnBikesActor;
  CONFIG.Item.entityClass = KidsOnBikesItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("kidsonbikes", KidsOnBikesActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("kidsonbikes", KidsOnBikesItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});