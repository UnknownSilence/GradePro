import React from 'react';
import Grades from "./gradebookComponents/Grades"
import Sidebar from './gradebookComponents/sidebar';


class gradeBook extends React.Component {

    state = {
        //period 1 row values
        pr1Class1Grade: undefined,
        pr1Class2Grade: undefined,
        pr1Class3Grade: undefined,
        pr1Class4Grade: undefined,
        pr1Class5Grade: undefined,
        pr1Class6Grade: undefined,
        pr1Class7Grade: undefined,
        //period 2 row values
        pr2Class1Grade: undefined,
        pr2Class2Grade: undefined,
        pr2Class3Grade: undefined,
        pr2Class4Grade: undefined,
        pr2Class5Grade: undefined,
        pr2Class6Grade: undefined,
        pr2Class7Grade: undefined,
        // Quarter 1 row values
        q1Class1Grade: undefined,
        q1Class2Grade: undefined,
        q1Class3Grade: undefined,
        q1Class4Grade: undefined,
        q1Class5Grade: undefined,
        q1Class6Grade: undefined,
        q1Class7Grade: undefined,
        //period 3 row values
        pr3Class1Grade: undefined,
        pr3Class2Grade: undefined,
        pr3Class3Grade: undefined,
        pr3Class4Grade: undefined,
        pr3Class5Grade: undefined,
        pr3Class6Grade: undefined,
        pr3Class7Grade: undefined,
        //period 4 row values
        pr4Class1Grade: undefined,
        pr4Class2Grade: undefined,
        pr4Class3Grade: undefined,
        pr4Class4Grade: undefined,
        pr4Class5Grade: undefined,
        pr4Class6Grade: undefined,
        pr4Class7Grade: undefined,
        // Quarter 2 row values
        q2Class1Grade: undefined,
        q2Class2Grade: undefined,
        q2Class3Grade: undefined,
        q2Class4Grade: undefined,
        q2Class5Grade: undefined,
        q2Class6Grade: undefined,
        q2Class7Grade: undefined,
        //semester exam 1 row values
        se1Class1Grade: undefined,
        se1Class2Grade: undefined,
        se1Class3Grade: undefined,
        se1Class4Grade: undefined,
        se1Class5Grade: undefined,
        se1Class6Grade: undefined,
        se1Class7Grade: undefined,
        //semester 1 row values
        s1Class1Grade: undefined,
        s1Class2Grade: undefined,
        s1Class3Grade: undefined,
        s1Class4Grade: undefined,
        s1Class5Grade: undefined,
        s1Class6Grade: undefined,
        s1Class7Grade: undefined,
        //period 5 row values
        pr5Class1Grade: undefined,
        pr5Class2Grade: undefined,
        pr5Class3Grade: undefined,
        pr5Class4Grade: undefined,
        pr5Class5Grade: undefined,
        pr5Class6Grade: undefined,
        pr5Class7Grade: undefined,
        //period 6 row values
        pr6Class1Grade: undefined,
        pr6Class2Grade: undefined,
        pr6Class3Grade: undefined,
        pr6Class4Grade: undefined,
        pr6Class5Grade: undefined,
        pr6Class6Grade: undefined,
        pr6Class7Grade: undefined,
        // Quarter 3 row values
        q3Class1Grade: undefined,
        q3Class2Grade: undefined,
        q3Class3Grade: undefined,
        q3Class4Grade: undefined,
        q3Class5Grade: undefined,
        q3Class6Grade: undefined,
        q3Class7Grade: undefined,
        //period 7 row values
        pr7Class1Grade: undefined,
        pr7Class2Grade: undefined,
        pr7Class3Grade: undefined,
        pr7Class4Grade: undefined,
        pr7Class5Grade: undefined,
        pr7Class6Grade: undefined,
        pr7Class7Grade: undefined,
        //period 8 row values
        pr8Class1Grade: undefined,
        pr8Class2Grade: undefined,
        pr8Class3Grade: undefined,
        pr8Class4Grade: undefined,
        pr8Class5Grade: undefined,
        pr8Class6Grade: undefined,
        pr8Class7Grade: undefined,
        // Quarter 4 row values
        q4Class1Grade: undefined,
        q4Class2Grade: undefined,
        q4Class3Grade: undefined,
        q4Class4Grade: undefined,
        q4Class5Grade: undefined,
        q4Class6Grade: undefined,
        q4Class7Grade: undefined,
        //semester exam 2 row values
        se2Class1Grade: undefined,
        se2Class2Grade: undefined,
        se2Class3Grade: undefined,
        se2Class4Grade: undefined,
        se2Class5Grade: undefined,
        se2Class6Grade: undefined,
        se2Class7Grade: undefined,
        //semester 2 row values
        s2Class1Grade: undefined,
        s2Class2Grade: undefined,
        s2Class3Grade: undefined,
        s2Class4Grade: undefined,
        s2Class5Grade: undefined,
        s2Class6Grade: undefined,
        s2Class7Grade: undefined,


    }


    componentWillMount() {
        // retrieve firebase data here
    }


    render() {
        return (
            <div>
                <Grades></Grades>
                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default gradeBook;
