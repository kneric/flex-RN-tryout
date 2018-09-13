import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Board>

      </Board>
    );
  }
}

const boardGenerator = (num) => {
  var mainBoard = []  
  var row = []
  for (var i = num * num; i >= 1; i--){
    if (row.length === num){
      mainBoard.push(row)
      row = []
    } 
    if (mainBoard.length % 2 !== 0){
      row.unshift(i) // BALIK
    } else {
      row.push(i)
    }
  }
  mainBoard.push(row)
  return mainBoard
}

const col = () => {
  
}

class Board extends Component {
  constructor(props) {
    super(props)
  }
   render() {
     return (
      <View style={styles.container}>
        <View style={styles.board}>
          {
            boardGenerator(5).map((row, index) => {
              return (
                <View style={styles.row}>
                  {row.map((col) => {
                    return (
                      <View style={styles.col}>
                        <Text style={{ color: "red" }}>{col}</Text>
                      </View>
                    )
                  })}
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}

 // define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1862ad',
  },
  board: {
    height: 300,
    width: 300,
    borderWidth: 1,
    borderColor: 'black'
  },
  row: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row-reverse',
    flex: 1
  },
  col: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'black'
  }
});
