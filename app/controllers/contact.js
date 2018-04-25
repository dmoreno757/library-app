import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';


export default Controller.extend({
    emailAddress: '',

    messageText: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),

    isDisabled: not('isValid'),

    actions: {
        sendMessage() {
            alert(`Thank you for sending a message: ${this.get('emailAddress')} " " ${this.get('messageText')}`);
            this.set('responseMessage', `Thank you! We've just saved message: ${this.get('emailAddress')}`);
            this.set('messageText', '');
            this.set('emailAddress', '');
        }
    }
});
