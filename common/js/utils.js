(function () {

    var FODDER_REGEX = new RegExp('(' + [
        'Group', 'Ensign Navy HQ', 'Armed \\w+ Unit', '[BM]illions Baroque', 'Eneru\'s Elect',
        'Skypiea (Guard|Enforcer)', 'Shandian',
        '(Seaman|Major|Corporal) Navy', 'Hoodlum.+Bounty Hunter', 'Black Cat Pirates',
        'Arlong crewmember', 'Gunner|Cannoneer|Assassin Master', '^(Female|Giant).*Pirates',
        '(Soldier|General) Zombie.*Shadow', 'Wild Zombie', 'Street Punk', 'Kuja Warriors', '(Naginata|Rifle|Saber|Bazooka|Knuckle) (Corporal|Major)', '(Strong|Speedy|Crafty|Hate-Filled|Egotistical) Soldier Zombie', '(Powerful|Sneaky|Blazing) General Zombie', '(Quick-Draw|Scheming|Technical|Quick-Strike|Strong-Arm|Bold) Gunman', '(Suppressor|Emergency|Perimeter) Jailer', '(Contemplative|All-Action) Guard', 'Fishman (Guard|Outlaw)', 'Punk Hazard Gas Mask Patrol Soldier', 'Punk Hazard Patrol Troop Corps'
    ].join(')|(') + ')', 'i');

    var utils = {};

    var fullNames = null, reverseEvoMap = null;

    /* * * * * Unit control * * * * */

    var parseUnit = function (element, n) {
        if (element.length === 0)
            return [];
        if (element[10] && element[10].constructor != Array)
            element[10] = [element[10], element[10], element[10]];
        var result = {
            id: element[0], name: element[1],
            weapon: element[2], element: element[3],
            rarity: element[4], cost: element[5],
            HP: element[6], MP: element[7],
            ATK: element[8], Critical: element[9],
            Defense: element[10]
            },
            number: n
        };
        if (element.indexOf(null) != -1)
            result.incomplete = true;
        if (result.combo === null || result.combo === 0)
            result.preview = true;
        return result;
    };

    utils.parseUnits = function (skipIncomplete) {
        if (skipIncomplete) {
            window.units = window.units.map(function (x, n) {
                if (x.indexOf(null) == -1)
                    return x;
                var viable = x[9] && x[10] && x[11] && x[12] && x[13] && x[14];
                return viable ? x : [];

            });
        }
        window.units = window.units.map(parseUnit);
    };

    utils.getFullUnitName = function (id) {
        if (fullNames === null) {
            fullNames = units.map(function (x, n) {
                if (!x.name)
                    return null;
                return x.name + (window.aliases[n + 1] ? ' ' + window.aliases[n + 1].join(', ') : '');
            });
        }
        return fullNames[id - 1];
    };

    /* * * * * Thumbnail control * * * * */
    
    utils.getGlobalThumbnailUrl = function (n) {
        if (n === null || n === undefined || (window.units && window.units[n - 1].incomplete))
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1');
        if (id == 530){
            return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f0529.png';
        }
        else if (id == 529){
            return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f0530.png';
        }
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/sites/2/f' + id + '.png';
    };

    utils.getThumbnailUrl = function (n) {
        if (n === null || n === undefined || (window.units && window.units[n - 1].incomplete))
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1'); // missing aokiji image
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/f' + id + '.png';
    };

    utils.getBigThumbnailUrl = function (n) {
        if (window.units[n - 1].incomplete)
            return 'https://onepiece-treasurecruise.com/wp-content/themes/onepiece-treasurecruise/images/noimage.png';
        var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1'); // missing aokiji image
        return 'https://onepiece-treasurecruise.com/wp-content/uploads/c' + id + '.png';
    };

    utils.getThumbnailTitle = function (arg) {
        if (arg === null || arg === undefined)
            return null;
        if (arg.constructor == Object) {
            return [arg.name, 'HP: ' + arg.HP, 'MP: ' + arg.MP, 'ATK: ' + arg.ATK, 'Critical: ' + arg.Critical, 'Defense: ' + arg.Defense].join('\n');
        }
        var unit = (arg.constructor == Object ? arg : units[arg]);
        return [unit.name, 'HP: ' + unit.HP, 'MP: ' + unit.MP, 'ATK: ' + unit.ATK, 'Critical: ' + unit.Critical, 'Defense: ' + unit.Defense].join('\n');
    };

    utils.isClickOnOrb = function (e, target) {
        var x = e.offsetX, y = e.offsetY;
        var distance = Math.sqrt(Math.pow(x - 20, 2) + Math.pow(y - 21, 2));
        return distance < 13;
    };

    /* * * * * Misc functions * * * * */

    /* given an array of arrays, generates the cartesian product of
     * all the arrays contained within the root array
     * eg f([[1],[2,3],[4,5,6]]) -> [[1,2,4],[1,2,5],[1,2,6],[1,3,4],[1,3,5],[1,3,6]] */
    utils.arrayProduct = function (data) {
        var result = data.reduce(function (prev, next) {
            if (next.length === 0)
                return prev;
            return next.map(function (n) {
                return prev.map(function (p) {
                    return p.concat([n]);
                });
            }).reduce(function (prev, next) {
                return prev.concat(next);
            }, []);
        }, [[]]);
        return result.filter(function (r) {
            return r.length > 0;
        });
    };

    utils.getOppositeType = function (type) {
        if (!type)
            return null;
        type = type.toUpperCase();
        if (type == 'STR')
            return 'QCK';
        if (type == 'QCK')
            return 'DEX';
        if (type == 'DEX')
            return 'STR';
        if (type == 'PSY')
            return 'INT';
        return 'PSY';
    };

    /* * * * * Searching/filtering * * * * */

    utils.getRegex = function (query) {
        try {
            return new RegExp(query, 'i');
        } catch (e) {
            return new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'i');
        }
    };

    utils.generateSearchParameters = function (query) {
        if (!query || query.trim().length < 2)
            return null;
        query = query.toLowerCase().trim();
        var result = {matchers: {}, ranges: {}, query: []};
        var ranges = {}, params = ['hp', 'atk', 'stars', 'cost', 'growth', 'rcv', 'id', 'slots', 'combo', 'exp', 'minCD', 'maxCD'];
        var regex = new RegExp('^((type|class):(\\w+\\s{0,1}\\w+)|(' + params.join('|') + ')(>|<|>=|<=|=)([-?\\d.]+))$', 'i');
        var tokens = query.replace(/\s+/g, ' ').split(' ').filter(function (x) {
            return x.length > 0;
        });
        tokens.forEach(function (x) {
            x = x.replace("_", ' ');
            var temp = x.match(regex);
            if (!temp) // if it couldn't be parsed, treat it as string
                result.query.push(x);
            else if (temp[4] !== undefined) { // numeric operator
                var parameter = temp[4],
                        op = temp[5],
                        value = parseFloat(temp[6], 10);
                if (parameter === 'exp')
                    parameter = 'maxEXP';
                if (!result.ranges.hasOwnProperty(parameter)) {
                    if (op === '>' || op === '>=') {
                        result.ranges[parameter] = [0, Number.POSITIVE_INFINITY];
                    } else if (op === '<' || op === '<=') {
                        result.ranges[parameter] = [Number.NEGATIVE_INFINITY, 0];
                    }else{
                         result.ranges[parameter] = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
                    }
                }
                if (op === '=') {
                    result.ranges[parameter][0] = value;
                    result.ranges[parameter][1] = value;
                } else if (op === '<') {
                    result.ranges[parameter][1] =  value - 1;
                } else if (op === '<=') {
                    result.ranges[parameter][1] = value;
                } else if (op === '>') {
                    result.ranges[parameter][0] =  value + 1;
                } else if (op === '>=') {
                    result.ranges[parameter][0] =  value;
                }
            } else // matcher
                result.matchers[temp[2]] = new RegExp(temp[3], 'i');
        });
        if (result.query.length > 0)
            result.query = utils.getRegex(result.query.join(' '));
        else
            result.query = null;
        return result;
    };

    utils.isFodder = function (unit) {
        return (unit.stars < 2 && !utils.isEvolverBooster(unit)) || FODDER_REGEX.test(unit.name);
    };

    utils.isEvolverBooster = function (unit) {
        return /Evolver|Booster/i.test(unit.class);
    };

    utils.searchBaseForms = function (id) {
        if (!reverseEvoMap)
            generateReverseEvoMap();
        if (!reverseEvoMap[id])
            return null;
        return reverseEvoMap[id];
    };

    var updateEvoMap = function (from, to, via) {
        if (!reverseEvoMap[to])
            reverseEvoMap[to] = {};
        if (!reverseEvoMap[to][from])
            reverseEvoMap[to][from] = [];
        reverseEvoMap[to][from].push(via);
    };

    var generateReverseEvoMap = function () {
        reverseEvoMap = {};
        for (var evo in evolutions) {
            var from = parseInt(evo, 10);
            if (evolutions[evo].evolution.constructor != Array)
                updateEvoMap(from, evolutions[evo].evolution, evolutions[evo].evolvers);
            else
                for (var i = 0; i < evolutions[evo].evolution.length; ++i)
                    updateEvoMap(from, evolutions[evo].evolution[i], evolutions[evo].evolvers[i]);
        }
    };

    /* * * * * Body * * * * */

    window.Utils = utils;

})();
