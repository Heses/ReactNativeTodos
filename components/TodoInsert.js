// components/TodoInsert.js
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState(''); //useStata hook 이용해서 사용자가 입력한 텍스트 값의 상태를 관리

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem); //newTodoItem(입력한 값)을 전달 받아 목록에 추가
    setNewTodoItem(''); //입력창을 공백으로 초기화
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;