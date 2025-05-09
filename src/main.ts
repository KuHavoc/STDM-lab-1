function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        interactive().catch(err => {
            console.error(err);
            process.exit(1);
        });
    } else if (args.length === 1) {
        nonInteractive(args[0]);
    }
}

main();

async function interactive() {
    console.log('interactive');
}

function nonInteractive(args: string) {
    console.log(`nonInteractive file path: ${args}`);
}