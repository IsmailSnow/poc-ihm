export class DescriptifDto {
    contexte: string;
    description: string;

    constructor(contexte: string , desc: string) {
        this.contexte = contexte;
        this.description = desc;
    }
}
