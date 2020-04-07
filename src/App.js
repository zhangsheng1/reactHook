/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-02 16:50:20
 * LastEditTime: 2020-04-03 16:48:08
 * Description: 
 */
import React,{ useState  } from "react"
import {Button} from 'antd'
function App() {
    const [count, setCount] = useState(0)
    return(
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
     )
  }

export default App