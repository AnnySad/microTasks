import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
export type FilterValuesType = "all" | "active" | "completed";

function AppArray() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todoListID:string, id: string) {
        setTasks({...tasks,[todoListID]: tasks[todoListID].filter(t => t.id != id)})
    }

    function addTask(todoListID:string,title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks,[todoListID]:[newTask,...tasks[todoListID]]})
    }

    function changeStatus(todoListID:string,taskId: string, isDone: boolean) {
        /*let task = tasks[todoListID].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks,[todoListID]:[...tasks[todoListID]]})*/

        setTasks({...tasks,[todoListID]:tasks[todoListID].map(m=>m.id === taskId ?{...m,isDone:isDone} :m)})
    }


    function changeFilter(todoListID:string, value: FilterValuesType) {
        setTodolists(todolists.map(filtered=> filtered.id=== todoListID ? {...filtered, filter:value} : filtered))
    }


    return (
        <div className="App">
            {todolists.map((mapToDo) => {
                    let tasksForTodolist = tasks[mapToDo.id];
                    if (mapToDo.filter === "active") {
                        tasksForTodolist = tasks[mapToDo.id].filter(t => t.isDone === false);
                    }
                    if (mapToDo.filter === "completed") {
                        tasksForTodolist = tasks[mapToDo.id].filter(t => t.isDone === true);
                    }

                    return (
                        <Todolist key={mapToDo.id}
                            todoListID={mapToDo.id}
                            title={mapToDo.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={mapToDo.filter}
                        />
                    )

                }
            )

            }

        </div>
    );
}

export default AppArray;

