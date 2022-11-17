import dayjs from 'dayjs';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Colors } from '../../assets';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarNoted = () => {
  const [items, setItems] = React.useState({});
  const [selectedDate, setSelectedDate] = React.useState(
    dayjs(new Date()).format('YYYY-MM-DD'),
  );
  const loadItems = day => {
    setTimeout(() => {
      for (let i = 0; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() + 1);
          // eslint-disable-next-line no-lone-blocks
          {
            /* change Data noted from date */
          }
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'HI' + strTime + ' #' + j,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.item}>
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={selectedDate}
        refreshControl={null}
        refreshing={false}
        renderItem={renderItem}
        staticHeader={true}
        renderEmptyDate={() => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.textStyle}>Wow, Look! Nothing!</Text>{' '}
          </TouchableOpacity>
        )}
        theme={{
          agendaKnobColor: Colors.CS_PURPLE,
          agendaDayTextColor: Colors.CS_CALENDAR,
          agendaDayNumColor: Colors.CS_CALENDAR,
          agendaTodayColor: Colors.CS_PURPLE,
          indicatorColor: Colors.CS_CALENDAR,
          textSectionTitleColor: Colors.CS_CALENDAR,
          dotColor: Colors.CS_DISABLE,
          arrowColor: Colors.CS_CALENDAR,
          textDayHeaderFontWeight: 'normal',
          backgroundColor: Colors.TRANSPARENT,
          todayTextColor: Colors.CS_WHITE_MODE,
          calendarBackground: Colors.CS_WHITE,
          selectedDayBackgroundColor: Colors.CS_PURPLE,
          selectedDayTextColor: Colors.CS_WHITE_MODE,
        }}
        onDayChange={day => {
          setSelectedDate(dayjs(day?.dateString).format('YYYY-MM-DD'));
        }}
        firstDay={1}
        disabledByDefault={false}
        showScrollIndicator={true}
        scrollEnabled={true}
        pagingEnabled={true}
        markingType={'custom'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENT,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: Colors.CS_WHITE_MODE,
    justifyContent: 'center',
  },
});

export default CalendarNoted;
