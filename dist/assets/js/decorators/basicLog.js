export function basicLog() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--Metodo: ${propertyKey}`);
            console.log(`----Parametros: ${JSON.stringify(args)}`);
            console.log(`----Target: ${JSON.stringify(target)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`----Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
