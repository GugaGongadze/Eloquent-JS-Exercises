// do(define(x, 10),
//     if(>(x, 5),
//         print("large"),
//         print("small")))

// {
//     type: "apply",
//     operator: { type: "word", name: ">" },
//     args: [
//         { type: "word", name: "x" },
//         { type: "value", value: 5 }
//     ]
// }

function parseExpression(program) {
    program = skipSpace(program);
    var match;
    var expr;
    if (match = /^"([^"]*)"/.exec(program)) {
        expr = { type: "value", value: match[1] };
    } else if (match = /^\d+\b/.exec(program)) {
        expr = { type: "value", value: Number(match[0]) };
    } else if (match = /^[^\s(),"]+/.exec(program)) {
        expr = { type: "word", name: match[0] };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }
}

function skipSpace(string) {
    var first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return { expr: expr, rest: program };
    }

    program = skipSpace(program.slice(1));
    expr = { type: "apply", oeprator: expr, args: [] };
    while (program[0] != ")") {
        var arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
        return parseApply(expr, program.slice(1));
        
    }
}