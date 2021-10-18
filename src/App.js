import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import UserInfo from "./components/UserInfo"
import Home from "./home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book-ticket" component={UserInfo} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App
