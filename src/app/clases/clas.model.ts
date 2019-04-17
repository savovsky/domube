
export interface Clas {
    id: string;
    title: string;
    imageUrl: string;
}

export class Clas {
    constructor(
      public id = '',
      public title = '',
      public imageUrl = ''
    ) { }
}
