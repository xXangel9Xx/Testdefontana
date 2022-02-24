import { DefontanaTestComponent } from "../page/defontana-test/defontana-test.component"

const ROUTESAPP: Array<Object>=[
    {path:'', component:DefontanaTestComponent, pathMatch:'full'},
    {path:'**', component:DefontanaTestComponent}
]
export default ROUTESAPP