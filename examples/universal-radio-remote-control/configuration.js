module.exports = {
    label: "Home",
    id: "home",
    devices: [{
        label: "Arduino Uno 1",
        id: "arduino1",
        plugin: "microcontroller/arduino",
        actors: [{
            id: "tenPoleDipSwitchSocketRadioRemote",
            label: "Ten pole Dip Switch Socket Radio Remote",
            type: "tenPoleDipSwitchSocketRadioRemote",
            configuration: {}
        }],
        sensors: []
    }],
    services: [],
    eventProcessors: [],
    data: []
};
