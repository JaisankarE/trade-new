import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chart from '../views/Home/watchlists/chart/Chart';
import Colors from '../theme/Colors';
import GS from '../theme/Styles';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

function HelpButton() {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Icon
          name="star-o"
          style={{paddingRight: 20, color: Colors.gray}}
          size={18}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="bell-o"
          style={{paddingRight: 20, color: Colors.gray}}
          size={18}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Icon
          name="help"
          style={{paddingRight: 15, color: Colors.gray}}
          size={18}
        />
      </TouchableOpacity> */}
    </View>
  );
}

function ChartScreen() {
  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
        headerTintColor: Colors.light,
        headerStyle: {backgroundColor: Colors.dark},
        headerTitleStyle: { fontSize:14 },
        headerRight: () => <HelpButton />,
      }}>
      <Stack.Screen
        name="Chart"
        component={Chart}
        options={{title: 'NIFTY 50'}}
      />
    </Stack.Navigator>
  );
}

export default ChartScreen;
