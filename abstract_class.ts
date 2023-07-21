abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string) { }
    abstract getFont(): void
    getReelTime(): number{
        return 8;
    }
}

class Instagram extends TakePhoto{
    constructor(public cameraMode: string,
        public filter: string,
        public burst: number) { 
        super(cameraMode, filter)
    }
    getFont(): void {
        console.log('Times New Roman')
    }
 }

const feature1 = new Instagram(`portrait`, 'monochrome', 5);
console.log(feature1);
console.log(feature1.getReelTime());

export { };