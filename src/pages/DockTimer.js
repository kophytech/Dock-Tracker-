import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import FormCustomInput from '../component/FormCustomInput';
import CustomInput2 from '../component/CustomInput2';
import {HP, WP} from '../component/util';
import CountDown from 'react-native-countdown-component';
import CustomButton from '../component/CustomButton';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../Utils';

function roundUpToPrecision(n, d) {
  var round = n.toPrecision(d);

  if (round === n.toString()) {
    return n;
  }

  return +(
    n +
    0.5 * Math.pow(10, Math.floor(Math.log(n) * Math.LOG10E) - 1)
  ).toPrecision(d);
}
const DockTimer = props => {
  const [pCount, setPCount] = useState(0);
  const [cCount, setCount] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [hours, setHours] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  let [pauseCount, setPauseCount] = useState(0);
  const [pause, setPause] = useState(true);

  const [pausButtonTimer, setpausButtonTimer] = useState(null);
  const [user, setUser] = useState('');

  let result = hours * 60 * 60 + minutes * 60;
  const Calculation = () => {
    let pack = pCount / 7.3;
    let countainer = cCount / 0.2;
    let result = pack + countainer;
    result = result / 60;
    setHours(Math.floor(result));
    const str = result.toString();
    if (str.indexOf('.') != -1) {
      //check if has decimal
      var decimalOnly = parseFloat(Math.abs(result).toString().split('.')[1]);
      let l = (decimalOnly * 60) / 100;
      let kl = roundUpToPrecision(l, 2);
      setMinute(parseInt(kl, 10).toString().substr(0, 2));
    } else {
      setMinute(0);
    }
  };
  const onStart = () => {
    if (pCount == '' || pCount == 0 || cCount == 0 || cCount == '') {
      Alert.alert('Please Kindly check your input field');
    } else {
      setPage(1);
    }
  };

  const PauseTimer = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-const-assign
      setPauseCount(++pauseCount);
    }, 1000);
  };

  const PauseAction = () => {
    setPause(current => !current);
    PauseTimer();
  };

  // console.log(PauseTimer(), 'ss');
  const getDataValue = async () => {
    let j = await AsyncStorage.getItem('userDetails');
    setUser(JSON.parse(j)?.data?.email, 'jjjkkjjkjjjjjjjjj');
  };

  // convert seconds to hour minutes and seconds
  function secondsToTime(e) {
    const h = Math.floor(e / 3600)
        .toString()
        .padStart(2, '0'),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, '0'),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, '0');

    return h + ':' + m + ':' + s;
    //return `${h}:${m}:${s}`;
  }

  React.useEffect(() => {
    Calculation();
    getDataValue();
  }, [pCount, cCount, pauseCount]);

  const userLogin = async () => {
    setLoading1(true);
    return axios
      .post(`${API_URL}/send`, {
        name: Math.random(),
        countainer_count: cCount,
        package_count: pCount,
        person_name: '2',
        empty_trailzer: hours,
        pause_count: sequence,
        email: user,
      })
      .then(item => {
        // AsyncStorage.setItem('userDetails', item);
        setLoading(false);
        setLoading1(false);

        props.navigation.navigate('Thank', {
          params: 'Successfully Registered.. Kindly Login',
        });
      })
      .catch(error => {
        console.log(error.response.data, 'error');
        setLoading(false);
        Alert.alert('Kindly check your details... Something went wrong,');
      });
  };

  // pause and resume
  const [sequence, setSequence] = useState(0);
  const intervalRef = React.useRef();

  const interval = () => {
    intervalRef.current = setInterval(() => {
      setSequence(prevSequence => prevSequence + 1);
    });
  };

  useEffect(() => {
    const intervalId = intervalRef.current;

    // also clear on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const [checkIfPause, setcheckIfPause] = useState(null);
  useEffect(() => {
    if (pausButtonTimer == true) {
      setPause(true);
      clearInterval(intervalRef.current);
    }
  }, [pausButtonTimer]);
  const plant = () => {
    setpausButtonTimer(false);
    setPause(false);
    interval();
  };

  return (
    <View style={styles.container}>
      {page == 0 && (
        <View>
          <View style={{width: WP(95), alignSelf: 'center', top: WP(14)}}>
            <CustomInput2
              lablelText="Enter package count"
              onChangeText={txt => setPCount(txt)}
            />
            <CustomInput2
              lablelText="Enter container count"
              onChangeText={txt => setCount(txt)}
            />
          </View>
          <Text
            style={{
              color: '#AAAEB9',
              top: HP(5),
              left: WP(3),
              fontSize: WP(5),
              marginVertical: WP(6),
            }}
          >
            Time to empty trailer
          </Text>

          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                top: WP(6),
                left: WP(2),
                fontSize: WP(5),
              }}
            >
              {hours} Hours | {minutes} MINUTES{' '}
            </Text>
          </View>
          <View style={{marginTop: WP(19), left: WP(2)}}>
            <CustomButton
              btnName={'Starts'}
              backgroundColor="#FFA500"
              onPress={() => onStart()}
            />
          </View>
        </View>
      )}

      {page == 1 && (
        <View style={{top: WP(10)}}>
          <CountDown
            until={result}
            onFinish={() => {}}
            onPress={() => {}}
            size={20}
            running={pause}
            timeLabelStyle={{color: '#AAAEB9'}}
            digitStyle={{backgroundColor: '#46505D'}}
            digitTxtStyle={{color: 'white'}}
            // timeToShow={['H', 'M']}
            // timeLabels={{m: null, s: null}}
          />

          <>
            <View
              style={{
                marginTop: WP(13),
                flexDirection: 'row',
                width: WP(85),
                left: WP(12),
                justifyContent: 'space-between',
              }}
            >
              <View>
                <CustomButton
                  btnName={'BREAK'}
                  backgroundColor={pause ? '#FFA500' : 'red'}
                  onPress={plant}
                  width={WP(40)}
                />
              </View>
              <View>
                <CustomButton
                  btnName={'RESUME'}
                  backgroundColor="#FFA500"
                  width={WP(40)}
                  onPress={() => setpausButtonTimer(true)}
                />
              </View>
            </View>
          </>

          <View style={{marginTop: WP(18), alignSelf: 'center'}}>
            <Text style={styles.breakText}>Total break time taken</Text>
            <Text style={styles.breakText2}>
              {secondsToTime(sequence)}seconds
            </Text>
          </View>

          <View style={{marginTop: WP(33), alignSelf: 'center'}}>
            <CustomButton
              btnName={
                loading1 ? (
                  <ActivityIndicator color="white" />
                ) : (
                  'FINISH TRAILER'
                )
              }
              backgroundColor="#FFA500"
              onPress={() => userLogin()}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default DockTimer;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232F3E',
    flex: 1,
  },
  breakText: {
    color: '#AAAEB9',

    fontSize: WP(4),
  },
  breakText2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: WP(5),
  },
});
