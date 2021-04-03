import { Route,Switch,Redirect, useRouteMatch } from 'react-router-dom';
import ListStudents from '../../components/pages/students/index';
import Student from '../../components/pages/students/student';



const Students = () => {
    const { url } = useRouteMatch();

    return <Switch>
        <Route
            path={`${url}/list`}
            exact={true}
            component={ ListStudents }
        />    
        <Route
            path={`${url}/student`}
            exact={true}
            component={ Student }
        />

        <Redirect to='/'/>
    </Switch>
}


export default Students;