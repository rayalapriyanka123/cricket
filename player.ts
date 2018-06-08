export class Player 
{
    constructor(private name: string) {
    }
    get playerName(): string {
        return this.name;
    }
}