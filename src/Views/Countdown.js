import React, { useState, useEffect } from "react";


class CountDowwn extends React.Component{
  state = {
    count : 10
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      })
    }, 1000);
  }
  componentDidUpdate(prevProps, prevSate) {
    if (prevSate.count != this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesup();
      }
    }
      
  }
  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(20);
  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);

    }
  }, [count]);
  return (
    <div>{count} hooks</div>
  )
}



export {CountDowwn, NewCountDown};
