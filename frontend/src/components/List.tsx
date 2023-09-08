import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import axios from 'axios';
import { baseURL } from '../utils/constant';

interface ListProps {
  id: string;
  task: string;
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
  updateMode: (id: string, task: string) => void;
}

const List: React.FC<ListProps> = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/tasks/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEditAlt className="icon" onClick={() => updateMode(id, task)} />
        <BsTrash className="icon" onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;
