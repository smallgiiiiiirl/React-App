import { Input, Button, Checkbox, Radiogroup } from "./common";

const tasks = [{ id: 1, label: 'Выучить JS', isDone: true }, { id: 2, label: 'Выучить React', isDone: false }]

const filters = [
  { id: '1', label: 'Done', value: 'done' },
  { id: '2', label: 'Active', value: 'active' },
  { id: '3', label: 'All', value: 'all' },
];

const filterState: string = 'all';

export const App = () => {
  return (
    <div className="App">
      <Input placeholder="Add task" />
      <Button onClick={() => alert("Add smth")}>Add task</Button>
      <Radiogroup items={filters} name="filter" value={filterState} />
      <ul>
        {tasks.filter((task): boolean => {
          if (filterState === "all") {
            return true
          }
          if (filterState === "active") {
            return !task.isDone
          }
          return task.isDone
        })
          .map((task) => (
            <li key={task.id}>
              <Checkbox checked={task.isDone} />
              {task.label}
            </li>
          ))}
      </ul>
    </div>
  );
}

