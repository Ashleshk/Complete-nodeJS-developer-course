import {Permissions,Notifications} from 'expo';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT='---url---';

export default aysnc (() => {
    let previousToken = await AsyncStorage.getItem('pushToken');

    if(previousToken)
    {
        return;
    }else {
        let {status} = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    
       if(status !=='granted'){
           return;
       }

       let token =await Notifications.getExponentPushTokenAsync();

      await axios.post(PUSH_ENDPOINT,{token:{token}});
       AsyncStorage.setItem('pushtoken',token);
    }
});