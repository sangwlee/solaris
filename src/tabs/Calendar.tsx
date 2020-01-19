import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goAuth, goHome } from '../navigation'
import { USER_KEY } from '../config'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class CalendarTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          // Initially visible month. Default = Date()
          current={'2020-01-17'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2020-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2020-01-31'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    width: '100%',
    height: '100%',
  },
  calendar: {
    position: 'relative',
    top: '20%',
  }
})