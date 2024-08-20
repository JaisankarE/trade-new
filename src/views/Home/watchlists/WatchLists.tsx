import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Colors from '../../../theme/Colors';
import {Stack} from 'react-native-spacing-system';
import Default from './Default';
import Icon from 'react-native-vector-icons/FontAwesome';
import GS from '../../../theme/Styles';
import PricesUpdated from './PricesUpdated';
import NiftyFifty from './NiftyFifty';
import NSEFutures from './NSEFutures';
import MCXFutures from './MCXFutures';
import DisableGroupingModal from './DisableGroupingModal';
import CreateNewModal from './CreateNewModal';

type NavProps = {
  navigation: NavigationProp<any>;
};

const WatchLists = ({navigation}: NavProps) => {
  const [selectedSymbolOption, setSelectedSymbolOption] =
    useState<string>('Default');
  const [isSymbolList, setIsSymbolList] = useState<boolean>(false);
  const [selectedFilterOption, setSelectedFilterOption] =
    useState<string>('Custom');
  const [isFilterList, setIsFilterList] = useState<boolean>(false);
  const [selectedEyeOption, setSelectedEyeOption] = useState<string>('Mini');
  const [isEyeList, setIsEyeList] = useState<boolean>(false);

  const symbolOptions: string[] = [
    'Default',
    'Nifty 50',
    'NSE Futures',
    'MCX Futures',
  ];
  const filterOptions: string[] = [
    'Custom',
    'A-Z',
    'Z-A',
    '% Changes ▲',
    '% Changes ▼',
    'Favourites *',
  ];
  const eyeOptions: string[] = ['Mini', 'Summary', 'Heat Map'];

  const handleSymbolButtonPress = () => {
    setIsSymbolList(true);
    setIsFilterList(false);
    setIsEyeList(false);
  };
  const handleFilterButtonPress = () => {
    setIsSymbolList(false);
    setIsFilterList(true);
    setIsEyeList(false);
  };
  const handleEyeButtonPress = () => {
    setIsSymbolList(false);
    setIsFilterList(false);
    setIsEyeList(true);
  };

  const handleSymbolOptionPress = (option: string) => {
    setSelectedSymbolOption(option);
    setIsSymbolList(false);
  };
  const handleFilterOptionPress = (option: string) => {
    setSelectedFilterOption(option);
    setIsFilterList(false);
  };
  const handleEyeOptionPress = (option: string) => {
    setSelectedEyeOption(option);
    setIsEyeList(false);
  };

  const handleOutsidePress = () => {
    setIsSymbolList(false);
    setIsFilterList(false);
    setIsEyeList(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={CS.watchListsContainer}>
        <Stack size={10} />
        <View style={CS.row}>
          <TouchableOpacity
            // onPress={handleSymbolButtonPress}
            activeOpacity={1}
            style={CS.dropDownOne}>
            <Text style={CS.dropDownText}>
              {selectedSymbolOption}
            </Text>
            <View style={CS.dropDownIcon}>
              <Icon
                name="angle-down"
                style={[CS.downArrow]}
                size={10}
              />
            </View>
          </TouchableOpacity>
          {isSymbolList && (
            <View style={CS.symbolListContainer}>
              <View style={CS.symbolList}>
                {symbolOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSymbolOptionPress(option)}
                    style={
                      selectedSymbolOption === option ? GS.bg_dark : undefined
                    }>
                    <Text
                      style={[ GS.ff,
                        CS.symbolListItem,
                        selectedSymbolOption === option ? GS.light : undefined,
                      ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={handleOutsidePress}>
                  <CreateNewModal />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={CS.icons}>
            <View style={CS.iconContainer}>
              <Icon name="plus" style={CS.icon} size={14} />
            </View>
            <View style={CS.iconContainer}>
              <Icon name="pencil" style={CS.icon} size={14} />
            </View>
            <TouchableOpacity
              style={CS.iconContainer}
              onPress={handleFilterButtonPress}
              activeOpacity={1}>
              <Image
                source={require('../../../../assets/images/filter.jpeg')}
                style={CS.disableGrouping}
              />
            </TouchableOpacity>
            {isFilterList && (
              <View style={CS.filterListContainer}>
                <View style={CS.filterList}>
                  {filterOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleFilterOptionPress(option)}
                      style={
                        selectedFilterOption === option ? GS.bg_dark : undefined
                      }>
                      <Text
                        style={[ GS.ff,
                          CS.filterListItem,
                          selectedFilterOption === option
                            ? GS.light
                            : undefined,
                        ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
            <DisableGroupingModal />
            <TouchableOpacity
              style={CS.iconContainer}
              onPress={handleEyeButtonPress}
              activeOpacity={1}>
              <Icon name="eye" style={CS.icon} size={14} />
            </TouchableOpacity>
            {isEyeList && (
              <View style={CS.eyeListContainer}>
                <View style={CS.eyeList}>
                  {eyeOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleEyeOptionPress(option)}
                      style={
                        selectedEyeOption === option ? GS.bg_dark : undefined
                      }>
                      <Text
                        style={[GS.ff,
                          CS.eyeListItem,
                          selectedEyeOption === option ? GS.light : undefined,
                        ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>

        {selectedSymbolOption === 'Default' && (
          <Default navigation={navigation} />
        )}
        {selectedSymbolOption === 'Nifty 50' && (
          <NiftyFifty navigation={navigation} />
        )}
        {selectedSymbolOption === 'NSE Futures' && (
          <NSEFutures navigation={navigation} />
        )}
        {selectedSymbolOption === 'MCX Futures' && (
          <MCXFutures navigation={navigation} />
        )}
        <PricesUpdated />
      </View>
      
    </TouchableWithoutFeedback>
  );
};

const CS = StyleSheet.create({
  watchListsContainer: {
    flex: 1,
    ...GS.bg_dark,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDownOne: {
    flex:3,
    width: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...GS.bg_1e1e1e,
    height: 30,
    paddingLeft: 6,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  dropDownIcon: {
    width: 30,
    flexDirection: 'row',
  },
  downArrow: {
    ...GS.col_949494,
    ...GS.fs20, 
    position: 'relative',
    left: 4,
    paddingLeft:6,
    borderLeftColor:Colors.h949494,
    borderLeftWidth:1
  },
  dropDownText: {
    flex: 1,
    ...GS.col_949494, ...GS.fs14, ...GS.fw400
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex:5,
    gap: 10,
  },
  iconContainer: {
    ...GS.bg_1e1e1e,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    ...GS.col_b9b9b9,
  },
  disableGrouping: {
    height: 20,
    width: 20,
  },

  symbolListContainer: {
    position: 'absolute',
    top: 35,
    left: 2,
    zIndex: 1,
  },
  symbolList: {
    ...GS.bg_light,
    padding: 2,
    width: 125,
  },
  symbolListItem: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.dark,
  },
  createNew: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.col_007AFF,
  },

  filterListContainer: {
    position: 'absolute',
    top: 35,
    left: 108,
    zIndex: 1,
  },
  filterList: {
    ...GS.bg_light,
    padding: 2,
    width: 'auto',
  },
  filterListItem: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.dark,
  },

  eyeListContainer: {
    position: 'absolute',
    top: 35,
    right: 2,
    zIndex: 1,
  },
  eyeList: {
    ...GS.bg_light,
    padding: 2,
    width: 'auto',
  },
  eyeListItem: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.dark,
  },
});

export default WatchLists;
