export class pagSettings {
    constructor() {
        this.offset = 0;
        this.limit = 20;
    }
    incrementDefaultParams() {
        if (this.canGetPokemons()) {
            this.offset += this.limit;
        }
    }
    canGetPokemons() {
        if (this.offset === 480) {
            this.limit = 15;
        }
        return this.offset < 495;
    }
    getOffset() {
        let tempOffset = this.offset;
        return tempOffset;
    }
    getLimit() {
        let tempLimit = this.limit;
        return tempLimit;
    }
}
