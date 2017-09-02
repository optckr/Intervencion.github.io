window.sailors = {
    311: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Cerebral") ? 50 : 0; },
    },
    312: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Cerebral") ? 50 : 0; },
    },
    360: {
        hpStatic: function(p) { return p.unit.weapon.has("Powerhouse") ? 100 : 0; },
    },
    361: {
        hpStatic: function(p) { return p.unit.weapon.has("Powerhouse") ? 100 : 0; },
    },
    364: {
        rcvStatic: function(p) { return 10; },
    },
    365: {
        rcvStatic: function(p) { return 10; },
    },
    450: {
        atkStatic: function(p) { return p.unit.weapon.has("Fighter") ? 20 : 0; },
    },
    451: {
        atkStatic: function(p) { return p.unit.weapon.has("Fighter") ? 20 : 0; },
    },
    525: {
        rcvStatic: function(p) { return p.unit.element == "PSY" ? 15 : 0; },
    },
    526: {
        rcvStatic: function(p) { return p.unit.element == "PSY" ? 15 : 0; },
    },
    527: {//not working
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    528: {//not working
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    553: {
        atkStatic: function(p) { return p.unit.weapon.has("Slasher") ? 20 : 0; },
    },
    554: {
        atkStatic: function(p) { return p.unit.weapon.has("Slasher") ? 20 : 0; },
    },
    555: {
        rcvStatic: function(p) { return p.unit.weapon.has("Shooter") ? 10 : 0; },
    },
    556: {
        rcvStatic: function(p) { return p.unit.weapon.has("Shooter") ? 10 : 0; },
    },
    559: {
        atkStatic: function(p) { return p.unit.weapon.has("Shooter") ? 20 : 0; },
    },
    560: {
        atkStatic: function(p) { return p.unit.weapon.has("Shooter") ? 20 : 0; },
    },
    640: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Fighter") ? 100 : 0; },
    },
    641: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Fighter") ? 100 : 0; },
    },
    644: {
        rcvStatic: function(p) { return p.unit.element == "INT" ? 20 : 0; },
        atkStatic: function(p) { return p.unit.element == "INT" ? 20 : 0; },
    },
    645: {
        rcvStatic: function(p) { return p.unit.element == "INT" ? 20 : 0; },
        atkStatic: function(p) { return p.unit.element == "INT" ? 20 : 0; },
    },
    646: {
        hpStatic: function(p) { return p.unit.element == "STR" ? 30 : 0; },
    },
    647: {
        hpStatic: function(p) { return p.unit.element == "STR" ? 30 : 0; },
    },
    1172: {
        rcvStatic: function(p) { return p.unit.element == "PSY" ? 15 : 0; },
    },
    1173: {
        rcvStatic: function(p) { return p.unit.element == "PSY" ? 15 : 0; },
    },
    1174: {
        atkStatic: function(p) { return p.unit.weapon.has("Slasher") ? 20 : 0; },
    },
    1175: {
        atkStatic: function(p) { return p.unit.weapon.has("Slasher") ? 20 : 0; },
    },
    1176: {//not working
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    1177: {//not working
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 50 : 0; },
    },
    1183: {
        atkStatic: function(p) { return p.percHP >= 99.0 && p.unit.element == "PSY" ? 75 : 0; },
    },
    1184: {
        atkStatic: function(p) { return p.percHP >= 99.0 && p.unit.element == "PSY" ? 75 : 0; },
    },
    1187: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    1188: {
        atkStatic: function(p) { return 20; },
        rcvStatic: function(p) { return 20; },
        hpStatic: function(p) { return 20; },
    },
    1189: {
        atkStatic: function(p) { return p.unit.element == "QCK" ? 40 : 0; },
    },
    1190: {
        atkStatic: function(p) { return p.unit.element == "QCK" ? 40 : 0; },
    },
    1209: {
        rcvStatic: function(p) { return p.unit.weapon.has("Shooter") ? 10 : 0; },
    },
    1210: {
        rcvStatic: function(p) { return p.unit.weapon.has("Shooter") ? 10 : 0; },
    },
    1211: {
        atkStatic: function(p) { return p.unit.weapon.has("Shooter") ? 20 : 0; },
    },
    1212: {
        atkStatic: function(p) { return p.unit.weapon.has("Shooter") ? 20 : 0; },
    },
    1231: {
        atkStatic: function(p) { return p.unit.weapon.has("Striker") ? 50 : 0; },
    },
    1232: {
        atkStatic: function(p) { return p.unit.weapon.has("Striker") ? 50 : 0; },
    },
    1233: {
        rcvStatic: function(p) { return p.unit.weapon.has("Slasher") ? 30 : 0; },
    },
    1234: {
        rcvStatic: function(p) { return p.unit.weapon.has("Slasher") ? 30 : 0; },
    },
    1255: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Fighter") ? 40 : 0; },
    },
    1256: {
        rcvStatic: function(p) { return p.unit.weapon.has("Driven") ? 10 : 0; },
        atkStatic: function(p) { return p.unit.weapon.has("Driven") ? 10 : 0; },
    },
    1271: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Driven") ? 100 : 0 : 0; },
    },
    1270: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Driven") ? 100 : 0 : 0; },
    },
    1273: {
        hpStatic: function(p) { return 75; },
    },
    1274: {
        hpStatic: function(p) { return 75; },
    },
    1277: {
        rcvAdded: function(p) { return 150; },
    },
    1278: {
        rcvAdded: function(p) { return 150; },
    },
    1317: {
        hpStatic: function(p) { return 75; },
    },
    1318: {
        hpStatic: function(p) { return 75; },
    },
    1321: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Cerebral") ? p.unit.weapon.has("Slasher") || p.unit.weapon.has("Cerebral") ? 75 : 0 : 0 : 0; },
    },
    1322: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Cerebral") ? p.unit.weapon.has("Slasher") || p.unit.weapon.has("Cerebral") ? 75 : 0 : 0 : 0; },
    },
    1363: {
        hpStatic: function(p) { return p.unit.element == "PSY" ? 100 : 0; },
    },
    1364: {
        hpStatic: function(p) { return p.unit.element == "PSY" ? 100 : 0; },
    },
    1367: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1368: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1377: {
        rcvAdded: function(p) { return 125; },
    },
    1378: {
        rcvAdded: function(p) { return 125; },
    },
    1405: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Shooter") ? 100 : 0; },
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Shooter") ? 100 : 0; },
    },
    1406: {
        atkStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Shooter") ? 100 : 0; },
        rcvStatic: function(p) { return p.percHP <= 30.0 && p.unit.weapon.has("Shooter") ? 100 : 0; },
    },
    1435: {
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
    },
    1436: {
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
    },
    1443: {
        hpStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 50 : 0; },
    },
    1444: {
        hpStatic: function(p) { return p.classCount.Powerhouse == 6 ? 150 : 0; },
        atkStatic: function(p) { return p.classCount.Powerhouse == 6 ? 50 : 0; },
    },
    1464: {
        rcvAdded: function(p) { return 100; },
    },
    1465: {
        rcvAdded: function(p) { return 100; },
    },
    1476: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1477: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1507: {
        atkStatic: function(p) { return 15; },
    },
    1508: {
        atkStatic: function(p) { return 15; },
    },
    1510: {
        atkStatic: function(p) { return p.percHP >= 70.0 && p.unit.weapon.has("Striker") ? 20 : 0; },
    },
    1511: {
        atkStatic: function(p) { return p.captain != null ? p.captain.class.has("Powerhouse") ? p.unit.weapon.has("Powerhouse") ? 20 : 0 : 0 : 0; },
    },
    1523: {
        rcvAdded: function(p) { return 124; },
    },
    1524: {
        rcvAdded: function(p) { return 124; },
    },
    1529: {
        atk: function(p) { return p.captain != null ? p.captain.type == "STR" || p.captain.type == "QCK" ? .5 : 1 : 1; },
    },
    1530: {
        atk: function(p) { return p.captain != null ? p.captain.type == "STR" || p.captain.type == "QCK" ? .5 : 1 : 1; },
    },
    1537: {
        hpStatic: function(p) { return p.unit.element == "STR" ? 150 : 0; },
    },
    1538: {
        hpStatic: function(p) { return p.unit.element == "STR" ? 150 : 0; },
    },
    1539: {
        atkStatic: function(p) { return p.unit.element == "INT" ? 50 : 0; },
    },
    1540: {
        atkStatic: function(p) { return p.unit.element == "INT" ? 50 : 0; },
    },
    1574: {//not working
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 : 0; },
    },
    1575: {//not working
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 : 0; },
    },
    1613: {//not working
        staticMult: function(p) { return 2; }
    },
    1614: {//not working
        staticMult: function(p) { return 2; }
    },
    1655: {
        atkStatic: function(p) { return p.unit.element == "QCK" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.element == "QCK" ? 75 : 0; },
    },
    1656: {
        atkStatic: function(p) { return p.unit.element == "QCK" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.element == "QCK" ? 75 : 0; },
    },
    1681: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1682: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1699: {
        atkStatic: function(p) { return p.unit.weapon.has("Fighter") ? 75 : 0; },
    },
    1700: {
        atkStatic: function(p) { return p.unit.weapon.has("Fighter") ? 75 : 0; },
    },
    1728: {
        atkStatic: function(p) { return p.unit.element == "STR" || p.unit.element == "DEX" || p.unit.element == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.element == "STR" || p.unit.element == "DEX" || p.unit.element == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.element == "STR" || p.unit.element == "DEX" || p.unit.element == "QCK" ? 30 : 0; },
    },
    1729: {
        atkStatic: function(p) { return p.unit.element == "STR" || p.unit.element == "DEX" || p.unit.element == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.element == "STR" || p.unit.element == "DEX" || p.unit.element == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.element == "STR" || p.unit.element == "DEX" || p.unit.element == "QCK" ? 30 : 0; },
    },
    1705: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1706: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1752: {
        atkStatic: function(p) { return p.unit.weapon.has("Slasher") ? 20 : 0; },
    },
    1753: {
        atkStatic: function(p) { return p.unit.weapon.has("Slasher") ? 20 : 0; },
    },
    1754: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1755: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
};