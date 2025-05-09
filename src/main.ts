import interactive from './interactive';
import nonInteractive from './nonInteractive';

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
