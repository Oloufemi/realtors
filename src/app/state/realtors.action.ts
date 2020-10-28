
export class GetRealtors {
    static readonly type = 'GET realtors';
    constructor( ) {}
}
export class GetMessages {
    static readonly type = 'GET messages';
    constructor(public readonly agenceId: number, public readonly page: number ) {}
}
export class GetMessageDetails {
    static readonly type = 'GET messages';
    constructor(public readonly agenceId: number, public readonly messageId: number ) {}
}