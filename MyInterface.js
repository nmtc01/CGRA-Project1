/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        this.gui.add(this.scene, 'day_night', this.scene.timeOfTheDay).name('Time of the day').onChange();
        this.gui.add(this.scene, 'textures').name('Textures ON/OFF');

        return true;
    }
}