export class pagSettings {
    private offset = 0;
    private limit = 20;
    
    public incrementDefaultParams () : void {
        if(this.canGetPokemons()) {
            this.offset += this.limit;
        }
    }
    public canGetPokemons () : boolean {
        if(this.offset === 480) {
            this.limit = 15;
        }
        return this.offset < 495;
    }
    public getOffset() : number {
        let tempOffset = this.offset;
        return tempOffset;
    }
    public getLimit() : number {
        let tempLimit = this.limit;
        return tempLimit;
    }
}