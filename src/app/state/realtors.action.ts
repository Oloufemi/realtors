
export class SetRealtors {
    static readonly type = 'GET realtors';
    constructor( ) {}
}
export class SetMessages {
    static readonly type = 'GET messages';
    constructor(public readonly agenceId: number, public readonly page: number ) {}
}
export class SetMessageDetails {
    static readonly type = 'GET messages details';
    constructor(public readonly agenceId: number, public readonly messageId: number ) {}
}
export class SetUnreadMessages {
    static readonly type = 'GET unread messages';
    constructor(public readonly agenceId: number ) {}
}