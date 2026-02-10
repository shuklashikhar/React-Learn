import Cleanup from "./effects/Cleanup"
import Dependencies from "./effects/Dependencies"
import EffectTiming from "./effects/EffectTiming"
import Bubbling from "./event-forms/Bubbling"
import Focus from "./event-forms/Focus"
import LargeForm from "./event-forms/LargeForm"
import Propagation from "./event-forms/Propagation"
import { RefVsState } from "./event-forms/RefVsState"
import SyntheticEvent from "./event-forms/SyntheticEvent"
import Validation from "./event-forms/Validation"
import ConditionalRender from "./jsx-components/ConditionalRender"
import ExpressionsVsStatements from "./jsx-components/ExpressionsVsStatements"
import Fragments from "./jsx-components/Fragments"
import JsxIsJsx from "./jsx-components/Jsx"
import ListKeys from "./jsx-components/ListKeys"
import Layout from "./patterns/Layout"
import { UserContainer } from "./patterns/UserContainer"
import NoRerender from "./refs/NoRerender"
import PersistRef from "./refs/PersistRef"
import PreviousValue from "./refs/PreviousValue"
import AsyncState from "./rendering/AsyncState"
import BatchingDemo from "./rendering/Batching"
import Parent from "./rendering/Parent"
import Predict from "./rendering/Predict"
import RenderCounter from "./rendering/RenderCounter"
import SnapshotDemo from "./rendering/SnapShot"
import DuplicateState from "./state/DuplicateState"
import LazyInit from "./state/LazyInit"
import LiftState from "./state/LiftState"
function App() {
  return (
     <UserContainer/>
  )
}

export default App
