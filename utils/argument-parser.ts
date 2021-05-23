export class ArgumentParser {

    public static parse(args: string[]) {
        const parameters = args.splice(2);
        console.log(parameters);

        const argumentObject: { [key: string]: string | boolean } = {};

        parameters.forEach(param => {
            if (!param.includes('--')) {
                return;
            }

            param = param.replace(/\-\-/g, '');

            const parts = param.split('=');
            const key = parts[0];
            let value = parts[1];

            let trueValue = typeof value === 'undefined' || value === 'true' || value === '' || value;
            argumentObject[key] = trueValue;
        });

        return argumentObject;
    }
}