//dto - data transfer object

module.exports = class UserDto { //dto - data transfer object
    username;
    email;
    id;
    isActivated;

    constructor(model){
        this.username = model.username;
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
    }
}