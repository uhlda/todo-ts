import * as React from 'react';
import Footer from './Footer';
import AddTodoForm from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends React.Component {
  render() {
    return(
      <div>
        <AddTodoForm />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App; 
