export function basicLog () {
    return function (
        target : any,
        propertyKey : string,
        descriptor : PropertyDescriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args : Array<any>) {
            console.log(`--Metodo: ${propertyKey}`);
            console.log(`----Parametros: ${JSON.stringify(args)}`);
            console.log(`----Target: ${JSON.stringify(target)}`);

            const retorno = metodoOriginal.apply(this, args);
            console.log(`----Retorno: ${JSON.stringify(retorno)}`);

            return retorno;
            }
        return descriptor
    }
}