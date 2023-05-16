export default function ShowUsers() {
    let list = [
        { name: 'Mike', age: '20', eMail: 'example@gmail.com' },
        { name: 'Tom', age: '19', eMail: 'example@gmail.com' },
        { name: 'Joe', age: '35', eMail: 'example@gmail.com' },
        { name: 'Hope', age: '27', eMail: 'example@gmail.com' }
    ]

    return (
        <div className="list-box">
            <table className="list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td className="un">{user.name}</td>
                                    <td className="ua">{user.age}</td>
                                    <td className="ue">{user.eMail}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}