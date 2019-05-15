class University {
    constructor(public name: string, public dept: string){}

    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let mum = new University('mum', 'CS572');
mum.graduation(2019);