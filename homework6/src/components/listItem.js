import trash from "../assets/images/trash_red.png";
import pencil from "../assets/images/pencil_yellow.png";

export default function ListItem({ list, setList, setShowTasks, item }) {

    const deleteListItem = () => {
        let result = list.filter((i) => {
            return i.id !== item.id;
        })

        setList(result);
        setShowTasks(result);
    }

    const handleCheck = (item) => {
        item.isCompleted = !item.isCompleted;
        let result = list;
        let index = result.indexOf(item);
        result[index] = item;

        setList(result);
        setShowTasks(result);
    }

    return (
        <div className="item">
            <p>
                {item.text}
            </p>
            <div className="cud">
                <input type="checkbox"
                    onClick={() => handleCheck(item)}
                    defaultChecked={item.isCompleted}
                />
                <img src={pencil} alt="pencil" width={18} />
                <img src={trash} alt="trash" width={18} onClick={deleteListItem} />
            </div>
        </div>
    );
}