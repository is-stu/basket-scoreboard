import { Route } from "wouter"
import { ControlCenter } from "./views/ControlCenter/ControlCenter"
import { Visualization } from "./views/Visualization/Visualization"

export const App = () => {
  return (
    <>
      <Route path="/" component={ControlCenter} />
      <Route path="/visualization" component={Visualization} />
    </>
  )
}
