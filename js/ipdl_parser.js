/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,13],$V1=[1,12],$V2=[10,12,14],$V3=[1,23],$V4=[1,24],$V5=[1,36],$V6=[1,40];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"ipdl":3,"protocol":4,"EOF":5,"PROTOCOL":6,"NAME":7,"{":8,"protocol_sides":9,"}":10,";":11,"DEBUG":12,"protocol_side":13,"SIDE":14,":":15,"protocol_methods":16,"protocol_method":17,"(":18,")":19,"protocol_parameters":20,"PROMISE":21,"<":22,"protocol_returns":23,">":24,"protocol_return_name":25,",":26,"protocol_parameter_name":27,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"PROTOCOL",7:"NAME",8:"{",10:"}",11:";",12:"DEBUG",14:"SIDE",15:":",18:"(",19:")",21:"PROMISE",22:"<",24:">",26:","},
productions_: [0,[3,2],[4,6],[4,7],[9,1],[9,2],[13,2],[13,3],[13,3],[13,4],[16,2],[16,3],[17,3],[17,4],[17,5],[17,4],[23,1],[23,3],[25,1],[20,1],[20,3],[27,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

    protocols = $$[$0-1];
    debug(protocols.toString());
    this.$ = $$[$0-1];
  
break;
case 2:

    this.$ = new Protocol($$[$0-4], $$[$0-2]);
  
break;
case 3:

    this.$ = new DebugProtocol($$[$0-4], $$[$0-2]);
  
break;
case 4: case 16: case 19:

    this.$ = [$$[$0]];
  
break;
case 5:

    this.$ = aggregate($$[$0], $$[$0-1]);
  
break;
case 6:

    this.$ = new Side($$[$0-1], []);
  
break;
case 7:

    this.$ = new DebugSide($$[$0-1], []);
  
break;
case 8:

    this.$ = new Side($$[$0-2], $$[$0]);
  
break;
case 9:

    this.$ = new DebugSide($$[$0-2], $$[$0]);
  
break;
case 10:

    this.$ = [$$[$0-1]];
  
break;
case 11: case 17: case 20:

    this.$ = aggregate($$[$0-2], $$[$0]);
  
break;
case 12:

    this.$ = new Method($$[$0-2], []);
  
break;
case 13:

    this.$ = new Method($$[$0-3], $$[$0-1]);
  
break;
case 14:

    this.$ = new ReturnMethod($$[$0], $$[$0-2]);
  
break;
case 15:

    this.$ = new ReturnMethod($$[$0], []);
  
break;
case 18:

    this.$ = new Return($$[$0]);
  
break;
case 21:

    this.$ = new Parameter($$[$0]);
  
break;
}
},
table: [{3:1,4:2,6:[1,3],12:[1,4]},{1:[3]},{5:[1,5]},{7:[1,6]},{6:[1,7]},{1:[2,1]},{8:[1,8]},{7:[1,9]},{9:10,12:$V0,13:11,14:$V1},{8:[1,14]},{10:[1,15],12:$V0,13:16,14:$V1},o($V2,[2,4]),{15:[1,17]},{14:[1,18]},{9:19,12:$V0,13:11,14:$V1},{11:[1,20]},o($V2,[2,5]),o($V2,[2,6],{16:21,17:22,7:$V3,21:$V4}),{15:[1,25]},{10:[1,26],12:$V0,13:16,14:$V1},{5:[2,2]},o($V2,[2,8]),{11:[1,27]},{18:[1,28]},{22:[1,29]},o($V2,[2,7],{17:22,16:30,7:$V3,21:$V4}),{11:[1,31]},o($V2,[2,10],{17:22,16:32,7:$V3,21:$V4}),{7:$V5,19:[1,33],20:34,27:35},{7:$V6,23:37,24:[1,38],25:39},o($V2,[2,9]),{5:[2,3]},o($V2,[2,11]),{11:[2,12]},{19:[1,41]},{19:[2,19],26:[1,42]},o([19,26],[2,21]),{24:[1,43]},{7:$V3,17:44,21:$V4},{24:[2,16],26:[1,45]},o([24,26],[2,18]),{11:[2,13]},{7:$V5,20:46,27:35},{7:$V3,17:47,21:$V4},{11:[2,15]},{7:$V6,23:48,25:39},{19:[2,20]},{11:[2,14]},{24:[2,17]}],
defaultActions: {5:[2,1],20:[2,2],31:[2,3],33:[2,12],41:[2,13],44:[2,15],46:[2,20],47:[2,14],48:[2,17]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  var protocols = null;
  function debug(str) {
    console.log(str);
  }

  function error(str) {
    var output = '\x1b[31m' + str + '\x1b[0m';
    console.log(output);

    throw new Error(str);
  }

  function aggregate(value, rv) {
    var results = [value];
    for (var i = 0; i < rv.length; i++) {
      results.push(rv[i]);
    }

    return results;
  }

  function uppercase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  function DebugProtocol(name, sides) {
    var protocol = new Protocol(name, sides);
    protocol.debug = true;
    return protocol;
  }

  function Protocol(name, sides) {
    if (name[0] !== 'P') {
      error('The protocol name should start with a \'P\'');
    }

    if (name === 'P') {
      error('The protocol name can not just be \'P\'');
    }

    this.name = name;
    this.sides = sides;
    sides.forEach(function(side) {
      if (side === 'both') {
        return;
      }

      side.binding = this.generateBindingFor(side);
    }, this);
  }

  Protocol.prototype.generateBindingFor = function(targetSide) {
    function recv(reject, resolve, args) {};

    function send(name, args) {
      return /* Promise */ this._call(name, args);
    };

    var binding = {};

    this.sides.forEach(function(side) {
      var oppositeSide = (side.name !== targetSide.name);

      side.methods.forEach(function(method) {
        var name = uppercase(method.name);

        if (!oppositeSide || side.name === 'both') {
          binding['recv' + name] = recv;
        }

        if (oppositeSide || side.name === 'both') {

          binding['send' + name] = function() {
            var args = Array.prototype.slice.call(arguments);

            var parameters = {};
            method.parameters.forEach(function(parameter) {
              parameters[parameter.name] = args.shift();
            });

            return send.call(this, name, parameters);
          }
        }
      });
    });

    return binding;
  };

  Protocol.prototype.toString = function() {
    var str = '';
    if (this.debug) {
      str += 'DebugProtocol: ';
    } else {
      str += 'Protocol: ';
    }

    str += this.name + '\n';

    this.sides.forEach(function(side) {
      if (side.debug) {
        str += '  DebugSide: ';
      } else {
        str += '  Side: ';
      }
      str += side.name + '\n';

      side.methods.forEach(function(method) {
        str += '    method: ' + method.name + '\n';

        method.parameters.forEach(function(parameter) {
          str += '      parameter: ' + parameter.name + '\n';
        });

        method.returns.forEach(function(rv) {
          str += '      return: ' + rv.name + '\n';
        });
      });
    });

    this.sides.forEach(function(side) {
      str += '\n--- ' + side.name + ' Side ---\n';
      for (var method in this[side.name]) {
        str += '  ' + method + ': ' + this[side.name][method] + '\n';
      }
    }, this);

    return str;
  };

  function DebugReturnMethod(method, returns) {
    var returnMethod = new ReturnMethod(method, returns);
    returnMethod.debug = true;
    return returnMethod;
  }

  function ReturnMethod(method, returns) {
    this.type = 'method';
    this.name = method.name;
    this.parameters = method.parameters;
    this.returns = returns;
  }

  function DebugMethod(name, parameters) {
    var method = new Method(name, parameters);
    method.debug = true;
    return method;
  }

  function Method(name, parameters) {
    this.type = 'method';
    this.name = name;
    this.parameters = parameters;
    this.returns = [];
  }

  function Parameter(name) {
    this.type = 'parameter';
    this.name = name;
  }

  function Return(name) {
    this.type = 'return';
    this.name = name;
  }

  function DebugSide(name, methods) {
    var side = new Side(name, methods);
    side.debug = true;
    return side;
  }

  function Side(name, methods) {
    this.type = 'side';
    this.name = name;
    this.methods = methods;
  }


var oldParser = parser.parse;
parser.parse = function() {
  var args = Array.prototype.slice.call(arguments);
  var rv = oldParser.apply(parser, args);
  return protocols || null;
}

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip characters */
break;
case 1:/* skip comments */
break;
case 2:return 6
break;
case 3:return 21
break;
case 4:return 14
break;
case 5:return 12
break;
case 6:return 7
break;
case 7:return 8
break;
case 8:return 10
break;
case 9:return 18
break;
case 10:return 19
break;
case 11:return 22
break;
case 12:return 24
break;
case 13:return 15
break;
case 14:return 11
break;
case 15:return 26
break;
case 16:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:(\/\*(.|\r|\n)*?\*\/))/,/^(?:protocol\b)/,/^(?:Promise\b)/,/^(?:((window\b)|(worker\b)|(serviceworker\b)|(both\b)))/,/^(?:(debug\b))/,/^(?:[a-zA-Z]+)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:<)/,/^(?:>)/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}

export default parser;
