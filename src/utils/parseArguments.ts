export const parseArguments = (query: string, parameters: any[]): [string, any[]] => {
    const regex = /@(\w+)/g;
    const convertedQuery = query.replace(regex, (_match, paramName) => {
        const paramValue = parameters[paramName];

        if (paramValue === undefined) throw new Error(`Parameter ${paramName} is missing.`);
        
        const wrappedValue = typeof paramValue === 'string' ? `'${paramValue}'` : paramValue;
        return wrappedValue;
    });

    return [convertedQuery, parameters];
};