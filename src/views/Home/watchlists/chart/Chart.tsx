import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import { WebView } from 'react-native-webview';
import GS from '../../../../theme/Styles';
import { Stack } from 'react-native-spacing-system';
import ChartTopContent from './ChartTopContent';
import PricesUpdated from '../PricesUpdated';
import Colors from '../../../../theme/Colors';
import { getSessionId, getUserId } from '../../../../store/Store';
import {BASE_URL} from '@env';

type ShortOptions = {
  [key: string]: string;
};

const Chart = () => {
  const [chartType, setChartType] = useState('Candle Stick');
  const [isFilterChartList, setIsFilterChartList] = useState<boolean>(false);
  const [timeType, setTimeType] = useState<string>('1M');
  const [isFilterTimeList, setIsFilterTimeList] = useState<boolean>(false);
  const [htmlContent, setHtmlContent] = useState('');
  const webViewRef = useRef(null);
  const [userId, setUserId] = useState('');
  const [sessionID, setSessionID] = useState('');
  const [chartData, setChartData] = useState<{ volume: number; high: number; low: number; time: string; close: number; open: number; }[]>([]);

  const formattedChartData = chartData.map(
    (item: {time: string; open: any; high: any; low: any; close: any}) => ({
      time: Math.floor(
        new Date(item.time.replace(' ', 'T')).getTime() / 1000,
      ),
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
    }),
  );
  
  const lineChartData = chartData.map((item: {time: string; close: any}) => ({
    time: Math.floor(new Date(item.time.replace(' ', 'T')).getTime() / 1000),
    value: item.close,
  }));

  const options: string[] = [
    '1 min',
    '2 mins',
    '5 mins',
    '10 mins',
    '1 Hour',
    '1 Day',
    '1 Week',
    '1 Month',
  ];

  const shortOptions: ShortOptions = {
    '1 min': '1m',
    '2 mins': '2m',
    '5 mins': '5m',
    '10 mins': '10m',
    '1 Hour': '1H',
    '1 Day': '1D',
    '1 Week': '1W',
    '1 Month': '1M',
  };

  const filterChartOptions: string[] = [
    'Candle Stick',
    'Heikin Ashi',
    'Line',
    'Bar',
  ];

  const handleFilterChartButtonPress = () => {
    setIsFilterChartList(true);
    setIsFilterTimeList(false);
  };

  const handleFilterTimeButtonPress = () => {
    setIsFilterTimeList(true);
    setIsFilterChartList(false);
  };

  const handleFilterChartOptionPress = (option: string) => {
    setChartType(option);
    setIsFilterChartList(false);
  };

  const handleFilterTimeOptionPress = (option: string) => {
    setTimeType(shortOptions[option]);
    setIsFilterTimeList(false);
  };

  const handleOutsidePress = () => {
    setIsFilterTimeList(false);
    setIsFilterChartList(false);
  };

  const generateHtmlContent = (type: string) => {
    if (formattedChartData.length === 0 && lineChartData.length === 0) {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <style>
              body, html {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #000000;
                color: #ffffff;
                overflow: hidden;
                font-size: 16px;
              }
              #container {
                text-align: center;
                font-size:12px;
              }
            </style>
          </head>
          <body>
            <div id="container">No data available</div>
          </body>
        </html>
      `;
    }

    let seriesOptions = {};
    let addSeriesFunction = '';
    let dataString = '';

    switch (type) {
      case 'Candle Stick':
      case 'Heikin Ashi':
      case 'Bar':
        seriesOptions = {
          upColor: '#4CAF50',
          downColor: '#F44336',
          borderDownColor: '#F44336',
          borderUpColor: '#4CAF50',
          wickDownColor: '#F44336',
          wickUpColor: '#4CAF50',
        };
        addSeriesFunction = type === 'Bar' ? 'addBarSeries' : 'addCandlestickSeries';
        dataString = JSON.stringify(formattedChartData);
        break;
      case 'Line':
        seriesOptions = {
          color: '#4CAF50',
          lineWidth: 2,
        };
        addSeriesFunction = 'addLineSeries';
        dataString = JSON.stringify(lineChartData);
        break;
      default:
        addSeriesFunction = 'addCandlestickSeries';
        dataString = JSON.stringify(formattedChartData);
    }

    return `
     <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <style>
            body, html {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              background-color: #000000;
              color: #ffffff;
              overflow: hidden;
            }
            #container {
              width: 100%;
              height: 100%; 
            }
          </style>
          <script src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"></script>
        </head>
        <body>
          <div id="container"></div>
          <script>
            const chart = LightweightCharts.createChart(document.getElementById('container'), {
              width: window.innerWidth,
              height: window.innerHeight,
              background: '#000000',
              textColor: '#ccc',
              layout: {
                backgroundColor: '#ffffff',
                textColor: '#ccc',
                background: {
                  color: '#000000'
                },
              },
              grid: {
                vertLines: {
                  color: '#202020',
                },
                horzLines: {
                  color: '#202020',
                },
              },
              crosshair: {
                mode: LightweightCharts.CrosshairMode.Normal,
              },
              rightPriceScale: {
                borderColor: '#000',
              },
              timeScale: {
                borderColor: '#000',
                timeVisible: true,
                secondsVisible: true,
              },
            });

            const seriesOptions = ${JSON.stringify(seriesOptions)};
            const addSeriesFunction = chart.${addSeriesFunction}.bind(chart);
            const series = addSeriesFunction(seriesOptions);

            const data = ${dataString};
            series.setData(data);

            const lastIndex = data.length - 1;
            chart.timeScale().setVisibleRange({
              from: data[Math.max(0, lastIndex - 50)].time, 
              to: data[lastIndex].time,
            });
            
            // Disable touch and scroll events
            document.getElementById('container').addEventListener('touchstart', function(e) {
              e.preventDefault();
            });
            document.getElementById('container').addEventListener('touchmove', function(e) {
              e.preventDefault();
            });
          </script>
        </body>
      </html>
    `;
  };

  const getChartHistory = (AuthorizationToken: string) => {
    const jsonObj = {
      token: "11536",
      resolution: "1",
      from: "1723520713000",
      to: "1723587300000",
      exchange: "NSE"
    };
  
    fetch(`${BASE_URL}/chart/history`, {
      method: 'POST',
      headers: {
        Authorization: AuthorizationToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObj),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(msg => {
        if (msg.stat === 'Ok') {
          const result = msg.result;
          setChartData(result);
          console.log(chartData);
          setHtmlContent(generateHtmlContent(chartType)); // Move this line here
        } else {
          console.log(msg);
        }
      })
      .catch(error => console.error('History data not connected:', error));
  };
  
  
  useEffect(() => {
    const initializeData = async () => {
      try {
        const userId = await getUserId();
        const sessionId = await getSessionId();
        console.log(sessionId);
        setUserId(userId || '');
        setSessionID(sessionId || '');
  
        const AuthorizationToken = `Bearer ${userId} ${sessionId}`.trim();
        await getChartHistory(AuthorizationToken);
      } catch (error) {
        console.error('Initialization Error:', error);
      }
    };
  
    initializeData();
  }, []); 
    
  useEffect(() => {
    setHtmlContent(generateHtmlContent(chartType));
  }, [chartData, chartType]); 
  

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={CS.chartContainer}>
          <ChartTopContent />
          <Stack size={10} />
          <View>
            <View style={CS.chartTop}>
              <TouchableOpacity
                style={CS.iconContainer}
                onPress={handleFilterChartButtonPress}
                activeOpacity={1}>
                {!isFilterChartList ? (
                  <Image
                    source={require('../../../../../assets/images/candle.jpeg')}
                    style={CS.candleIcon}
                  />
                ) : (
                  <Image
                    source={require('../../../../../assets/images/candle_light.png')}
                    style={CS.candleIconLight}
                  />
                )}
              </TouchableOpacity>
              {isFilterChartList && (
                <View style={CS.filterChartListContainer}>
                  <View style={CS.filterChartList}>
                    {filterChartOptions.map((option, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleFilterChartOptionPress(option)}
                        style={chartType === option ? GS.bg_dark : undefined}>
                        <Text
                          style={[
                            GS.ff,
                            CS.filterChartListItem,
                            chartType === option ? GS.light : undefined,
                          ]}>
                          {option}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
              <TouchableOpacity
                style={[CS.buttonTime, isFilterTimeList && CS.buttonActiveTime]}
                onPress={handleFilterTimeButtonPress}
                activeOpacity={1}>
                <Text
                  style={[
                    GS.ff,
                    CS.textTime,
                    isFilterTimeList && CS.textActiveTime,
                  ]}>
                  {timeType}
                </Text>
              </TouchableOpacity>
              {isFilterTimeList && (
                <View style={CS.listTime}>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleFilterTimeOptionPress(option)}
                      style={
                        timeType === shortOptions[option]
                          ? CS.selectedOptionTime
                          : undefined
                      }>
                      <Text
                        style={[
                          GS.ff,
                          CS.listItemTime,
                          timeType === shortOptions[option]
                            ? CS.selectedOptionTime
                            : undefined,
                        ]}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
          <WebView
            ref={webViewRef}
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={{ flex: 1, ...GS.bg_light }}
          />
        </View>
      </TouchableWithoutFeedback>
      <PricesUpdated />
    </>
  );
};

const CS = StyleSheet.create({
  chartContainer: {
    flex: 1,
    ...GS.bg_dark,
    padding: 15,
  },

  // Chart type filter
  chartTop: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  iconContainer: {
    marginEnd: 10,
    ...GS.bg_1e1e1e,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  candleIcon: {
    height: 25,
    width: 25,
  },
  candleIconLight: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 25,
    width: 25,
    backgroundColor: Colors.light,
  },

  filterChartListContainer: {
    position: 'absolute',
    top: 27,
    left: 2,
    zIndex: 1,
  },
  filterChartList: {
    ...GS.bg_light,
    padding: 2,
    width: 'auto',
  },
  filterChartListItem: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.dark,
  },

  // Time filter
  buttonTime: {
    ...GS.bg_1e1e1e,
    borderRadius: 100,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActiveTime: {
    ...GS.bg_light,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textTime: {
    ...GS.light,
    ...GS.fs12,
  },
  textActiveTime: {
    ...GS.dark,
  },
  listTime: {
    ...GS.bg_light,
    padding: 2,
    borderRadius: 0,
    width: 100,
    position: 'absolute',
    top: 28,
    left: 40,
    zIndex: 1,
  },
  listItemTime: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    ...GS.fs12,
    ...GS.dark,
  },
  selectedOptionTime: {
    ...GS.bg_dark,
    ...GS.light,
  },
});

export default Chart;
