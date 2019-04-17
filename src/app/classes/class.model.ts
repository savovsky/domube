
export interface Class {
    id: string;
    title: string;
    imageUrl: string;
}

export class Class {
    constructor(
      public id = '',
      public title = '',
      public imageUrl = ''
    ) { }
}
