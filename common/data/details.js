window.details = {
    1236: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 2x, deals 5x character's ATK to all enemies at the end of each turn",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 turn",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 turns",
    },
    1244: {// Fortnight Hack
        captain: "Boosts ATK of Fighter characters by 1.75x and the ATK of Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 2.275x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1245: {// Event Luffy
        captain: "Boosts ATK of Fighter characters by 1.75x. If HP is below 10%, boosts ATK of Fighter characters by 3x instead.",
        special: "Deals random [QCK] damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Firefly Light, Fiery Doll\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Gomu Gomu no Stamp Gatling",
        specialNotes: "Firefly Light, Fiery Doll is Event Ace's special ability.",
    },
    1246: {// Event Ace
        captain: "Boosts ATK of Fighter characters by 1.2x",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Gomu Gomu no Stamp Gatling\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1247: {// Event Ace
        captain: "Boosts HP of Fighter characters by 1.2x and their ATK by 2.75x if they have a matching orb, by 2x otherwise",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Gomu Gomu no Stamp Gatling\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1251: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 2x and Recovers a variable amount of character's RCV in HP at the end of each turn depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 2.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
    },
};