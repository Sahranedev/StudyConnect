import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DateItemProps } from '../interfaces/Date';

const DateItem = ({ date, isToday }: DateItemProps) => {
    const options = { weekday: 'short', day: 'numeric', month: 'numeric', year: 'numeric' };
    const dayName = date.toLocaleString('fr-FR', options).split(' ')[0]; 
    const dayNameStyle = isToday ? styles.textBold : styles.textSmall;
    const dateNumberStyle = isToday ? styles.textLarge : styles.textSmall;
    const dateCircleStyle = isToday ? [styles.circle, styles.circleToday] : styles.circle;
  
    return (
      <View style={styles.dateItem}>
        <Text style={dayNameStyle}>{dayName}</Text>
        
        <View style={dateCircleStyle}>
          <Text style={dateNumberStyle}>{date.getDate()}</Text>
        </View>
      </View>
    );
  };

function DateAfficheur() {
  const today = new Date();
  const dates = [];

  for (let i = -3; i <= 3; i++) {
    const newDate = new Date();
    newDate.setDate(today.getDate() + i);
    dates.push(newDate);
  }

  return (
    <View style={styles.container}>
      {dates.map((date, index) => (
        <DateItem key={index} date={date} isToday={date.toDateString() === today.toDateString()} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    dateItem: {
      alignItems: 'center',
      marginHorizontal: 5,
      marginBottom: 10,
    },
    textSmall: {
      fontSize: 12,
    },
    textLarge: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    textBold: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    circle: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: 'gray',
    },
    circleToday: {
      backgroundColor: '#FF0C55',
    },
  });

export default DateAfficheur;
