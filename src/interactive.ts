import * as readline from 'readline';
import { fmt, printEquation, solve } from "./utils";

async function interactive(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (prompt: string): Promise<string> => {
        return new Promise(resolve => {
            rl.question(prompt, resolve);
        });
    };

    const getCoefficient = async (name: string): Promise<number> => {
        while (true) {
            const answer = await question(`${name} = `);
            const value = parseFloat(answer);
            if (!isNaN(value) && answer.trim() !== '') {
                if (name === 'a' && value === 0) {
                    console.log(`Error. a cannot be 0`);
                    continue;
                }
                return value;
            } else {
                console.log(`Error. Expected a valid real number, got ${answer} instead`);
            }
        }
    };

    const a = await getCoefficient('a');
    const b = await getCoefficient('b');
    const c = await getCoefficient('c');

    rl.close();

    printEquation(a, b, c);
    const roots = solve(a, b, c);
    console.log(`There are ${roots.length} roots`);
    if (roots.length >= 1) console.log(`x1 = ${fmt(roots[0])}`);
    if (roots.length === 2) console.log(`x2 = ${fmt(roots[1])}`);
}

export default interactive;