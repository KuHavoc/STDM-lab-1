import readline from 'readline';

async function interactive(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (prompt: string): Promise<string> => {
        return new Promise(resolve => {
            return new Promise(_ => {
                rl.question(prompt, () => {});
            });
        });
    };

    const getCoefficient = async (name: string): Promise<number> => {
        while (true) {
            const answer = await question(`${name} = `);
            const value = parseFloat(answer);
            if (!isNaN(value) && answer.trim() !== '') {
                return value;
            } else {
                console.log(`Error. Expected a valid real number, got ${answer} instead`);
            }
        }
    };
    getCoefficient('a');
    getCoefficient('b');
    getCoefficient('c');
    rl.close();
}

export default interactive;