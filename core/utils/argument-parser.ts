export type ValidStringArguments = {
}

export type ValidBooleanArguments = {
    production: boolean | string;
    development: boolean | string;
}

export type ValidArguments = ValidBooleanArguments & ValidStringArguments;

export type Arguments = {
    [property in keyof ValidArguments]: ValidArguments[property]
}

export class ArgumentParser {

    public static parse(args: string[]) {
        const parameters = args.splice(2);

        let argumentObject: Partial<Arguments> = {};

        parameters.forEach((param) => {
            if (!param.includes('--')) {
                return;
            }

            param = param.replace(/\-\-/g, '');

            const parts = param.split('=');
            const key = parts[0] as keyof Arguments;
            let value = parts[1] as Arguments[keyof Arguments];
            let trueValue = typeof value === 'undefined' || value === 'true' || value === '' || value;

            (argumentObject[key] as Arguments[keyof Arguments]) = trueValue;
        });

        return argumentObject;
    }
}